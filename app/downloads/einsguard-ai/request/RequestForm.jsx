"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "";

function Inner() {
  const sp = useSearchParams();
  const initialPlan = sp.get("plan") === "acronis-1y" ? "acronis-1y" : "trial";
  const [plan, setPlan] = useState(initialPlan);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [msg, setMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const fd = new FormData(form);
    const body = Object.fromEntries(fd.entries());
    body.plan = plan;
    body.privacy_consent = fd.get("privacy_consent") ? "동의" : "";
    setStatus("submitting"); setMsg("");
    try {
      const res = await fetch("/api/downloads/request", {
        method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) { setStatus("error"); setMsg(data.error || "전송에 실패했습니다."); return; }
      // 담당자 메일 알림(설정돼 있을 때만, 실패해도 신청은 접수됨)
      if (FORMSPREE_ID) {
        const nd = new FormData();
        nd.set("_subject", `[EINSGUARD AI 다운로드 키 신청] ${body.company || ""} (${plan === "acronis-1y" ? "Acronis 1년" : "15일 체험"})`);
        ["company", "name", "email", "phone", "hostCount", "acronisOrder", "installationId", "note"].forEach((k) => nd.set(k, body[k] || ""));
        nd.set("plan", plan);
        fetch(`https://formspree.io/f/${FORMSPREE_ID}`, { method: "POST", body: nd, headers: { Accept: "application/json" } }).catch(() => {});
      }
      setStatus("success"); form.reset();
    } catch {
      setStatus("error"); setMsg("네트워크 오류로 전송에 실패했습니다.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[20px] border border-emerald-400 bg-emerald-50 p-8">
        <div className="font-mono text-[11px] font-black tracking-widest text-emerald-700">REQUEST_SENT</div>
        <h3 className="mt-3 font-display text-2xl font-black text-slate-900">다운로드 키 신청이 접수되었습니다.</h3>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          담당자가 확인한 뒤 <b>라이선스 키를 회신 이메일로</b> 보내드립니다. 받으신 키를
          <a href="/downloads/einsguard-ai" className="font-bold underline"> 다운로드 센터</a>에 입력하면 설치파일을 내려받을 수 있습니다.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold">새 신청 작성 →</button>
      </div>
    );
  }

  const input = "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-600";
  const acronis = plan === "acronis-1y";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <div className="text-xs font-bold text-slate-500">사용권 종류</div>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          <button type="button" onClick={() => setPlan("trial")} className={`rounded-xl border p-4 text-left ${!acronis ? "border-blue-600 bg-blue-50" : "border-slate-300 bg-white"}`}>
            <div className="font-black">15일 체험</div>
            <div className="mt-1 text-xs text-slate-600">기본. 발급일로부터 15일 사용.</div>
          </button>
          <button type="button" onClick={() => setPlan("acronis-1y")} className={`rounded-xl border p-4 text-left ${acronis ? "border-emerald-600 bg-emerald-50" : "border-slate-300 bg-white"}`}>
            <div className="font-black">Acronis 구매 · 1년 무상</div>
            <div className="mt-1 text-xs text-slate-600">Acronis 유상 구매 고객. 1년 무상 사용권.</div>
          </button>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-xs font-bold text-slate-500">회사명 *<input name="company" required placeholder="㈜ 아인스테크" className={input} /></label>
        <label className="flex flex-col gap-2 text-xs font-bold text-slate-500">담당자명 *<input name="name" required placeholder="홍길동" className={input} /></label>
        <label className="flex flex-col gap-2 text-xs font-bold text-slate-500">회신 이메일 *<input name="email" type="email" required placeholder="name@company.com" className={input} /></label>
        <label className="flex flex-col gap-2 text-xs font-bold text-slate-500">연락처<input name="phone" type="tel" placeholder="010-0000-0000" className={input} /></label>
        <label className="flex flex-col gap-2 text-xs font-bold text-slate-500">설치 대상 대수<input name="hostCount" type="number" min="0" placeholder="예) 10" className={input} /></label>
        <label className="flex flex-col gap-2 text-xs font-bold text-slate-500">설치 ID(있으면)<input name="installationId" placeholder="관리 콘솔의 설치 ID" className={input} /></label>
      </div>

      {acronis && (
        <label className="flex flex-col gap-2 text-xs font-bold text-emerald-700">Acronis 주문·구매 정보 * <span className="font-normal text-slate-500">(주문번호 / 견적번호 / 구매처 등)</span>
          <input name="acronisOrder" required={acronis} placeholder="예) Acronis Workstation 20카피, 주문번호 A-2026-xxxx" className={input} />
        </label>
      )}

      <label className="flex flex-col gap-2 text-xs font-bold text-slate-500">요청 사항 (선택)
        <textarea name="note" rows={4} placeholder="도입 일정, 환경(내부 LLM 종류) 등 참고 사항을 적어주세요." className={`${input} resize-y`} />
      </label>

      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />
      <label className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs leading-5 text-slate-600">
        <input type="checkbox" name="privacy_consent" value="동의" required className="mt-1" />
        <span><b className="text-slate-900">개인정보 수집·이용에 동의합니다. *</b><br />회사명·담당자·연락처·이메일·구매 정보는 키 발급과 회신 목적으로만 사용됩니다.</span>
      </label>

      {status === "error" && <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-xs font-bold text-red-700">{msg}</div>}
      <button type="submit" disabled={status === "submitting"} className="rounded-xl bg-slate-950 px-8 py-4 text-sm font-black text-white disabled:opacity-50">
        {status === "submitting" ? "전송 중..." : "다운로드 키 신청 보내기"}
      </button>
    </form>
  );
}

export default function RequestForm() {
  return <Suspense fallback={<div className="text-sm text-slate-500">불러오는 중…</div>}><Inner /></Suspense>;
}
