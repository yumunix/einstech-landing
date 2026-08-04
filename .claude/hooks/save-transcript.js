#!/usr/bin/env node
/*
 * Claude Code Stop/SessionEnd hook: 대화 기록(transcript)을 WebDAV에 저장.
 *
 * 저장 방식 (둘 다 시도, 가능한 쪽만 동작):
 *  1) 드라이브 복사 — Windows 로컬 PC에서 실행 시 Z:\einstech-ai\claude-logs 로 복사.
 *     경로 변경: 환경변수 CLAUDE_LOG_DIR (WSL이면 /mnt/z/einstech-ai/claude-logs 등)
 *  2) HTTP 업로드 — 환경변수 WEBDAV_URL 이 설정된 경우 curl 로 PUT 업로드.
 *     인증: WEBDAV_USER / WEBDAV_PASS (원격 클라우드 세션에서도 동작)
 *
 * 각 대화는 <프로젝트>-<세션ID>.jsonl(원본)과 .md(읽기용 요약)로 저장된다.
 * 어떤 경우에도 Claude Code 를 막지 않도록 항상 종료 코드 0으로 끝난다.
 */
'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const DEFAULT_WIN_DIR = 'Z:\\einstech-ai\\claude-logs';

function extractText(content) {
  if (typeof content === 'string') return content;
  if (!Array.isArray(content)) return '';
  return content
    .filter((b) => b && b.type === 'text' && typeof b.text === 'string')
    .map((b) => b.text)
    .join('\n');
}

function toMarkdown(transcriptPath) {
  const out = ['# Claude Code 대화 기록', ''];
  for (const line of fs.readFileSync(transcriptPath, 'utf8').split('\n')) {
    if (!line.trim()) continue;
    let entry;
    try {
      entry = JSON.parse(line);
    } catch {
      continue;
    }
    if (entry.isMeta) continue;
    if (entry.type !== 'user' && entry.type !== 'assistant') continue;
    const text = extractText(entry.message && entry.message.content).trim();
    if (!text) continue;
    if (text.startsWith('<system-reminder') || text.startsWith('<command-')) continue;
    const role = entry.type === 'user' ? '👤 사용자' : '🤖 Claude';
    const when = entry.timestamp ? ` — ${entry.timestamp}` : '';
    out.push(`### ${role}${when}`, '', text, '');
  }
  return out.join('\n');
}

function copyToDrive(transcript, baseName, markdown) {
  const destRoot =
    process.env.CLAUDE_LOG_DIR ||
    (process.platform === 'win32' ? DEFAULT_WIN_DIR : null);
  if (!destRoot) return false;
  fs.mkdirSync(destRoot, { recursive: true });
  fs.copyFileSync(transcript, path.join(destRoot, `${baseName}.jsonl`));
  fs.writeFileSync(path.join(destRoot, `${baseName}.md`), markdown);
  return true;
}

function uploadToWebdav(transcript, baseName, markdown) {
  const url = process.env.WEBDAV_URL;
  if (!url) return false;
  const base = `${url.replace(/\/+$/, '')}/${baseName}`;
  const auth = process.env.WEBDAV_USER
    ? ['-u', `${process.env.WEBDAV_USER}:${process.env.WEBDAV_PASS || ''}`]
    : [];
  const mdTmp = path.join(os.tmpdir(), `${baseName}.md`);
  fs.writeFileSync(mdTmp, markdown);
  try {
    execFileSync('curl', ['-fsS', ...auth, '-T', transcript, `${base}.jsonl`], { stdio: 'ignore' });
    execFileSync('curl', ['-fsS', ...auth, '-T', mdTmp, `${base}.md`], { stdio: 'ignore' });
  } finally {
    fs.rmSync(mdTmp, { force: true });
  }
  return true;
}

let raw = '';
process.stdin.on('data', (d) => (raw += d));
process.stdin.on('end', () => {
  try {
    const payload = JSON.parse(raw || '{}');
    const transcript = payload.transcript_path;
    if (!transcript || !fs.existsSync(transcript)) return;

    const project = path.basename(process.cwd());
    const session = payload.session_id || path.basename(transcript, '.jsonl');
    const baseName = `${project}-${session}`;
    const markdown = toMarkdown(transcript);

    try {
      copyToDrive(transcript, baseName, markdown);
    } catch {}
    try {
      uploadToWebdav(transcript, baseName, markdown);
    } catch {}
  } catch {}
});
