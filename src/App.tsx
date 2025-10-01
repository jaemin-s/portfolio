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
    title: "텐스토리",
    description:
      "온라인 영어 동화 학습 솔루션으로, 아이들이 재미있게 영어를 배울 수 있도록 설계된 교육 플랫폼입니다. 인터랙티브한 스토리텔링과 학습 진도 관리 기능을 제공합니다.",
    developmentEnvironment: "Smart TV / Web",
    developmentLanguage: "React",
    field: "Front-end, Back-end, Admin",
    deviceType: "tv" as const,
    url: "https://tenstory.co.kr",
    image: ochoice1,
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
    category: "교육 플랫폼",
    // 상세 페이지 정보
    features: [
      "인터랙티브 영어 동화 읽기",
      "실시간 발음 평가 시스템",
      "학습 진도 추적 및 분석",
      "부모용 학습 리포트",
      "게임화된 학습 요소",
    ],
    achievements: [
      "월 활성 사용자 10,000명 달성",
      "평균 학습 완료율 85% 기록",
      "부모 만족도 4.8/5.0 달성",
      "교육부 우수 콘텐츠 선정",
    ],
    duration: "8개월",
    teamSize: 6,
    additionalImages: [ochoice2, ochoice4, ochoice3, ochoice5],
    challenge:
      "아이들의 집중력 유지와 학습 효과 측정이 가장 큰 도전이었습니다. 기존 온라인 학습의 한계를 극복하고 개인별 맞춤 학습을 제공해야 했습니다.",
    solution:
      "게임화 요소와 AI 기반 개인화 학습 시스템을 도입했습니다. 실시간 음성 인식 기술로 발음을 평가하고, 학습 패턴 분석을 통해 맞춤형 콘텐츠를 제공했습니다.",
    outcome:
      "출시 6개월 만에 10,000명의 활성 사용자를 확보했으며, 85%의 높은 학습 완료율을 달성했습니다. 교육부 우수 콘텐츠로 선정되어 공신력을 인정받았습니다.",
  },
    {
    title: "기업 관리 시스템",
    description:
      "중소기업을 위한 통합 관리 솔루션으로, 직원 관리, 프로젝트 추적, 재무 관리 등 비즈니스 운영에 필요한 모든 기능을 하나의 플랫폼에서 제공합니다.",
    developmentEnvironment: "Web",
    developmentLanguage: "Vue.js",
    field: "Full-Stack Development",
    deviceType: "pc" as const,
    url: "https://enterprise-system.com",
    image:
      dashboard1,
    technologies: ["Vue.js", "Laravel", "MySQL", "Docker", "AWS"],
    category: "기업 솔루션",
    // 상세 페이지 정보
    features: [
      "통합 대시보드 및 KPI 모니터링",
      "프로젝트 및 태스크 관리",
      "직원 근태 및 급여 관리",
      "재무 관리 및 회계 연동",
      "실시간 알림 및 보고서",
    ],
    achievements: [
      "30개 기업 도입 완료",
      "업무 효율성 40% 향상",
      "고객 만족도 4.7/5.0 달성",
      "연간 매출 5억원 달성",
    ],
    duration: "12개월",
    teamSize: 8,
    additionalImages: [
      dashboard3,
      dashboard5,
    ],
    challenge:
      "각기 다른 중소기업의 다양한 요구사항을 하나의 시스템으로 통합하고, 복잡한 비즈니스 로직을 단순화하는 것이 가장 큰 도전이었습니다.",
    solution:
      "모듈화된 아키텍처를 설계하여 커스터마이징 가능한 시스템을 구축했습니다. 사용자 친화적인 인터페이스와 강력한 분석 도구를 제공했습니다.",
    outcome:
      "30개 기업에 성공적으로 도입되어 평균 40%의 업무 효율성 향상을 달성했습니다. 연간 5억원의 매출을 기록하며 B2B SaaS 시장에서 입지를 확립했습니다.",
  },
  {
    title: "모바일 쇼핑 앱",
    description:
      "사용자 친화적인 모바일 쇼핑 경험을 제공하는 e-커머스 애플리케이션입니다. 직관적인 UI/UX와 빠른 결제 시스템으로 최적화된 쇼핑 환경을 구현했습니다.",
    developmentEnvironment: "Web",
    developmentLanguage: "React Native",
    field: "Mobile App Development",
    deviceType: "pc" as const,
    url: "https://shopping-app.com",
    image:
      chart1,
    technologies: [
      "React Native",
      "Redux",
      "Firebase",
      "Stripe",
      "Push Notifications",
    ],
    category: "E-커머스",
    // 상세 페이지 정보
    features: [
      "원터치 결제 시스템",
      "AI 기반 상품 추천",
      "실시간 배송 추적",
      "위시리스트 및 찜 기능",
      "소셜 로그인 통합",
    ],
    achievements: [
      "다운로드 수 50,000+ 달성",
      "평균 전환율 12% 기록",
      "사용자 평점 4.6/5.0 유지",
      "일 평균 거래액 500만원 달성",
    ],
    duration: "5개월",
    teamSize: 4,
    additionalImages: [
      chart2,
      chart3,
      chart4
    ],
    challenge:
      "모바일 환경에서 복잡한 쇼핑 과정을 단순화하고, 높은 구매 전환율을 달성하는 것이 주요 과제였습니다.",
    solution:
      "UX 리서치를 통해 사용자 여정을 최적화하고, 원터치 결제와 AI 추천 시스템을 구현했습니다. 성능 최적화로 로딩 시간을 50% 단축했습니다.",
    outcome:
      "출시 후 3개월 만에 50,000+ 다운로드를 기록했으며, 12%의 높은 전환율을 달성했습니다. 일 평균 거래액 500만원을 달성하며 성공적인 런칭을 이뤘습니다.",
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
      {/* 배경(장식) */}
      <div
        className="fixed inset-0 bg-gradient-to-br from-green-400 via-green-500 to-green-600 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-green-800/20 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-900/20 to-transparent rounded-full blur-3xl" />
      </div>

      {/* 메인 */}
      <main className="relative z-10">
        {/* 헤더 */}
        <header>
          <Header
            title="Portfolio"
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
