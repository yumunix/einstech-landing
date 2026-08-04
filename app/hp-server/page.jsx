import HpServerPage from "./HpServerPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/hp-server",
  title: "HPE Server 제품군",
  description: "HPE ProLiant Compute DL380 Gen12·ML350 Gen12, Synergy 480 Gen12와 Apollo 고밀도 서버를 워크로드에 맞춰 설계하고 공급합니다.",
  keywords: ["HPE 서버", "HPE ProLiant Gen12", "DL380 Gen12", "ML350 Gen12", "Synergy 480 Gen12", "Apollo 2000"],
});

export default function Page() {
  return <HpServerPage />;
}
