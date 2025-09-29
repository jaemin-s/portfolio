import { PCBrowserFrame } from "./PCBrowserFrame";
import { MobileFrame } from "./MobileFrame";
import { TVFrame } from "./TVFrame";
import { Badge } from "./ui/badge";

interface PortfolioProject {
  title: string;
  description: string;
  developmentEnvironment: string;
  developmentLanguage: string;
  field: string;
  deviceType: "pc" | "mobile" | "tv";
  url?: string;
  image?: string;
  technologies: string[];
  category: string;
}

interface PortfolioCardProps {
  project: PortfolioProject;
  index: number;
}

export function PortfolioCard({ project, index }: PortfolioCardProps) {
  const {
    title,
    description,
    developmentEnvironment,
    developmentLanguage,
    field,
    deviceType,
    url,
    image,
    technologies,
    category,
  } = project;

  return (
    <div className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-start lg:items-center">
          {/* 좌측: 프로젝트 정보 */}
          <div className="space-y-8 max-h-[500px] flex flex-col justify-center">
            {/* 카테고리 뱃지 */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <Badge
                variant="secondary"
                className="bg-white/10 text-white border-white/20"
              >
                {category}
              </Badge>
            </div>

            {/* 프로젝트 타이틀 */}
            <div>
              <h1
                className="text-white mb-4"
                style={{ fontSize: "2.5rem", fontWeight: "700" }}
              >
                {title}
              </h1>
              <p className="text-white/80 text-lg leading-relaxed">
                {description}
              </p>
            </div>

            {/* 프로젝트 상세 정보 */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">개발 환경</span>
                    <span className="text-white font-medium">
                      {developmentEnvironment}
                    </span>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">개발 언어</span>
                    <span className="text-white font-medium">
                      {developmentLanguage}
                    </span>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">분야</span>
                    <span className="text-white font-medium">{field}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 기술 스택 */}
            <div>
              <h3 className="text-white mb-3">기술 스택</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* 우측: 디바이스 프레임 */}
          <div className="flex justify-center lg:justify-end max-h-[500px] items-center">
            {deviceType === "pc" ? (
              <PCBrowserFrame url={url}>
                {image ? (
                  <div></div>
                ) : (
                  // <ImageWithFallback
                  //   src={image}
                  //   alt={`${title} 스크린샷`}
                  //   className="w-full h-full object-cover"
                  // />
                  <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-4xl mb-4">🚀</div>
                      <h3 className="text-xl mb-2">{title}</h3>
                      <p className="text-muted-foreground">프로젝트 대시보드</p>
                    </div>
                  </div>
                )}
              </PCBrowserFrame>
            ) : deviceType === "tv" ? (
              <TVFrame>
                {image ? (
                  <div></div>
                ) : (
                  // <ImageWithFallback
                  //   src={image}
                  //   alt={`${title} TV 스크린샷`}
                  //   className="w-full h-full object-cover"
                  // />
                  <div className="h-full bg-gradient-to-br from-purple-50 to-blue-100 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-4xl mb-4">📺</div>
                      <h3 className="text-xl mb-2">{title}</h3>
                      <p className="text-muted-foreground">
                        Smart TV 인터페이스
                      </p>
                    </div>
                  </div>
                )}
              </TVFrame>
            ) : (
              <MobileFrame model="iphone">
                {image ? (
                  <div></div>
                ) : (
                  // <ImageWithFallback
                  //   src={image}
                  //   alt={`${title} 모바일 스크린샷`}
                  //   className="w-full h-full object-cover"
                  // />
                  <div className="h-full bg-gradient-to-b from-purple-50 to-pink-100 p-4">
                    <div className="text-center pt-20">
                      <div className="text-3xl mb-4">📱</div>
                      <h4 className="mb-2">{title}</h4>
                      <p className="text-sm text-muted-foreground">
                        모바일 앱 인터페이스
                      </p>
                    </div>
                  </div>
                )}
              </MobileFrame>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
