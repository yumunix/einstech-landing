# Claude Code 대화 기록 → WebDAV(Z:\einstech-ai) 자동 저장

이 폴더의 hook은 Claude Code가 응답을 마칠 때(`Stop`)와 세션이 끝날 때(`SessionEnd`)
대화 기록(transcript)을 WebDAV에 자동 저장합니다.

각 대화는 두 가지 파일로 저장됩니다:

- `<프로젝트>-<세션ID>.jsonl` — 전체 원본 기록 (도구 호출 포함)
- `<프로젝트>-<세션ID>.md` — 사용자/Claude 대화만 추린 읽기용 마크다운

같은 세션은 같은 파일에 덮어쓰기되므로, 대화가 이어질수록 파일이 최신 상태로 갱신됩니다.

## 방법 1 — 로컬 Windows PC에서 사용 (Z: 드라이브 직접 복사)

`Z:` 드라이브는 사용자의 Windows PC에만 매핑되어 있으므로, 이 방식은
**로컬 PC에서 Claude Code를 실행할 때** 동작합니다.

1. 로컬 PC에서 이 저장소를 `git pull` 합니다.
2. 프로젝트 폴더에서 Claude Code를 실행하면 hook이 자동으로 적용됩니다.
   - 이미 실행 중인 세션이라면 `/hooks`를 한 번 열어 설정을 다시 불러오거나 재시작하세요.
3. 대화가 끝날 때마다 `Z:\einstech-ai\claude-logs\`에 기록이 저장됩니다.

저장 위치를 바꾸려면 환경변수 `CLAUDE_LOG_DIR`를 설정하세요.
WSL에서 쓰는 경우에도 이 변수로 지정합니다 (예: `/mnt/z/einstech-ai/claude-logs`).

## 방법 2 — 원격(웹) 세션 포함, WebDAV HTTP 업로드

claude.ai 웹에서 실행되는 원격 세션은 클라우드 컨테이너에서 돌기 때문에
`Z:` 드라이브에 접근할 수 없습니다. 대신 `Z:`가 가리키는 WebDAV 서버의
**HTTP(S) 주소**로 직접 업로드할 수 있습니다.

`.claude/settings.local.json` 파일(커밋되지 않음)을 만들어 접속 정보를 넣으세요:

```json
{
  "env": {
    "WEBDAV_URL": "https://<WebDAV서버주소>/einstech-ai/claude-logs",
    "WEBDAV_USER": "사용자명",
    "WEBDAV_PASS": "비밀번호"
  }
}
```

- `WEBDAV_URL`은 Windows에서 `Z:`를 연결할 때 사용한 주소입니다.
  (탐색기 → 내 PC → `Z:` 우클릭 → 속성, 또는 `net use` 명령으로 확인)
- **주의: 비밀번호가 들어가므로 `settings.local.json`은 절대 커밋하지 마세요.**
  (`.gitignore`에 이미 추가되어 있습니다)
- 원격 세션에서 사용하려면 해당 WebDAV 서버가 인터넷에서 접근 가능해야 하고,
  실행 환경의 네트워크 정책이 그 주소를 허용해야 합니다.

두 방법은 동시에 설정해도 됩니다 — 가능한 쪽이 알아서 동작합니다.

## 문제 해결

- hook이 안 도는 것 같으면: `/hooks` 메뉴에서 `Stop` / `SessionEnd` hook이 보이는지 확인.
- 수동 테스트 (프로젝트 폴더에서):

  ```bash
  echo '{"transcript_path":"<기록파일경로>","session_id":"test"}' | node .claude/hooks/save-transcript.js
  ```

- 로컬 기록 파일 위치: `~/.claude/projects/<프로젝트경로>/<세션ID>.jsonl`
