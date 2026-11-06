// 메인 대표 제품(히어로)을 2개월마다 교대로 노출한다.
// 기준: 한국시간 2026년 11월부터 2개월 단위. 순서를 바꾸거나 제품을 추가하려면 ROTATION만 수정한다.
const ROTATION = ["einsguard", "einswall"];
const START_YEAR = 2026;
const START_MONTH = 11; // 1~12
const MONTHS_PER_SLOT = 2;

export function currentFeaturedHero(now = new Date()) {
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const elapsed = (kst.getUTCFullYear() - START_YEAR) * 12 + (kst.getUTCMonth() + 1 - START_MONTH);
  const slot = Math.floor(Math.max(0, elapsed) / MONTHS_PER_SLOT);
  return ROTATION[slot % ROTATION.length];
}

function EinsguardHero() {
  return (
        <section className="relative flex min-h-[74vh] items-center overflow-hidden bg-slate-950 pb-20 pt-32 text-white lg:pt-36">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,.28),transparent_38%)]"></div>
          <div className="relative mx-auto grid w-full max-w-page gap-12 px-6 lg:grid-cols-[1.25fr_.75fr] lg:px-12">
            <div>
              <div className="font-mono text-xs font-black tracking-[.24em] text-emerald-300">ENTERPRISE AI CODING SECURITY</div>
              <h1 className="mt-6 font-display text-6xl font-black tracking-tight md:text-7xl">EINSGUARD AI</h1>
              <p className="mt-5 text-2xl font-black text-emerald-300 md:text-3xl">기업용 AI 코딩 도구 보안·관리</p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">Claude Code, Codex, Gemini CLI, Ollama 등 사내 AI 코딩 도구의 사용 현황과 위험 행동을 한눈에 확인하고 정책·승인·감사 이력을 온프레미스로 관리합니다.</p>
              <div className="mt-9 flex flex-wrap gap-4"><a href="/downloads/einsguard-ai" className="rounded-2xl bg-emerald px-8 py-4 font-black text-slate-950">15일 무료체험</a><a href="/einsguard-ai" className="rounded-2xl border border-white/20 px-8 py-4 font-black text-white">제품 자세히 보기</a></div>
            </div>
            <div className="self-center overflow-hidden rounded-3xl border border-white/10 bg-[#0a0f1e] shadow-2xl shadow-emerald/10">
              <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4"><div><div className="font-mono text-[9px] tracking-widest text-emerald-400">EINSTECH</div><div className="text-sm font-black">EINSGUARD AI</div></div><div className="font-mono text-[10px] text-emerald-400">● LIVE</div></div>
              <div className="p-5"><div className="text-base font-black">보안 운영 현황</div><div className="mt-1 text-[11px] text-slate-500">위험을 확인하고 필요한 조치를 바로 실행하세요.</div><div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-xl border border-slate-800 bg-slate-900 p-4"><div className="text-[10px] text-slate-400">고위험 알림</div><div className="mt-1 text-2xl font-black text-emerald-400">0</div></div><div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4"><div className="text-[10px] text-slate-400">승인 대기</div><div className="mt-1 text-2xl font-black text-yellow-400">2</div></div><div className="rounded-xl border border-slate-800 bg-slate-900 p-4"><div className="text-[10px] text-slate-400">활성 세션</div><div className="mt-1 text-2xl font-black text-blue-400">12</div></div><div className="rounded-xl border border-slate-800 bg-slate-900 p-4"><div className="text-[10px] text-slate-400">오늘 실행</div><div className="mt-1 text-2xl font-black text-white">340</div></div></div><div className="mt-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-xs text-emerald-300">현재 미해결 고위험 알림이 없습니다.</div></div>
            </div>
          </div>
        </section>
  );
}

function EinswallHero() {
  return (
        <section className="relative flex min-h-[74vh] items-center overflow-hidden bg-slate-950 pb-20 pt-32 text-white lg:pt-36">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,.28),transparent_38%)]"></div>
          <div className="relative mx-auto grid w-full max-w-page gap-12 px-6 lg:grid-cols-[1.25fr_.75fr] lg:px-12">
            <div>
              <div className="font-mono text-xs font-black tracking-[.24em] text-emerald-300">ENTERPRISE FIREWALL</div>
              <h1 className="mt-6 font-display text-6xl font-black tracking-tight md:text-7xl">EINSWALL</h1>
              <p className="mt-5 text-2xl font-black text-emerald-300 md:text-3xl">업무망·서버망 경계 통합 방화벽</p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">업무망·서버망·게스트망·CCTV망 사이의 접근 정책과 인터넷 경계를 통합 보호합니다. 경제적인 1G 운용형부터 10G SFP+ 고급형까지, 일시불 구매와 구독형 중에서 선택할 수 있습니다.</p>
              <div className="mt-9 flex flex-wrap gap-4"><a href="/contact" className="rounded-2xl bg-emerald px-8 py-4 font-black text-slate-950">구축 문의</a><a href="/einswall" className="rounded-2xl border border-white/20 px-8 py-4 font-black text-white">제품 자세히 보기</a></div>
            </div>
            <div className="self-center overflow-hidden rounded-3xl border border-white/10 bg-[#0a0f1e] shadow-2xl shadow-emerald/10">
              <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4"><div><div className="font-mono text-[9px] tracking-widest text-emerald-400">EINSTECH</div><div className="text-sm font-black">EINSWALL</div></div><div className="font-mono text-[10px] text-emerald-400">● LIVE</div></div>
              <div className="p-5"><div className="text-base font-black">방화벽 운영 현황</div><div className="mt-1 text-[11px] text-slate-500">경계 트래픽을 실시간으로 감시·차단합니다.</div><div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-xl border border-slate-800 bg-slate-900 p-4"><div className="text-[10px] text-slate-400">차단된 위협</div><div className="mt-1 text-2xl font-black text-emerald-400">128</div></div><div className="rounded-xl border border-slate-800 bg-slate-900 p-4"><div className="text-[10px] text-slate-400">활성 정책</div><div className="mt-1 text-2xl font-black text-blue-400">24</div></div><div className="rounded-xl border border-slate-800 bg-slate-900 p-4"><div className="text-[10px] text-slate-400">VPN 연결</div><div className="mt-1 text-2xl font-black text-white">8</div></div><div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4"><div className="text-[10px] text-slate-400">가동률</div><div className="mt-1 text-2xl font-black text-emerald-400">99.9%</div></div></div><div className="mt-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-xs text-emerald-300">현재 경계 구간 이상 징후가 없습니다.</div></div>
            </div>
          </div>
        </section>
  );
}

export default function FeaturedHero() {
  return currentFeaturedHero() === "einswall" ? <EinswallHero /> : <EinsguardHero />;
}
