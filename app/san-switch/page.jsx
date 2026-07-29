import BrocadeSanPage from "./BrocadeSanPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/san-switch",
  title: "Brocade SAN Switch 제품군",
  description: "Brocade 32G·64G Fibre Channel SAN Switch와 이중 패브릭을 설계하고 공급합니다.",
  keywords: ["Brocade SAN Switch", "Brocade G610", "Brocade G720", "Brocade G730", "Brocade X7", "SAN Extension", "Fibre Channel", "32G FC", "64G FC", "SAN 패브릭"],
});

export default function SanSwitchPage() {
  return <BrocadeSanPage />;
}
