"use client";

import { useState } from "react";

const PLAN_LABEL = { trial: "15일 체험", acronis: "Acronis 1년 무상", paid: "유상 라이선스" };

export default function DownloadUnlock() {
  const [key, setKey] = useState("");
  const [status, setStatus] = useState("idle"); // idle | checking | ok | error
  const [msg, setMsg] = useState("");
  const [info, setInfo] = useState(null);

  async function unlock(e) {
    e.preventDefault();
    const k = key.trim();
    if (!k) return;
    setStatus("checking"); setMsg("");
    try {
      const res = await fetch("/api/downloads/verify", {
        method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ key: k }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) { setStatus("error"); setInfo(null); setMsg(data.error || "키를 확인할 수 없습니다."); return; }
      setStatus("ok"); setInfo(data);
    } catch {
      setStatus("error"); setMsg("네트워크 오류로 확인에 실패했습니다.");
    }
  }

  const input = "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 font-mono text-xs text-slate-900 outline-none focus:border-blue-600";

  return (
    <div className="rounded-[24px] border border-slate-300 bg-white p-7 shadow-sm md:p-9">
      <div className="font-mono text-[11px] font-black tracking-widest text-blue-700">LICENSE KEY</div>
      <h2 className="mt-2 font-display text-2xl font-black">다운로드 키 입력</h2>
      <p className="mt-2 text-sm leading-7 text-slate-600">
        담당자가 이메일로 보내드린 라이선스 키를 붙여넣고 확인하세요. 키가 확인되면 설치파일 다운로드 버튼이 나타납니다.
        아직 키가 없다면 <a href="/downloads/einsguard-ai/request" className="font-bold text-blue-700 underline">다운로드 키 신청</a>을 먼저 해주세요.
      </p>

      <form onSubmit={unlock} className="mt-5 flex flex-col gap-3 sm:flex-row">
        <textarea value={key} onChange={(e) => setKey(e.target.value)} rows={2} placeholder="예) eyJsaWNlbnNlX2lkIjoi… .  (payload.signature 형식의 한 줄 키)" className={`${input} flex-1 resize-y`} />
        <button disabled={status === "checking"} className="shrink-0 rounded-lg bg-slate-950 px-6 py-3 text-sm font-black text-white disabled:opacity-50">
          {status === "checking" ? "확인 중…" : "키 확인"}
        </button>
      </form>
      {status === "error" && <p className="mt-3 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">{msg}</p>}

      {status === "ok" && info && (
        <div className="mt-6">
          <div className="flex flex-wrap items-center gap-3 rounded-xl border border-emerald-300 bg-emerald-50 px-5 py-4 text-sm">
            <span className="font-black text-emerald-800">키 확인됨</span>
            <span className="rounded-full bg-white px-3 py-1 font-bold text-slate-700">{PLAN_LABEL[info.plan] || info.plan}</span>
            {info.company && <span className="text-slate-600">· {info.company}</span>}
            {info.expiresAt && <span className="text-slate-600">· 만료 {new Date(info.expiresAt).toLocaleDateString("ko-KR")}</span>}
          </div>
          <div className="mt-5 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {info.files.map((f) => (
              <article key={f.slug} className="flex flex-col rounded-[20px] border border-slate-300 bg-white p-6">
                <div className="font-mono text-[10px] font-black tracking-widest text-blue-700">{f.platform}</div>
                <h3 className="mt-2 font-display text-xl font-black">{f.title}</h3>
                <ul className="mt-4 flex-1 space-y-1.5 text-sm text-slate-600">{f.items.map((x) => <li key={x}>✓ {x}</li>)}</ul>
                <a href={f.url} className="mt-5 rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-black text-white">설치 파일 다운로드</a>
                {f.sha && <>
                  <a href={`${f.url}&sha=1`} className="mt-2 rounded-xl border border-slate-300 px-4 py-2 text-center text-xs font-bold">SHA-256 파일</a>
                  <code className="mt-3 break-all rounded-lg bg-slate-100 p-2.5 text-[9px] leading-4 text-slate-600">{f.sha}</code>
                </>}
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-500">다운로드 링크는 보안을 위해 일정 시간이 지나면 만료됩니다. 만료되면 키를 다시 확인해 주세요.</p>
        </div>
      )}
    </div>
  );
}
