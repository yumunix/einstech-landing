"use client";

import { useState } from "react";

const inquiryTypes = [
  { value: "BCP", label: "BCP (Business Continuity Planning)" },
  { value: "HA Cluster", label: "HA Cluster — Rose" },
  { value: "Storage", label: "Storage (Hitachi 외)" },
  { value: "Backup", label: "Backup (Acronis / NetBackup)" },
  { value: "DLP", label: "DLP / 백신" },
  { value: "기타", label: "기타 / 일반 문의" },
];

const FORMSPREE_ID =
  process.env.NEXT_PUBLIC_FORMSPREE_ID || "";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!FORMSPREE_ID) {
      setStatus("error");
      setErrorMsg(
        "폼이 아직 설정되지 않았습니다. 아래 이메일/전화로 직접 문의해 주세요.",
      );
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

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
        const body = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMsg(
          body?.errors?.map((x) => x.message).join(", ") ||
            "전송에 실패했습니다. 잠시 후 다시 시도해 주세요.",
        );
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("네트워크 오류로 전송에 실패했습니다.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-acid/40 bg-acid/5 p-8 md:p-10">
        <div className="font-mono text-[10px] text-acid uppercase tracking-widest mb-3">
          STATUS_OK · MESSAGE_DELIVERED
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 ds-word-keep">
          문의가 정상적으로 전송되었습니다.
        </h3>
        <p className="font-sans text-muted-strong text-base leading-relaxed ds-word-keep mb-6">
          빠른 시일 내에 담당 엔지니어가 회신드리겠습니다. 평일 기준 1영업일 이내에
          연락드리는 것을 원칙으로 합니다.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="font-mono text-sm text-cyan hover:text-white border-b border-cyan/40 hover:border-white pb-0.5 transition-colors"
        >
          새 문의 작성하기 →
        </button>
      </div>
    );
  }

  const baseInput =
    "w-full bg-black/40 border border-surface-border focus:border-cyan/70 outline-none px-4 py-3 font-sans text-sm text-white placeholder:text-muted/60 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="font-mono text-[10px] text-muted uppercase tracking-widest">
            회사명 *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="㈜ 아인스테크"
            className={baseInput}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-mono text-[10px] text-muted uppercase tracking-widest">
            담당자명 *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="홍길동"
            className={baseInput}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="font-mono text-[10px] text-muted uppercase tracking-widest">
            연락처
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="010-0000-0000"
            className={baseInput}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-mono text-[10px] text-muted uppercase tracking-widest">
            이메일 *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="name@company.com"
            className={baseInput}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="inquiry" className="font-mono text-[10px] text-muted uppercase tracking-widest">
          문의 유형 *
        </label>
        <select
          id="inquiry"
          name="inquiry"
          required
          defaultValue=""
          className={baseInput}
        >
          <option value="" disabled>
            -- 선택해 주세요 --
          </option>
          {inquiryTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-mono text-[10px] text-muted uppercase tracking-widest">
          문의 내용 *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="현재 환경, 도입 시기, 예상 규모 등을 알려주시면 더 정확한 답변이 가능합니다."
          className={`${baseInput} resize-y min-h-[160px]`}
        />
      </div>

      {/* Honeypot */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

      {status === "error" && (
        <div className="border border-alert/50 bg-alert/5 px-4 py-3 font-mono text-xs text-alert">
          {errorMsg}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between pt-2">
        <p className="font-mono text-[10px] text-muted leading-relaxed">
          제출 시 입력하신 정보는 문의 응대 목적으로만 사용되며 별도 보관/마케팅에 활용되지 않습니다.
        </p>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="ds-btn-primary font-display font-medium px-8 py-4 uppercase tracking-wider text-sm group disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
        >
          <span>{status === "submitting" ? "전송 중..." : "문의 전송"}</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
