import { createPageMetadata } from "@/lib/seo";
import DownloadsAdmin from "./DownloadsAdmin";

export const dynamic = "force-dynamic";

export const metadata = createPageMetadata({
  path: "/downloads/einsguard-ai/admin",
  title: "EINSGUARD AI 다운로드 키 관리 | EINSTECH",
  description: "다운로드 키 신청 목록과 발급 현황을 관리합니다.",
  noindex: true,
});

export default function DownloadsAdminPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <DownloadsAdmin />
      </div>
    </main>
  );
}
