/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback, useMemo } from "react";
import { PortfolioCard } from "./components/PortfolioCard";
import { ProjectDetail } from "./components/ProjectDetail";
import { Button } from "./components/ui/button";
import { ChevronDown, ArrowUp } from "lucide-react";
import { Header } from "./components/Header";
import ochoice1 from "/ochoice-1.webp";
import ochoice2 from "/ochoice-2.webp";
import ochoice3 from "/ochoice-3.webp";
import ochoice4 from "/ochoice-4.webp";
import ochoice5 from "/ochoice-5.webp";
import dashboard1 from "/dashboard-1.png"
import dashboard3 from "/dashboard-3.png"
import dashboard5 from "/dashboard-5.png"
import chart1 from "/chart-1.png"
import chart2 from "/chart-2.png"
import chart3 from "/chart-3.png"
import chart4 from "/chart-4.png"


const portfolioProjects = [
  {
    title: "오초이스(OTT TV 앱)",
    description:
      "케이블 VOD의 플랫폼 다양화를 위한 OTT TV 앱 서비스. 리모컨 UX 최적화와 DRM 기반 보호를 적용하여 Tizen/webOS 환경에서 안정적인 시청 경험을 제공.",
    developmentEnvironment: "Smart TV / Web",
    developmentLanguage: "React + JavaScript",
    field: "Front-end Developer",
    deviceType: "tv" as const,
    image: ochoice1,
    technologies: [
      "React",
      "JavaScript",
      "Shaka Player",
      "Redux",
      "styled-components",
      "Tizen",
      "webOS",
      "DRM"
    ],
    category: "OTT / VOD",
    features: [
      "리모컨 포커스 UI/단축키 최적화",
      "DRM 적용 스트리밍",
      "유료 결제 콘텐츠 접근 흐름",
      "멀티플랫폼 빌드/배포 자동화"
    ],
    achievements: [
      "Intersection Observer 기반 이미지 최적화로 로딩 속도 33% 감소",
      "플랫폼 런처 기본앱 등재 후 접속자 수 100% 증가",
      "빌드·테스트 자동화(스크립트, Electron 테스트 환경)로 QA 효율 향상",
    ],
    additionalImages: [ochoice2, ochoice4, ochoice3, ochoice5],
  },
  {
    title: "Ochoice Admin",
    description:
      "기존 접속자 수 중심 지표를 확장하여 디바이스별 사용 현황과 광고 효과 지표를 제공. 운영 효율과 의사결정을 지원하는 관리자 대시보드.",
    developmentEnvironment: "Web",
    developmentLanguage: "Next.js + Typescript",
    field: "Full-Stack Developer",
    deviceType: "pc" as const,
    image: dashboard1,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    category: "운영 대시보드",
    features: [
      "콘텐츠 상태/편성 현황 모니터링",
      "재생·에러 로그 기반 차트",
      "디바이스별·광고 효과 지표",
      "운영 태스크 워크플로우"
    ],
    achievements: [
      "편성 의사결정용 지표 추가로 기획·편성 검토 리드타임 단축",
      "라이선스 만료 콘텐츠의 수동 모니터링을 대시보드 참조 방식으로 전환",
    ],
    additionalImages: [dashboard3, dashboard5],
  },
  {
    title: "StockPlay (게임처럼 즐기는 투자)",
    description:
      "주식 초심자를 위한 실시간 종목 조회·뉴스·모의투자 서비스. React 기반 프론트엔드와 Spring Boot 서버를 연계해 소셜 로그인, 간편 결제 등 핵심 기능을 제공.",
    developmentEnvironment: "Web",
    developmentLanguage: "React + JavaScript / Spring Boot (Java)",
    field: "Team Lead & Full-Stack Developer",
    deviceType: "pc" as const,
    image: chart1,
    technologies: ["React",
    "Chart.js",
    "Spring Boot",
    "MySQL",
    "AWS EC2",
    "공공데이터 API",
    "한국투자증권 API"],
    category: "금융 / 투자",
    features: [
    "실시간 시세 차트",
    "종목 뉴스 연계",
    "모의투자·랭킹",
    "소셜 로그인 및 간편 결제",
    "관리자 페이지로 종목/공지 관리"
    ],
    achievements: [
      "팀 리더로 프로젝트 진행 총괄 및 주요 기능 구현",
      "AWS EC2 기반 첫 배포 경험으로 외부 접속 서비스 환경 구축",
      "일부 API CORS 이슈를 AWS API Gateway로 신속하게 해결"
    ],
    additionalImages: [chart2, chart3, chart4],
  },
];

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  const totalSections = useMemo(() => portfolioProjects.length * 2, []);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrolled = window.scrollY || 0;
        const doc = document.documentElement;
        const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight); // 0 분모 방지
        const progress = (scrolled / maxScroll) * 100;
        setScrollProgress(progress);

        const sectionHeight = window.innerHeight || 1;
        const section = Math.min(
          Math.floor(scrolled / sectionHeight),
          totalSections - 1
        );
        setCurrentSection(section);

        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // 초기 상태 동기화
    return () => window.removeEventListener("scroll", onScroll);
  }, [totalSections]);

  const scrollToSection = useCallback((index: number) => {
    const sectionHeight = window.innerHeight || 0;
    window.scrollTo({ top: sectionHeight * index, behavior: "smooth" });
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleClickGithub = useCallback(() => {
    window.open("https://github.com/your-id", "_blank", "noopener,noreferrer");
  }, []);

  const handleClickMail = useCallback(() => {
    window.location.href = "mailto:you@example.com";
  }, []);

  return (
    <div className="relative">
      <div
        className="fixed inset-0 bg-gradient-to-br from-green-400 via-green-500 to-green-600 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-green-800/20 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-900/20 to-transparent rounded-full blur-3xl" />
      </div>

      <main className="relative z-10">
        <header>
          <Header
            title="재민 심 | Software Developer Portfolio"
            onClickGithub={handleClickGithub}
            onClickMail={handleClickMail}
          />
        </header>

        {/* 프로젝트 섹션 */}
        <div className="pt-20">
          {portfolioProjects.map((project, index) => {
            const key = `${project.title}-${index}`;
            return (
              <div key={key}>
                {/* 메인 카드 */}
                <section id={`project-${index}-main`} className="min-h-screen">
                  <PortfolioCard project={project} index={index} />
                </section>

                {/* 상세 */}
                <section
                  id={`project-${index}-detail`}
                  className="min-h-screen"
                >
                  <ProjectDetail project={project as any} />
                </section>
              </div>
            );
          })}
        </div>

        {/* 스크롤 진행률 - PC */}
        <aside className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-50">
          <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-6 border border-white/20">
            <div className="text-center">
              <div className="text-white text-2xl font-bold">
                {Math.round(scrollProgress)}%
              </div>
              <div className="text-white/60 text-sm">Progress</div>
              <div className="w-1 h-20 bg-white/20 rounded-full mx-auto mt-4 relative">
                <div
                  className="absolute bottom-0 left-0 right-0 bg-white rounded-full transition-all duration-300"
                  style={{ height: `${scrollProgress}%` }}
                />
              </div>
              <div className="text-white/40 text-xs mt-2">
                Section {currentSection + 1} / {totalSections}
              </div>
            </div>
          </div>
        </aside>

        {/* 스크롤 진행률 - 모바일 상단 바 */}
        <div
          className="lg:hidden fixed top-0 left-0 right-0 z-40"
          aria-hidden="true"
        >
          <div
            className="h-1 bg-white/30 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* 스크롤 도움 버튼 - PC */}
        <div className="hidden md:flex fixed bottom-8 right-8 z-50 flex-col space-y-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              scrollToSection(Math.min(currentSection + 1, totalSections - 1))
            }
            className="text-white hover:bg-white/10 rounded-full w-12 h-12 p-0 flex flex-col items-center"
            disabled={currentSection >= totalSections - 1}
            aria-label="다음 섹션으로"
          >
            <ChevronDown className="w-4 h-4" />
          </Button>

          {scrollProgress > 10 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-white hover:bg-white/10 rounded-full w-12 h-12 p-0 flex flex-col items-center"
              aria-label="맨 위로"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* 스크롤 도움 버튼 - 모바일 */}
        <div className="md:hidden fixed bottom-20 right-4 z-50">
          {scrollProgress > 10 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-white hover:bg-white/10 rounded-full w-10 h-10 p-0 flex items-center justify-center bg-white/10 backdrop-blur-md"
              aria-label="맨 위로"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          )}
        </div>
      </main>
    </div>
  );
}
