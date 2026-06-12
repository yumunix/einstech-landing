import Oscilloscope from "@/components/landing/Oscilloscope";
import UptimeCounter from "@/components/landing/UptimeCounter";
import LossCounter from "@/components/landing/LossCounter";
import Logo from "@/components/landing/Logo";

export default function Home() {
  return (
    <div id="app">
      <header className="telemetry border-b">
        <div className="telemetry-group">
          <div className="data-point sys-id">
            <Logo size={16} />
            <span className="data-value brand">EINSTECH_V.30</span>
          </div>
          <div className="data-point">
            <span className="data-label">UPTIME</span>
            <UptimeCounter />
          </div>
        </div>
        <div className="telemetry-group">
          <div className="data-point">
            <span className="data-label">LOC</span>
            <span className="data-value">SEOUL.KR // MFG_NODE_01</span>
          </div>
          <div className="data-point">
            <span className="data-label">STATUS</span>
            <span className="data-value" style={{ color: "var(--c-cyan)" }}>
              ONLINE [SECURE]
            </span>
          </div>
        </div>
      </header>

      <main className="hero-grid border-b">
        <section className="content-panel border-r">
          <div className="badge">EINSTECH INFRA DIAGNOSTICS</div>

          <h1>
            멈추지 않는 시스템,
            <br />
            사라지지 않는 데이터.
          </h1>

          <p className="desc">
            위협은 예방이 아닌 회복으로 답합니다. 아인스테크는{" "}
            <span style={{ color: "var(--text-main)" }}>HA Cluster</span>,{" "}
            <span style={{ color: "var(--text-main)" }}>Storage + Backup</span>,{" "}
            <span style={{ color: "var(--text-main)" }}>Data Security</span>를
            단일 파트너로 통합해 사이버 회복탄력성(Cyber Resilience)을 설계합니다.
          </p>

          <div className="alert-block">
            <div className="alert-header">
              <span>[ LIVE ] DOWNTIME LOSS · 페이지 진입 후 누적</span>
              <span>FACTORY_LOSS_CALC</span>
            </div>
            <div className="alert-value">
              <LossCounter ratePerMin={2_800_000} />{" "}
              <span className="alert-unit">+ ₩2.8M / MIN</span>
            </div>
          </div>

          <div className="commands">
            <a href="/contact" style={{ textDecoration: "none" }}>
              <button className="primary" type="button">
                무료 인프라 진단
              </button>
            </a>
            <a href="/bcp" style={{ textDecoration: "none" }}>
              <button type="button">실제 구축 사례</button>
            </a>
          </div>
        </section>

        <section className="scope-panel">
          <Oscilloscope />

          <div className="scope-ui">
            <div className="scope-corners">
              <div />
              <div />
              <div />
              <div />
            </div>

            <svg
              className="mini-graph"
              viewBox="0 0 60 30"
              preserveAspectRatio="none"
            >
              <path
                d="M0,15 Q15,0 30,15 T60,15"
                fill="none"
                stroke="var(--c-blue)"
                strokeWidth="1"
              />
              <path
                d="M0,15 L5,5 L10,25 L15,10 L20,20 L30,15 L60,15"
                fill="none"
                stroke="var(--c-cyan)"
                strokeWidth="0.5"
                opacity="0.5"
              />
            </svg>

            <div
              style={{
                position: "absolute",
                bottom: 16,
                right: 16,
                textAlign: "right",
              }}
            >
              <div className="data-label" style={{ color: "var(--c-cyan)" }}>
                SIGNAL.STABLE
              </div>
              <div
                className="data-value"
                style={{ fontSize: 9, opacity: 0.5 }}
              >
                FREQ: 44.1kHz // RES: 24bit
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="modules-bar">
        <a className="module border-r" href="/ha-cluster">
          <div className="mod-header">
            <svg className="mod-icon" viewBox="0 0 24 12">
              <path
                d="M0,12 L0,0 L12,0 L12,12 M12,12 L12,0 L24,0 L24,12"
                fill="none"
                stroke="#fff"
                strokeWidth="1"
              />
            </svg>
            <div className="mod-titles">
              <span className="mod-cat">ROSE HA · MANTECH MCCS</span>
              <span className="mod-title">HA CLUSTER</span>
            </div>
          </div>
          <div className="mod-shape-container">
            <div className="shape shape-cube">
              <div className="noise-overlay" />
            </div>
          </div>
          <div className="mod-data">
            <div className="hex-row">
              <span
                className="color-swatch"
                style={{ background: "var(--c-yellow)" }}
              />{" "}
              #ACTIVE_STANDBY
            </div>
            <div className="hex-row">
              <span
                className="color-swatch"
                style={{ background: "var(--c-orange)" }}
              />{" "}
              #30S_FAILOVER
            </div>
          </div>
          <span className="mod-link">VIEW →</span>
        </a>

        <a className="module border-r" href="/storage-backup">
          <div className="mod-header">
            <svg className="mod-icon" viewBox="0 0 24 12">
              <path
                d="M0,6 Q6,12 12,6 T24,6"
                fill="none"
                stroke="#fff"
                strokeWidth="1"
              />
            </svg>
            <div className="mod-titles">
              <span className="mod-cat">HITACHI · ACRONIS</span>
              <span className="mod-title">STORAGE + BACKUP</span>
            </div>
          </div>
          <div className="mod-shape-container">
            <div className="shape shape-sphere">
              <div className="noise-overlay" />
            </div>
          </div>
          <div className="mod-data">
            <div className="hex-row">
              <span
                className="color-swatch"
                style={{ background: "#fff" }}
              />{" "}
              #NVME_ALL_FLASH
            </div>
            <div className="hex-row">
              <span
                className="color-swatch"
                style={{ background: "var(--c-pink)" }}
              />{" "}
              #IMMUTABLE_BACKUP
            </div>
            <div className="hex-row">
              <span
                className="color-swatch"
                style={{ background: "var(--c-blue)" }}
              />{" "}
              #ISOLATED_RECOVERY
            </div>
          </div>
          <span className="mod-link">VIEW →</span>
        </a>

        <a className="module border-r" href="/dlp-antivirus">
          <div className="mod-header">
            <svg className="mod-icon" viewBox="0 0 24 12">
              <path
                d="M0,12 L6,0 L12,12 L18,0 L24,12"
                fill="none"
                stroke="#fff"
                strokeWidth="1"
              />
            </svg>
            <div className="mod-titles">
              <span className="mod-cat">NETWRIX · KASPERSKY</span>
              <span className="mod-title">DATA SECURITY</span>
            </div>
          </div>
          <div className="mod-shape-container">
            <div className="shape shape-pyramid">
              <div className="noise-overlay" />
            </div>
          </div>
          <div className="mod-data">
            <div className="hex-row">
              <span
                className="color-swatch"
                style={{ background: "var(--c-cyan)" }}
              />{" "}
              #DLP_ENDPOINT
            </div>
            <div className="hex-row">
              <span
                className="color-swatch"
                style={{ background: "var(--c-blue)" }}
              />{" "}
              #ZERO_TRUST
            </div>
            <div className="hex-row">
              <span
                className="color-swatch"
                style={{ background: "var(--c-yellow)" }}
              />{" "}
              #INSIDER_THREAT
            </div>
          </div>
          <span className="mod-link">VIEW →</span>
        </a>

        {/* ▼▼▼ 추가된 4번째 카드 — Acronis 전환 캠페인 ▼▼▼ */}
        <a className="module border-r" href="/backup-modernization">
          <div className="mod-header">
            <svg className="mod-icon" viewBox="0 0 24 12">
              <path
                d="M0,12 L0,3 L9,3 M6,0 L24,0 L24,9 L15,9 M18,12 L24,12"
                fill="none"
                stroke="#fff"
                strokeWidth="1"
              />
            </svg>
            <div className="mod-titles">
              <span className="mod-cat">ACRONIS MIGRATION</span>
              <span className="mod-title">BACKUP MODERNIZATION</span>
            </div>
          </div>
          <div className="mod-shape-container">
            <div className="shape shape-cube">
              <div className="noise-overlay" />
            </div>
          </div>
          <div className="mod-data">
            <div className="hex-row">
              <span
                className="color-swatch"
                style={{ background: "var(--c-cyan)" }}
              />{" "}
              #UNIFIED_PLATFORM
            </div>
            <div className="hex-row">
              <span
                className="color-swatch"
                style={{ background: "var(--c-pink)" }}
              />{" "}
              #ZERO_DOWNTIME
            </div>
            <div className="hex-row">
              <span
                className="color-swatch"
                style={{ background: "var(--c-orange)" }}
              />{" "}
              #LEGACY_ROLLOVER
            </div>
          </div>
          <span className="mod-link">VIEW →</span>
        </a>
        {/* ▲▲▲ 추가된 4번째 카드 끝 ▲▲▲ */}

        <div className="brand-block">
          <div className="data-label">SYS_ARCHITECT</div>
          <div className="brand-mark">
            <Logo size={28} />
            <span className="brand-wordmark">EINSTECH</span>
          </div>
          <div style={{ fontSize: 10, opacity: 0.5, marginTop: 4 }}>
            EINSTECH EST.2014 // ENG.30Y LEGACY
          </div>
        </div>
      </footer>
    </div>
  );
}

