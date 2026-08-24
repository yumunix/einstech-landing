export const storageProducts = [
  {
    slug: "vsp-one-block-20-series", vendor: "Hitachi Vantara", category: "올플래시 & 하이브리드", name: "VSP One Block 20 Series", image: "hitachi-vsp-one-block.webp", eyebrow: "ALL-NVME BLOCK STORAGE",
    summary: "간결한 2U 설계에 성능, 확장성, 사이버 복원력을 결합한 엔터프라이즈 All-NVMe 블록 스토리지입니다.",
    intro: "VSP One Block 20 Series는 업무 규모와 성장 단계에 맞춰 선택할 수 있는 NVMe 기반 블록 스토리지입니다. 데이터베이스, 가상화, 컨테이너와 핵심 업무를 하나의 데이터 플랫폼에서 운영하도록 설계합니다.",
    highlights: ["100% 데이터 가용성을 지향하는 엔터프라이즈 설계", "모델별 최대 14.1PBe 유효용량과 최대 32개 호스트 포트", "Immutable Snapshot과 Hardware Root of Trust 기반 보호", "GAD를 활용한 Active-Active 및 원격 DR 구성"],
    specs: [["제품 모델", "VSP One Block 24 · 26 · 28 · 26 QLC"], ["폼팩터", "2U All-NVMe"], ["호스트 연결", "NVMe/FC · NVMe/TCP · 25GbE iSCSI · 64G FC"], ["유효용량", "모델별 최대 14.1PBe"], ["확장", "Scale-out 최대 65노드"], ["데이터 보호", "Immutable Snapshot · GAD · 원격 복제 · 암호화"]],
    useCases: ["Oracle·SAP 및 핵심 데이터베이스", "VMware·OLVM 가상화 통합", "Kubernetes 영구 볼륨", "Active-Active 데이터센터와 DR"],
    source: "https://www.his21.co.kr/his/product/digital_enterprise/storage/vsp_one_block_20_series.do"
  },
  {
    slug: "vsp-one-block-high-end", vendor: "Hitachi Vantara", category: "미션크리티컬 블록 스토리지", name: "VSP One Block High End", image: "hitachi-vsp-one-block-high-end.webp", eyebrow: "HIGH-END ALL-NVME STORAGE",
    summary: "AI 시대의 핵심 업무와 대규모 데이터베이스를 위한 차세대 High-End All-NVMe 블록 스토리지입니다.",
    intro: "VSP One Block High End는 VSP 5000 Series의 후속 세대로, 오픈시스템과 메인프레임 핵심 업무를 하나의 VSP One 데이터 플랫폼에서 운영하도록 설계합니다. 대규모 통합, 무중단 운영과 사이버 복원력이 필요한 환경에 적합합니다.",
    highlights: ["최대 5,000만 IOPS의 미션크리티컬 성능", "최대 18.6PB 유효용량의 확장성", "8-Nines 가용성과 100% 가동시간 보증 프로그램", "FIPS 140-3 기반 보안과 4:1 데이터 절감 보증"],
    specs: [["제품 모델", "VSP One Block 85 (High End)"], ["노드 구성", "2 · 4 · 6노드"], ["최대 성능", "최대 5,000만 IOPS"], ["최대 유효용량", "최대 18.6PB"], ["지원 환경", "Open Systems · Mainframe"], ["가용성", "8-Nines · GAD Active-Active · 무중단 운영"]],
    useCases: ["금융·공공 핵심 기간계", "대규모 SAP·Oracle", "메인프레임과 오픈 통합", "AI 추론 및 초저지연 데이터 서비스"],
    source: "https://www.hitachivantara.com/en-us/products/storage-platforms/vsp-one-block/high-end"
  },
  {
    slug: "vsp-5000-series", vendor: "Hitachi Vantara", category: "올플래시 & 하이브리드", name: "Hitachi VSP 5000 Series", image: "hitachi-vsp-5000.jpg", eyebrow: "MISSION-CRITICAL STORAGE",
    summary: "현재 판매 중인 VSP 5200·5200H·5600·5600H와 기존 모델 유지보수를 함께 제공하는 미션크리티컬 스토리지입니다.", intro: "VSP 5000 Series는 오픈시스템과 메인프레임 핵심 업무를 위한 확장형 플랫폼입니다. 신규 공급은 현재 판매 중인 5200·5200H·5600·5600H를 기준으로 하며, 판매 종료된 5100·5100H·5500·5500H는 유지보수와 후속 제품 전환을 지원합니다.",
    highlights: ["VSP 5200·5200H·5600·5600H 현재 판매", "5100·5100H·5500·5500H 유지보수", "2·4·6노드 구성과 무중단 업그레이드", "오픈시스템·메인프레임 통합 및 100% 데이터 가용성"],
    specs: [["현재 판매 모델", "VSP 5200 · 5200H · 5600 · 5600H"], ["유지보수 모델", "VSP 5100 · 5100H · 5500 · 5500H"], ["기존 모델 서비스", "2027-09-30까지"], ["노드 구성", "2 · 4 · 6노드"], ["지원 환경", "Open Systems · Mainframe"], ["가용성", "GAD Active-Active · 무중단 확장"]],
    useCases: ["금융·공공 기간계", "대규모 SAP·Oracle", "기존 VSP 5000 유지보수", "VSP One Block High End 전환"], source: "https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=242403040002249&view=print"
  },
  {
    slug: "vsp-e-series", vendor: "Hitachi Vantara", category: "올플래시 & 하이브리드", name: "Hitachi VSP E Series", image: "hitachi-vsp-e.jpg", eyebrow: "NVME UNIFIED PLATFORM",
    summary: "현재 판매 중인 E590H·E1090H와 판매 종료 모델의 유지보수를 함께 제공하는 NVMe 최적화 스토리지입니다.", intro: "신규 공급은 현재 판매 중인 VSP E590H와 E1090H Hybrid를 기준으로 합니다. E590/E790 All-Flash와 E790H·E1090 AFA는 판매가 종료됐지만 공식 서비스 기간 동안 유지보수와 최신 제품 전환을 지원합니다.",
    highlights: ["E590H·E1090H Hybrid 현재 판매", "E590/E790 All-Flash 유지보수", "E790H·E1090 AFA 유지보수", "최대 65노드 확장과 VSP 데이터 서비스"],
    specs: [["현재 판매 모델", "VSP E590H · E1090H"], ["유지보수 모델", "E590/E790 AFA · E790H · E1090 AFA"], ["E590/E790 AFA 서비스", "2029-12-31까지"], ["E790H/E1090 AFA 서비스", "2031-03-31까지"], ["확장", "최대 65노드 Scale-out"], ["미디어", "현재 판매 모델은 Hybrid 구성"]],
    useCases: ["E590H·E1090H 신규 구축", "기존 E Series 유지보수", "프라이빗 클라우드", "VSP One 전환 설계"], source: "https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=242403040002249&view=print"
  },
  {
    slug: "vsp-f-series", vendor: "Hitachi Vantara", category: "올플래시 & 하이브리드", name: "Hitachi VSP F Series", image: "hitachi-vsp-f.jpg", eyebrow: "ALL-FLASH STORAGE",
    summary: "데이터베이스와 가상화 업무를 위한 엔터프라이즈 All-Flash VSP 제품군입니다.", intro: "VSP F Series는 구축된 Hitachi All-Flash 환경의 증설, 유지보수와 전환 수요에 대응합니다. 신규 구축은 최신 VSP One Block 및 VSP E Series와 함께 비교 설계합니다.",
    highlights: ["All-Flash 전용 플랫폼", "엔터프라이즈 고가용성 데이터 서비스", "기존 VSP 환경의 마이그레이션 지원", "최신 제품군과 성능·지원기간 비교 설계"],
    specs: [["플랫폼", "VSP F Series All-Flash"], ["워크로드", "DB · 가상화 · 핵심 업무"], ["구성 방식", "업무 규모별 컨트롤러·용량 선정"], ["데이터 서비스", "Snapshot · 복제 · 고가용성"], ["도입 기준", "신규·증설·전환 여부 사전 진단"]],
    useCases: ["기존 VSP F 증설", "All-Flash DB", "스토리지 마이그레이션", "유지보수 종료 대응"], source: "https://www.his21.co.kr/his/product/digital_enterprise/all_flash/hitachi_virtual_storage_platform_f.do"
  },
  {
    slug: "vsp-g-series", vendor: "Hitachi Vantara", category: "올플래시 & 하이브리드", name: "Hitachi VSP G Series", image: "hitachi-vsp-g.jpg", eyebrow: "HYBRID FLASH STORAGE",
    summary: "SSD와 HDD를 조합해 성능과 용량 효율을 균형 있게 구성하는 하이브리드 VSP 제품군입니다.", intro: "VSP G Series는 기존 하이브리드 SAN의 증설과 데이터 이전을 지원합니다. 신규 도입에서는 데이터 특성과 비용을 분석해 VSP One Block, VSP E Series와 비교합니다.",
    highlights: ["Hybrid Flash 아키텍처", "SAN·DB·가상화 통합", "기존 VSP 데이터 서비스 연속성", "All-Flash 전환과 단계적 마이그레이션 지원"],
    specs: [["플랫폼", "VSP G Series Hybrid Flash"], ["미디어", "SSD · HDD 혼합"], ["워크로드", "SAN · DB · 가상화"], ["데이터 서비스", "Snapshot · 복제 · 고가용성"], ["도입 기준", "기존 환경 호환성과 지원기간 확인"]],
    useCases: ["기존 VSP G 증설", "대용량 Hybrid SAN", "백업·운영 데이터 통합", "All-Flash 단계 전환"], source: "https://www.his21.co.kr/his/product/digital_enterprise/storage/hitachi_virtual_storage_platform_g.do"
  },
  {
    slug: "vsp-one-file", vendor: "Hitachi Vantara", category: "네트워크 스토리지", name: "VSP One File", image: "hitachi-vsp-one-file.webp", eyebrow: "SCALE-OUT FILE STORAGE",
    summary: "클라우드와 컨테이너 환경의 비정형 데이터를 위한 고성능 Scale-out 파일 스토리지입니다.", intro: "VSP One File은 엔터프라이즈 파일 서비스와 AI·분석 데이터 파이프라인을 하나의 네임스페이스로 통합합니다. 노드와 네트워크를 업무 처리량에 맞춰 설계합니다.",
    highlights: ["VSP One File 34·38 현재 판매", "File 32 기존 고객 유지보수", "NFS·SMB·iSCSI·FTP 멀티 프로토콜", "10/25/100GbE 고속 네트워크와 클라우드 연계"],
    specs: [["현재 판매 모델", "VSP One File 34 · 38"], ["유지보수 모델", "VSP One File 32 (서비스 2030-04-29까지)"], ["파일 프로토콜", "NFS v2/v3/v4/v4.1 · SMB2/SMB3"], ["기타 프로토콜", "iSCSI · FTP · S3/클라우드 티어링"], ["네트워크", "File 34: 10/25GbE · File 38: 10/25/100GbE"], ["확장", "File 34: 최대 4노드 · File 38: 최대 8노드"]],
    useCases: ["기업 파일 공유", "AI·분석 데이터", "File 32 유지보수", "컨테이너·클라우드 파일 서비스"], source: "https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=242403040002249&view=print"
  },
  {
    slug: "vsp-one-object", vendor: "Hitachi Vantara", category: "오브젝트 스토리지", name: "VSP One Object", image: "hitachi-vsp-one-object.webp", eyebrow: "S3-NATIVE OBJECT STORAGE",
    summary: "AI·분석·데이터 레이크하우스를 위한 확장형 S3 네이티브 오브젝트 스토리지입니다.",
    intro: "VSP One Object는 대규모 비정형 데이터를 안전하게 보관하고 활용하는 소프트웨어 정의 오브젝트 스토리지입니다. S3 기반 데이터 레이크하우스, 분석과 AI 파이프라인을 지원하며 어플라이언스, 소프트웨어 정의 및 서비스형 배포 옵션을 제공합니다.",
    highlights: ["S3 네이티브 API와 Amazon S3 Tables 지원", "Apache Iceberg 카탈로그와 내장 SQL 엔진 연계", "불변 데이터와 대규모 클린 복구 기반 사이버 복원력", "어플라이언스·SDS·서비스형 배포 옵션"],
    specs: [["접근 방식", "S3 Native Object Storage"], ["데이터 활용", "S3 Tables · Apache Iceberg · 내장 SQL 연계"], ["확장", "수십억 개 오브젝트를 위한 Scale-out 설계"], ["배포 방식", "Appliance · Software-defined · As-a-Service"], ["데이터 보호", "Immutability · 대규모 복구 · 개인정보 탐지/거버넌스"]],
    useCases: ["AI·ML 데이터 레이크", "데이터 레이크하우스", "백업 불변 보관", "대규모 오브젝트 아카이브"],
    source: "https://www.hitachivantara.com/en-us/products/storage-platforms/object-storage"
  },
  {
    slug: "vsp-one-unified", vendor: "Hitachi Vantara", category: "네트워크 스토리지", name: "VSP One Unified", image: "hitachi-vsp-one-unified.jpg", eyebrow: "BLOCK + FILE UNIFIED",
    summary: "All-NVMe 또는 Hybrid에서 Block과 File 서비스를 함께 제공하는 통합 스토리지입니다.", intro: "VSP One Unified는 SAN과 NAS를 단일 시스템으로 통합해 운영 복잡성을 줄입니다. 파일 공유, 데이터베이스, 가상화와 컨테이너를 하나의 고가용성 플랫폼으로 구성합니다.",
    highlights: ["VSP One Unified F34·F38", "CIFS·NFS 동시 서비스와 NFS 4.1", "Snapshot·복제·MetroCluster·WORM", "All-NVMe 4:1 및 Hybrid 2:1 데이터 절감 보증 조건"],
    specs: [["제품 모델", "VSP One Unified F34 · F38"], ["미디어", "All-NVMe · Hybrid"], ["네트워크", "10/25/100GbE 옵션"], ["파일 서비스", "CIFS · NFS 4.1 동시 지원"], ["보호", "Snapshot · 복제 · WORM · MFA · SSO"], ["가용성", "100% 데이터 가용성을 지향하는 설계"]],
    useCases: ["SAN·NAS 통합", "가상화와 파일 공유", "컨테이너 영구 데이터", "WORM 및 원격 DR"], source: "https://www.his21.co.kr/his/product/digital_enterprise/storage/vsp_one_unified.do"
  },
  {
    slug: "hitachi-nas-platform", vendor: "Hitachi Vantara", category: "네트워크 스토리지", name: "Hitachi NAS Platform", image: "hitachi-nas-platform.jpg", eyebrow: "ENTERPRISE NAS",
    summary: "판매 종료된 Hitachi NAS Platform 구축 환경을 위한 유지보수 및 전환 지원 항목입니다.", intro: "Hitachi NAS Platform 4060·4080·4100은 판매와 업그레이드가 종료됐으며 공식 서비스는 2026년 12월 31일까지입니다. 현재 운영 중인 환경의 점검, 장애 대응과 VSP One File·Unified 전환을 지원합니다.",
    highlights: ["HNAS 4060·4080·4100 유지보수", "공식 서비스 2026년 12월 31일까지", "NFS·CIFS·iSCSI 운영 점검", "VSP One File·Unified 전환 설계"],
    specs: [["유지보수 모델", "HNAS 4060 · 4080 · 4100"], ["판매 종료", "2021-12-06"], ["업그레이드 종료", "2024-12-06"], ["서비스 종료 예정", "2026-12-31"], ["후속 전환", "VSP One File · VSP One Unified"]],
    useCases: ["기존 HNAS 유지보수", "장애 대응", "데이터 마이그레이션", "후속 NAS 전환"], source: "https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=242403040002249&view=print"
  },
  {
    slug: "h-scaleway-sg5000", vendor: "HIS", category: "네트워크 스토리지", name: "HIS NAS H-Scaleway SG5000", image: "his-nas-sg5000.jpg", eyebrow: "SCALE-OUT NAS",
    summary: "대용량 비정형 데이터와 멀티 워크로드를 위한 Scale-out NAS 제품군입니다.", intro: "H-Scaleway SG5000은 용량과 처리량이 지속적으로 증가하는 파일 환경을 노드 단위로 확장하도록 구성합니다. 실제 모델과 노드 수는 데이터 유형과 동시 사용자를 분석해 선정합니다.",
    highlights: ["Scale-out 확장 아키텍처", "대용량 비정형 데이터 통합", "멀티 워크로드 파일 서비스", "노드·용량·네트워크 맞춤 설계"],
    specs: [["제품군", "H-Scaleway SG5000"], ["구조", "Scale-out NAS"], ["대상 데이터", "대용량 파일 · 비정형 데이터"], ["선정 기준", "용량 · 처리량 · 동시 사용자 · 네트워크"]],
    useCases: ["연구·분석 데이터", "미디어 파일", "대용량 파일 공유", "백업 저장소"], source: "https://www.his21.co.kr/his/product/digital_enterprise/storage/his_nas_h-scaleway_sg5000.do"
  },
  {
    slug: "gnas-9000e-series", vendor: "HIS", category: "네트워크 스토리지", name: "HIS NAS GNAS 9000E Series", image: "his-nas-gnas-9000e.jpg", eyebrow: "ENTERPRISE NAS",
    summary: "기업 파일 서비스와 데이터센터 애플리케이션을 위한 엔터프라이즈 NAS 제품군입니다.", intro: "GNAS 9000E Series는 파일 공유와 대용량 확장이 필요한 기업 환경에 맞춰 구성합니다. 공급 사양은 실제 업무의 용량, 성능, 가용성 조건을 확인한 뒤 확정합니다.",
    highlights: ["엔터프라이즈 파일 공유", "고가용성 구성", "대용량 확장", "워크로드 기준 맞춤 사양"],
    specs: [["제품군", "GNAS 9000E Series"], ["유형", "Enterprise NAS"], ["대상", "기업 파일 서비스 · 데이터센터"], ["선정 기준", "용량 · 성능 · 이중화 · 네트워크"]],
    useCases: ["부서·전사 파일 공유", "데이터센터 NAS", "대용량 업무 데이터", "백업 및 아카이브"], source: "https://www.his21.co.kr/his/product/digital_enterprise/storage/his_nas_gnas_9000e_series.do"
  },
  {
    slug: "eonstor-gs", vendor: "Infortrend", category: "통합 스토리지", name: "EonStor GS", image: "infortrend-gs.jpg", eyebrow: "UNIFIED DUAL-CONTROLLER",
    summary: "SAN·NAS·Object·Cloud Gateway를 통합한 고가용성 듀얼 컨트롤러 스토리지입니다.", intro: "EonStor GS는 하나의 시스템에서 블록, 파일, 오브젝트와 클라우드 게이트웨이를 제공해 중견기업의 스토리지 운영을 단순화합니다.",
    highlights: ["GS 4000 G3·3000 G3·2000 제품군", "고가용성 듀얼 컨트롤러", "최대 읽기 16GB/s·쓰기 12GB/s(4000 G3 기준)", "2U 12-bay부터 4U 90-bay"],
    specs: [["대표 모델", "GS 4000 G3 · GS 3000 G3 · GS 2000"], ["서비스", "SAN · NAS · Object · Cloud Gateway"], ["호스트", "32G FC · 25GbE iSCSI · SAS 옵션"], ["폼팩터", "2U 12-bay ~ 4U 90-bay"], ["컨트롤러", "Dual Controller"]],
    useCases: ["중견기업 통합 스토리지", "가상화·DB", "파일 공유", "하이브리드 클라우드"], source: "https://www.infortrend.com/global/products/GS"
  },
  {
    slug: "eonstor-gse", vendor: "Infortrend", category: "통합 스토리지", name: "EonStor GSe", image: "infortrend-gse.jpg", eyebrow: "VALUE UNIFIED STORAGE",
    summary: "중소기업과 지사를 위한 예산 효율적인 단일 컨트롤러 통합 스토리지입니다.", intro: "EonStor GSe는 SAN, NAS, Object와 Cloud Gateway 기능을 합리적인 비용으로 제공합니다. 업무 연속성 수준과 예산을 함께 고려해 모델을 선정합니다.",
    highlights: ["GSe 4000 G3·3000 G3 제품군", "SAN·NAS·Object 통합", "2U 12-bay부터 4U 90-bay", "Scale-out 및 확장 인클로저 지원"],
    specs: [["대표 모델", "GSe 4000 G3 · GSe 3000 G3"], ["서비스", "SAN · NAS · Object · Cloud Gateway"], ["폼팩터", "2U 12-bay ~ 4U 90-bay"], ["컨트롤러", "Single Controller"], ["확장", "확장 인클로저 · Scale-out"]],
    useCases: ["SMB 통합 스토리지", "지사 파일 서비스", "백업 저장소", "비용 효율적 SAN"], source: "https://www.infortrend.com/global/Products/gse"
  },
  {
    slug: "eonstor-ds", vendor: "Infortrend", category: "SAN 스토리지", name: "EonStor DS", image: "infortrend-ds.jpg", eyebrow: "HIGH-AVAILABILITY SAN",
    summary: "데이터베이스와 가상화를 위한 고가용성 전용 SAN 스토리지입니다.", intro: "EonStor DS는 블록 워크로드에 집중한 듀얼 컨트롤러 SAN 플랫폼입니다. 요구 IOPS, 처리량, 포트와 드라이브 수를 기준으로 모델을 선정합니다.",
    highlights: ["DS 4000U·4000·3000E 제품군", "최대 11GB/s 읽기·100만 IOPS(4000U 기준)", "32G FC·25GbE iSCSI·12G SAS", "최대 448 드라이브 확장"],
    specs: [["대표 모델", "DS 4000U · DS 4000 · DS 3000E"], ["유형", "Block SAN Storage"], ["호스트", "32G FC · 25GbE iSCSI · 12G SAS"], ["확장", "최대 448 드라이브"], ["컨트롤러", "고가용성 Dual Controller"]],
    useCases: ["Oracle·MS SQL DB", "VMware·OLVM", "FC SAN", "영상·고성능 블록 업무"], source: "https://www.infortrend.com/global/products/DS"
  },
  {
    slug: "eonstor-cs", vendor: "Infortrend", category: "네트워크 스토리지", name: "EonStor CS", image: "infortrend-cs.jpg", eyebrow: "SCALE-OUT NAS",
    summary: "미디어·HPC·영상·백업의 대용량 비정형 데이터를 위한 Scale-out NAS입니다.", intro: "EonStor CS는 노드 추가로 용량과 성능을 함께 확장하며 단일 네임스페이스를 제공합니다. 데이터 보호 수준에 따라 Erasure Code와 Replica 정책을 설계합니다.",
    highlights: ["CS 4000U·4000·3000·2000 제품군", "최대 144노드 Scale-out", "최대 100GB/s·100PB급 확장", "단일 Namespace·Erasure Code·Replica"],
    specs: [["대표 모델", "CS 4000U · CS 4000 · CS 3000 · CS 2000"], ["유형", "Scale-out NAS"], ["확장", "최대 144노드"], ["최대 처리량", "최대 100GB/s"], ["데이터 보호", "Erasure Code · Replica"]],
    useCases: ["미디어 제작", "HPC·연구 데이터", "CCTV 영상", "대용량 백업"], source: "https://www.infortrend.com/global/products/cs"
  }
];

export const storageProductMap = Object.fromEntries(storageProducts.map((product) => [product.slug, product]));
