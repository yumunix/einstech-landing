import StorageLineupPage from "./StorageLineupPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/storage",
  title: "Hitachi VSP One · Infortrend EonStor Storage 제품군",
  description: "Hitachi VSP One Block·File·Object와 Infortrend EonStor GS·GSe·DS·CS 스토리지를 DR, SAN, NAS, WORM 요구사항에 맞춰 설계·공급합니다.",
  keywords: ["Hitachi VSP One", "VSP One Block", "VSP One File", "Hitachi HCP", "Infortrend EonStor", "EonStor GS", "EonStor DS", "EonStor CS", "WORM 스토리지"],
});

export default function Page() {
  return <StorageLineupPage />;
}
