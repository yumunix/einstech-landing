"use client";

import { useCallback, useEffect, useState } from "react";

const KEY_STORE = "einstech-downloads-admin-key";
const COMPANY_MAIL = "sungil.yum@einstech.kr";
const PLAN_LABEL = { trial: "15일 체험", "acronis-1y": "Acronis 1년", paid: "유상" };
const STATUS_LABEL = { pending: "대기", issued: "발급됨", revoked: "취소됨" };

function getStoredKey() { try { return sessionStorage.getItem(KEY_STORE) || ""; } catch { return ""; } }
function storeKey(v) { try { v ? sessionStorage.setItem(KEY_STORE, v) : sessionStorage.removeItem(KEY_STORE); } catch {} }
function fmt(d) { return d ? new Date(d).toLocaleString("ko-KR") : "-"; }
function fmtDate(d) { return d ? new Date(d).toLocaleDateString("ko-KR") : "-"; }
function daysLeft(d) { if (!d) return null; return Math.ceil((Date.parse(d) - Date.now()) / 86400000); }

export default function DownloadsAdmin() {
  const [key, setKey] = useState("");
  const [authed, setAuthed] = useState(false);
  const [items, setItems] = useState([]);
  const [summary, setSummary] = useState(null);
  const [plans, setPlans] = useState({});
  const [canIssue, setCanIssue] = useState(true);
  const [msg, setMsg] = useState("");
  const [issued, setIssued] = useState(null); // { id, token, item }

  const load = useCallback(async (k = key) => {
    const res = await fetch("/api/downloads/admin", { headers: { "x-admin-key": k } });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) { setAuthed(false); setMsg(data.error || `오류 ${res.status}`); return; }
    setAuthed(true); setMsg(""); storeKey(k);
    setItems(data.items); setSummary(data.summary); setPlans(data.plans); setCanIssue(data.canIssue);
  }, [key]);

  useEffect(() => { const k = getStoredKey(); if (k) { setKey(k); load(k); } }, []); // eslint-disable-line

  const post = useCallback((bodyObj) => fetch("/api/downloads/admin", {
    method: "POST", headers: { "content-type": "application/json", "x-admin-key": key }, body: JSON.stringify(bodyObj),
  }), [key]);

  async function act(item, action) {
    let days, plan = item.plan;
    if (action === "issue" || action === "extend") {
      const preset = plans[item.plan] || { days: 15 };
      const d = prompt(`${action === "extend" ? "연장" : "발급"}할 사용 기간(일)을 입력하세요.\n(${PLAN_LABEL[item.plan] || item.plan} 기본 ${preset.days}일)`, String(preset.days));
      if (d === null) return;
      days = parseInt(d, 10) || preset.days;
    }
    if (action === "revoke" && !confirm("이 키를 취소 처리할까요? 기록은 남습니다.")) return;
    setMsg("처리 중…");
    const res = await post({ id: item.id, action, days, plan });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) { setMsg(data.error || `오류 ${res.status}`); return; }
    setMsg("");
    if (data.token) setIssued({ id: item.id, token: data.token, item: data.item });
    load();
  }

  async function del(item) {
    if (!confirm(`'${item.company}' 신청 기록을 완전히 삭제할까요? 되돌릴 수 없습니다.`)) return;
    const res = await fetch(`/api/downloads/admin?id=${item.id}`, { method: "DELETE", headers: { "x-admin-key": key } });
    if (res.ok) { setMsg("삭제됨"); load(); } else setMsg("삭제 실패");
  }

  function mailto(item, token) {
    const subject = `[EINSTECH] EINSGUARD AI 다운로드 라이선스 키 (${PLAN_LABEL[item.plan] || item.plan})`;
    const body = [
      `${item.name || ""}님 안녕하세요, 아인스테크입니다.`,
      ``,
      `신청하신 EINSGUARD AI 다운로드 라이선스 키를 보내드립니다.`,
      `사용권: ${PLAN_LABEL[item.plan] || item.plan}`,
      `만료일: ${fmtDate(item.expiresAt)}`,
      ``,
      `[라이선스 키]`,
      token,
      ``,
      `사용 방법`,
      `1) https://www.einstech.kr/downloads/einsguard-ai 접속`,
      `2) '다운로드 키 입력'란에 위 키를 붙여넣고 확인`,
      `3) 설치파일을 내려받아 설치`,
      ``,
      `문의: 031-893-0015 / ${COMPANY_MAIL}`,
    ].join("\n");
    return `mailto:${encodeURIComponent(item.email || "")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const input = "w-full rounded-lg border border-slate-300 px-3 py-2 text-sm";

  if (!authed) return (
    <div className="mx-auto max-w-sm rounded-2xl border border-slate-200 bg-white p-8">
      <h1 className="text-xl font-black">다운로드 키 관리</h1>
      <p className="mt-2 text-sm text-slate-500">사내망에서만 열립니다. 관리자 비밀번호를 입력하세요.</p>
      <form className="mt-5 space-y-3" onSubmit={(e) => { e.preventDefault(); load(key); }}>
        <input type="password" value={key} onChange={(e) => setKey(e.target.value)} className={input} placeholder="관리자 비밀번호" autoFocus />
        <button className="w-full rounded-lg bg-slate-900 py-2.5 text-sm font-bold text-white">들어가기</button>
      </form>
      {msg && <p className="mt-3 text-sm text-red-600">{msg}</p>}
    </div>
  );

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black">EINSGUARD AI 다운로드 키 관리</h1>
        <div className="flex gap-3 text-sm">
          <a href="/downloads/einsguard-ai" target="_blank" className="font-bold text-blue-700">다운로드 센터 ↗</a>
          <button onClick={() => { storeKey(""); setAuthed(false); setKey(""); }} className="text-slate-500">나가기</button>
        </div>
      </div>
      {!canIssue && <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-bold text-amber-800">서명 개인키가 이 서버에 없어 키 발급이 비활성화되어 있습니다.</p>}

      {summary && (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-6">
          {[["신청 합계", summary.total], ["대기", summary.pending], ["발급됨", summary.issued], ["받아감", summary.downloaded], ["만료", summary.expired], ["취소", summary.revoked]].map(([k, v]) => (
            <div key={k} className="rounded-xl border border-slate-200 bg-white p-4 text-center">
              <div className="text-2xl font-black">{v}</div><div className="mt-1 text-xs font-bold text-slate-500">{k}</div>
            </div>
          ))}
        </div>
      )}

      {issued && (
        <div className="mt-6 rounded-2xl border border-emerald-400 bg-emerald-50 p-6">
          <div className="flex items-center justify-between">
            <div className="font-black text-emerald-900">키 발급 완료 — {issued.item.company} ({issued.item.email})</div>
            <button onClick={() => setIssued(null)} className="text-sm text-slate-500">닫기</button>
          </div>
          <p className="mt-2 text-sm text-slate-700">만료일 {fmtDate(issued.item.expiresAt)}. 아래 키를 고객에게 이메일로 보내세요. (키는 지금만 표시됩니다)</p>
          <textarea readOnly value={issued.token} rows={2} className="mt-3 w-full rounded-lg border border-slate-300 bg-white p-3 font-mono text-[11px]" onFocus={(e) => e.target.select()} />
          <div className="mt-3 flex flex-wrap gap-3">
            <button onClick={() => { navigator.clipboard?.writeText(issued.token); setMsg("키를 복사했습니다."); }} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-white">키 복사</button>
            <a href={mailto(issued.item, issued.token)} className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white">메일 작성(키 포함) →</a>
          </div>
        </div>
      )}
      {msg && <p className="mt-3 text-sm text-slate-600">{msg}</p>}

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-3 text-sm font-bold">신청 {items.length}건</div>
        {items.length === 0 && <div className="px-5 py-10 text-center text-sm text-slate-500">아직 신청이 없습니다.</div>}
        {items.map((i) => {
          const dl = daysLeft(i.expiresAt);
          const expired = i.status === "issued" && dl !== null && dl <= 0;
          return (
            <div key={i.id} className={`border-b border-slate-100 px-5 py-4 last:border-0 ${i.status === "revoked" ? "opacity-60" : ""}`}>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${i.status === "issued" ? "bg-emerald-100 text-emerald-800" : i.status === "pending" ? "bg-amber-100 text-amber-800" : "bg-slate-200 text-slate-600"}`}>{STATUS_LABEL[i.status]}</span>
                <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-bold text-blue-700">{PLAN_LABEL[i.plan] || i.plan}</span>
                <b>{i.company}</b><span className="text-slate-500">· {i.name} · {i.email}{i.phone ? ` · ${i.phone}` : ""}</span>
                {i.hostCount ? <span className="text-slate-500">· {i.hostCount}대</span> : null}
              </div>
              <div className="mt-1 text-xs text-slate-500">
                신청 {fmt(i.createdAt)}
                {i.acronisOrder ? ` · Acronis: ${i.acronisOrder}` : ""}
                {i.status === "issued" && <> · 만료 {fmtDate(i.expiresAt)} {expired ? <b className="text-red-600">(만료됨)</b> : dl !== null ? `(${dl}일 남음)` : ""} · 다운로드 {i.downloads || 0}회{i.lastDownloadAt ? ` (마지막 ${fmt(i.lastDownloadAt)})` : ""}</>}
              </div>
              {i.note && <div className="mt-1 text-xs text-slate-500">요청: {i.note}</div>}
              <div className="mt-2 flex flex-wrap gap-2">
                {i.status !== "issued" && <button onClick={() => act(i, "issue")} disabled={!canIssue} className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-bold text-white disabled:opacity-40">키 발급</button>}
                {i.status === "issued" && <button onClick={() => act(i, "extend")} disabled={!canIssue} className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white disabled:opacity-40">{expired ? "연장·재발급" : "기간 연장"}</button>}
                {i.status === "issued" && <button onClick={() => act(i, "revoke")} className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-bold">취소</button>}
                <button onClick={() => del(i)} className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-bold text-red-600">삭제</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
