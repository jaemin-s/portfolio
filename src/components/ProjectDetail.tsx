import { PCBrowserFrame } from './PCBrowserFrame';
import { MobileFrame } from './MobileFrame';
import { TVFrame } from './TVFrame';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Calendar, Users, Target, TrendingUp } from 'lucide-react';

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    deviceType: 'pc' | 'mobile' | 'tv';
    url?: string;
    technologies: string[];
    category: string;
    features?: string[];
    achievements?: string[];
    duration?: string;
    teamSize?: number;
    additionalImages?: string[];
    challenge?: string;
    solution?: string;
    outcome?: string;
  };
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const {
    title,
    description,
    deviceType,
    url,
    technologies,
    category,
    features,
    achievements,
    duration,
    teamSize,
    additionalImages,
    challenge,
    solution,
    outcome
  } = project;

  return (
    <div className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-8 w-full">
        
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
              {category} 상세보기
            </Badge>
          </div>
          <h1 className="text-white mb-4" style={{ fontSize: '3rem', fontWeight: '700' }}>
            {title}
          </h1>
          <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* 프로젝트 정보 카드들 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {duration && (
            <div className="bg-white/5 rounded-lg p-6 border border-white/10 text-center">
              <Calendar className="w-8 h-8 text-white/60 mx-auto mb-3" />
              <div className="text-white/60 text-sm mb-1">개발 기간</div>
              <div className="text-white font-medium">{duration}</div>
            </div>
          )}
          
          {teamSize && (
            <div className="bg-white/5 rounded-lg p-6 border border-white/10 text-center">
              <Users className="w-8 h-8 text-white/60 mx-auto mb-3" />
              <div className="text-white/60 text-sm mb-1">팀 규모</div>
              <div className="text-white font-medium">{teamSize}명</div>
            </div>
          )}
          
          <div className="bg-white/5 rounded-lg p-6 border border-white/10 text-center">
            <Target className="w-8 h-8 text-white/60 mx-auto mb-3" />
            <div className="text-white/60 text-sm mb-1">플랫폼</div>
            <div className="text-white font-medium">
              {deviceType === 'pc' ? 'Web' : deviceType === 'tv' ? 'Smart TV' : 'Mobile'}
            </div>
          </div>
          
          <div className="bg-white/5 rounded-lg p-6 border border-white/10 text-center">
            <TrendingUp className="w-8 h-8 text-white/60 mx-auto mb-3" />
            <div className="text-white/60 text-sm mb-1">기술 스택</div>
            <div className="text-white font-medium">{technologies.length}개</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* 좌측: 상세 정보 */}
          <div className="space-y-8">
            
            {/* 주요 기능 */}
            {features && features.length > 0 && (
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-white mb-4">주요 기능</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 기술적 도전 */}
            {challenge && (
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-white mb-4">기술적 도전</h3>
                <p className="text-white/80 leading-relaxed">{challenge}</p>
              </div>
            )}

            {/* 해결 방안 */}
            {solution && (
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-white mb-4">해결 방안</h3>
                <p className="text-white/80 leading-relaxed">{solution}</p>
              </div>
            )}

            {/* 사용 기술 */}
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-white mb-4">사용 기술</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* 프로젝트 링크 */}
            {url && (
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  onClick={() => window.open(url, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  라이브 데모
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  <Github className="w-4 h-4 mr-2" />
                  소스코드
                </Button>
              </div>
            )}
          </div>

          {/* 우측: 추가 스크린샷 및 성과 */}
          <div className="space-y-8">
            
            {/* 추가 스크린샷 */}
            {additionalImages && additionalImages.length > 0 && (
              <div>
                <h3 className="text-white mb-6">추가 스크린샷</h3>
                <div className="space-y-6">
                  {additionalImages.map((image, index) => (
                    <div key={index} className="flex justify-center">
                      {deviceType === 'pc' ? (
                        <div className="w-full max-w-md">
                          <PCBrowserFrame>
                            <div>{image}</div>
                          </PCBrowserFrame>
                        </div>
                      ) : deviceType === 'tv' ? (
                        <div className="w-full max-w-md">
                          <TVFrame>
                            {/* <ImageWithFallback
                              src={image}
                              alt={`${title} 추가 스크린샷 ${index + 1}`}
                              className="w-full h-full object-cover"
                            /> */}
                          </TVFrame>
                        </div>
                      ) : (
                        <MobileFrame>
                          {/* <ImageWithFallback
                            src={image}
                            alt={`${title} 추가 스크린샷 ${index + 1}`}
                            className="w-full h-full object-cover"
                          /> */}
                        </MobileFrame>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 성과 및 결과 */}
            {achievements && achievements.length > 0 && (
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-white mb-4">주요 성과</h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <TrendingUp className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white/80">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 프로젝트 결과 */}
            {outcome && (
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-6 border border-white/10">
                <h3 className="text-white mb-4">프로젝트 결과</h3>
                <p className="text-white/80 leading-relaxed">{outcome}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}