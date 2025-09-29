import React from "react";
import { PCBrowserFrame } from "./PCBrowserFrame";
import { MobileFrame } from "./MobileFrame";
import { TVFrame } from "./TVFrame";

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    deviceType: "pc" | "mobile" | "tv";
    features?: string[];
    additionalImages?: string[];
  };
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { title, description, deviceType, features, additionalImages } =
    project;

  return (
    <div className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* 좌측: 기능 개요 */}
          <div className="space-y-8">
            {/* Objective 섹션 */}
            <div>
              <div className="border-b border-white/20 pb-2 mb-6">
                <h3 className="text-white/60 text-base md:text-lg tracking-wide">
                  Objective
                </h3>
              </div>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                {description}
              </p>
            </div>

            {/* 기능 개요 */}
            {features && features.length > 0 && (
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0 mt-3"></div>
                      <div>
                        <h4 className="text-white/90 text-base md:text-lg leading-relaxed">
                          {feature}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 우측: 페이지/기능 사진 */}
          <div>
            <div className="border-b border-white/20 pb-2 mb-8">
              <h3 className="text-white/60 text-base md:text-lg tracking-wide">
                Interface
              </h3>
            </div>

            {additionalImages && additionalImages.length > 0 && (
              <div
                className={
                  deviceType === "pc"
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                    : "space-y-8"
                }
              >
                {additionalImages.map((image, index) => (
                  <div key={index} className="flex justify-center">
                    {deviceType === "pc" ? (
                      <div className="w-full max-w-xs">
                        <PCBrowserFrame>
                          {/* <ImageWithFallback
                            src={image}
                            alt={`${title} 인터페이스 ${index + 1}`}
                            className="w-full h-full object-cover"
                          /> */}
                        </PCBrowserFrame>
                      </div>
                    ) : deviceType === "tv" ? (
                      <div className="w-full max-w-md">
                        <TVFrame>
                          {/* <ImageWithFallback
                            src={image}
                            alt={`${title} 인터페이스 ${index + 1}`}
                            className="w-full h-full object-cover"
                          /> */}
                        </TVFrame>
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <div className="w-full max-w-[200px]">
                          <MobileFrame>
                            {/* <ImageWithFallback
                              src={image}
                              alt={`${title} 인터페이스 ${index + 1}`}
                              className="w-full h-full object-cover"
                            /> */}
                          </MobileFrame>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
