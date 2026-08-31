"use client";

import { useState } from "react";

const COMPANY_MAIL = "sungil.yum@einstech.kr";
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "";

export default function RemovalRequestForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | email | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("_subject", `[EINSGUARD AI 제거 요청] ${data.get("company") || ""}`);

    if (!FORMSPREE_ID) {
      const subject = `[EINSGUARD AI 제거 요청] ${data.get("company") || ""}`;
      const body = [
        `회사명: ${data.get("company") || ""}`,
        `담당자: ${data.get("name") || ""}`,
        `연락처: ${data.get("phone") || ""}`,
        `회신 이메일: ${data.get("email") || ""}`,
        `대상 장비(호스트명): ${data.get("hostnames") || ""}`,
        `관리 서버 주소: ${data.get("server") || ""}`,
        "",
        `제거 사유:`,
        String(data.get("reason") || ""),
      ].join("\n");
      window.location.href = `mailto:${COMPANY_MAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("email");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const b = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMsg(b?.errors?.map((x) => x.message).join(", ") || "전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("네트워크 오류로 전송에 실패했습니다.");
    }
  }

  if (status === "success" || status === "email") {
    return (
      <div className="rounded-[20px] border border-emerald-400 bg-emerald-50 p-8">
        <div className="font-mono text-[11px] font-black tracking-widest text-emerald-700">
          {status === "success" ? "REQUEST_SENT" : "EMAIL_CLIENT_OPENED"}
        </div>
        <h3 className="mt-3 font-display text-2xl font-black text-slate-900">
          {status === "success" ? "제거 요청이 전송되었습니다." : "메일 작성 화면을 열었습니다."}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          담당자가 장비 등록 상태를 확인한 뒤, 관리자 승인이 반영된 <b>전용 제거 도구와 실행 방법</b>을 회신 이메일로
          보내드립니다. 전달받은 도구를 관리자 권한으로 실행하면 에이전트가 제거됩니다.
          {status === "email" && <> 메일 앱에서 전송을 완료해 주세요. 화면이 열리지 않으면 {COMPANY_MAIL}로 직접 보내주세요.</>}
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold">
          새 요청 작성 →
        </button>
      </div>
    );
  }

  const input =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-600";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-xs font-bold text-slate-500">회사명 *
          <input name="company" required placeholder="㈜ 아인스테크" className={input} />
        </label>
        <label className="flex flex-col gap-2 text-xs font-bold text-slate-500">담당자명 *
          <input name="name" required placeholder="홍길동" className={input} />
        </label>
        <label className="flex flex-col gap-2 text-xs font-bold text-slate-500">회신 이메일 *
          <input name="email" type="email" required placeholder="name@company.com" className={input} />
        </label>
        <label className="flex flex-col gap-2 text-xs font-bold text-slate-500">연락처
          <input name="phone" type="tel" placeholder="010-0000-0000" className={input} />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-xs font-bold text-slate-500">대상 장비 호스트명 * <span className="font-normal">(여러 대면 쉼표로 구분)</span>
        <input name="hostnames" required placeholder="PC-001, PC-002" className={input} />
      </label>
      <label className="flex flex-col gap-2 text-xs font-bold text-slate-500">관리 서버 주소
        <input name="server" placeholder="10.0.0.10 또는 https://guard.example.com" className={input} />
      </label>
      <label className="flex flex-col gap-2 text-xs font-bold text-slate-500">제거 사유 *
        <textarea name="reason" required rows={5} placeholder="교체, 반납, 퇴사자 정리 등 제거가 필요한 사유를 적어주세요." className={`${input} resize-y`} />
      </label>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />
      <label className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs leading-5 text-slate-600">
        <input type="checkbox" name="privacy_consent" value="동의" required className="mt-1" />
        <span><b className="text-slate-900">개인정보 수집·이용에 동의합니다. *</b><br />회사명·담당자·연락처·이메일·장비 정보는 제거 요청 확인과 회신 목적으로만 사용됩니다.</span>
      </label>
      {status === "error" && (
        <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-xs font-bold text-red-700">{errorMsg}</div>
      )}
      <button type="submit" disabled={status === "submitting"} className="rounded-xl bg-slate-950 px-8 py-4 text-sm font-black text-white disabled:opacity-50">
        {status === "submitting" ? "전송 중..." : "제거 요청 보내기"}
      </button>
    </form>
  );
}
