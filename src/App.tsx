import { useState, useEffect } from "react";
import { PortfolioCard } from "./components/PortfolioCard";
import { ProjectDetail } from "./components/ProjectDetail";
import { Button } from "./components/ui/button";
import { ChevronDown, Github, Mail, ArrowUp, ExternalLink } from "lucide-react";

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
    image:
      "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGRhc2hib2FyZCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTg4NTIzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
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
    additionalImages: [
      "https://images.unsplash.com/photo-1587882242636-596ab6349e69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMHBsYXRmb3JtJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODg5NDI4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1673515335586-f9f662c01482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4ODk0Mjg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    challenge:
      "아이들의 집중력 유지와 학습 효과 측정이 가장 큰 도전이었습니다. 기존 온라인 학습의 한계를 극복하고 개인별 맞춤 학습을 제공해야 했습니다.",
    solution:
      "게임화 요소와 AI 기반 개인화 학습 시스템을 도입했습니다. 실시간 음성 인식 기술로 발음을 평가하고, 학습 패턴 분석을 통해 맞춤형 콘텐츠를 제공했습니다.",
    outcome:
      "출시 6개월 만에 10,000명의 활성 사용자를 확보했으며, 85%의 높은 학습 완료율을 달성했습니다. 교육부 우수 콘텐츠로 선정되어 공신력을 인정받았습니다.",
  },
  {
    title: "모바일 쇼핑 앱",
    description:
      "사용자 친화적인 모바일 쇼핑 경험을 제공하는 e-커머스 애플리케이션입니다. 직관적인 UI/UX와 빠른 결제 시스템으로 최적화된 쇼핑 환경을 구현했습니다.",
    developmentEnvironment: "Mobile",
    developmentLanguage: "React Native",
    field: "Mobile App Development",
    deviceType: "mobile" as const,
    url: "https://shopping-app.com",
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4ODE1Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
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
      "https://images.unsplash.com/photo-1757301714935-c8127a21abc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBzaG9wcGluZyUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTg4MTMzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578070040595-02f440d038a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGNhcnQlMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzU4ODk0Mjg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    challenge:
      "모바일 환경에서 복잡한 쇼핑 과정을 단순화하고, 높은 구매 전환율을 달성하는 것이 주요 과제였습니다.",
    solution:
      "UX 리서치를 통해 사용자 여정을 최적화하고, 원터치 결제와 AI 추천 시스템을 구현했습니다. 성능 최적화로 로딩 시간을 50% 단축했습니다.",
    outcome:
      "출시 후 3개월 만에 50,000+ 다운로드를 기록했으며, 12%의 높은 전환율을 달성했습니다. 일 평균 거래액 500만원을 달성하며 성공적인 런칭을 이뤘습니다.",
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
      "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx8ZS1jb21tZXJjZSUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzU4NzUzNjk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
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
      "https://images.unsplash.com/photo-1726137065566-153debe32a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbmFnZW1lbnQlMjBzeXN0ZW18ZW58MXx8fHwxNzU4ODk0MjkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1ODc5NTAxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    challenge:
      "각기 다른 중소기업의 다양한 요구사항을 하나의 시스템으로 통합하고, 복잡한 비즈니스 로직을 단순화하는 것이 가장 큰 도전이었습니다.",
    solution:
      "모듈화된 아키텍처를 설계하여 커스터마이징 가능한 시스템을 구축했습니다. 사용자 친화적인 인터페이스와 강력한 분석 도구를 제공했습니다.",
    outcome:
      "30개 기업에 성공적으로 도입되어 평균 40%의 업무 효율성 향상을 달성했습니다. 연간 5억원의 매출을 기록하며 B2B SaaS 시장에서 입지를 확립했습니다.",
  },
];

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);

      // 현재 섹션 계산 (각 프로젝트당 2개 섹션)
      const sectionHeight = window.innerHeight;
      const section = Math.min(
        Math.floor(scrolled / sectionHeight),
        portfolioProjects.length * 2 - 1
      );
      setCurrentSection(section);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const sectionHeight = window.innerHeight;
    window.scrollTo({
      top: sectionHeight * index,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* 배경 그라데이션 */}
      <div className="fixed inset-0 bg-gradient-to-br from-green-400 via-green-500 to-green-600">
        <div className="absolute inset-0 bg-gradient-to-t from-green-800/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-900/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10">
        {/* 헤더 */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
                </div>
                <span className="text-white text-xl">Portfolio</span>
              </div>

              <div className="flex items-center space-x-2 md:space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 hidden sm:flex"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 hidden sm:flex"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
                {/* 모바일용 아이콘만 */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 sm:hidden w-8 h-8 p-0"
                >
                  <Github className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 sm:hidden w-8 h-8 p-0"
                >
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* 프로젝트 섹션들 */}
        <div className="pt-20">
          {portfolioProjects.map((project, index) => (
            <div key={index}>
              {/* 메인 카드 섹션 */}
              <section id={`project-${index}-main`} className="min-h-screen">
                <PortfolioCard project={project} index={index} />
              </section>

              {/* 상세 페이지 섹션 */}
              <section id={`project-${index}-detail`} className="min-h-screen">
                <ProjectDetail project={project} />
              </section>
            </div>
          ))}
        </div>

        {/* 섹션 네비게이션 - PC만 표시 - 배포 환경에서 동작 안함으로 주석 처리 */}
        {/* <div className="hidden xl:block fixed left-8 top-1/2 transform -translate-y-1/2 z-50">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <div className="space-y-4">
              {portfolioProjects.map((project, projectIndex) => (
                <div key={projectIndex} className="space-y-2">
                  <div className="text-white/60 text-xs uppercase tracking-wider">
                    Project {projectIndex + 1}
                  </div>
                  <button
                    onClick={() => scrollToSection(projectIndex * 2)}
                    className={`w-full text-left p-2 rounded text-xs transition-all ${
                      currentSection === projectIndex * 2
                        ? 'bg-white/20 text-white'
                        : 'text-white/60 hover:text-white/80 hover:bg-white/10'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => scrollToSection(projectIndex * 2 + 1)}
                    className={`w-full text-left p-2 rounded text-xs transition-all ${
                      currentSection === projectIndex * 2 + 1
                        ? 'bg-white/20 text-white'
                        : 'text-white/60 hover:text-white/80 hover:bg-white/10'
                    }`}
                  >
                    Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* 모바일 네비게이션 - 하단에 간단한 인디케이터 - 배포 환경에서 동작 안함으로 주석 처리 */}
        {/* <div className="xl:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
            <div className="flex items-center space-x-3">
              <div className="text-white text-sm">
                {Math.floor(currentSection / 2) + 1} / {portfolioProjects.length}
              </div>
              <div className="flex space-x-1">
                {portfolioProjects.map((_, projectIndex) => (
                  <div key={projectIndex} className="flex space-x-1">
                    <button
                      onClick={() => scrollToSection(projectIndex * 2)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        Math.floor(currentSection / 2) === projectIndex
                          ? 'bg-white w-4'
                          : 'bg-white/40'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        {/* 스크롤 진행률 - PC 버전 */}
        <div className="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
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
                ></div>
              </div>
              <div className="text-white/40 text-xs mt-2">
                Section {currentSection + 1} / {portfolioProjects.length * 2}
              </div>
            </div>
          </div>
        </div>

        {/* 스크롤 진행률 - 모바일 버전 (상단 바) */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-40">
          <div
            className="h-1 bg-white/30 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>

        {/* 스크롤 도움 버튼들 - PC 버전 */}
        <div className="hidden md:flex fixed bottom-8 right-8 z-50 flex-col space-y-2">
          {/* 다음 섹션으로 */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              scrollToSection(
                Math.min(currentSection + 1, portfolioProjects.length * 2 - 1)
              )
            }
            className="text-white hover:bg-white/10 rounded-full w-12 h-12 p-0 flex flex-col items-center"
            disabled={currentSection >= portfolioProjects.length * 2 - 1}
          >
            <ChevronDown className="w-4 h-4" />
          </Button>

          {/* 맨 위로 */}
          {scrollProgress > 10 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-white hover:bg-white/10 rounded-full w-12 h-12 p-0 flex flex-col items-center"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* 스크롤 도움 버튼들 - 모바일 버전 (더 작고 우측 하단) */}
        <div className="md:hidden fixed bottom-20 right-4 z-50">
          {scrollProgress > 10 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-white hover:bg-white/10 rounded-full w-10 h-10 p-0 flex items-center justify-center bg-white/10 backdrop-blur-md"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          )}
        </div>

        <footer className="relative z-10 pb-32 md:pb-20"></footer>
      </div>
    </div>
  );
}
