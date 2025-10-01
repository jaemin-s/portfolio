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
    achievements?: string[];
    additionalImages?: string[];
  };
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const {
    title,
    description,
    deviceType,
    features = [],
    achievements = [],
    additionalImages = [],
  } = project;

  // 프레임 선택(표시 동일, 분기 중복 제거)
  const renderFrame = (children: React.ReactNode) => {
    switch (deviceType) {
      case "pc":
        return <PCBrowserFrame>{children}</PCBrowserFrame>;
      case "tv":
        return <TVFrame>{children}</TVFrame>;
      default:
        return <MobileFrame>{children}</MobileFrame>;
    }
  };

  const gridClasses =
    deviceType === "mobile"
      ? "grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 place-items-center"
      : "grid grid-cols-1 gap-4 place-items-center";

  const ListSection = ({
    title,
    items,
    dotClass = "bg-green-400",
    ariaLabel,
  }: {
    title: string;
    items: string[];
    dotClass?: string;
    ariaLabel: string;
  }) =>
    items.length > 0 ? (
      <section
        aria-label={ariaLabel}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
      >
        <h3 className="text-white/70 text-sm md:text-base font-medium mb-4">
          {title}
        </h3>
        <ul className="space-y-6">
          {items.map((text, idx) => (
            <li key={`${title}-${idx}`} className="flex items-start space-x-4">
              <span
                className={`w-2 h-2 ${dotClass} rounded-full flex-shrink-0 mt-3`}
              />
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </section>
    ) : null;

  return (
    <section
      className="min-h-screen flex items-center py-20"
      aria-labelledby="pd-title"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* 좌측: 기능 개요 */}
          <section aria-labelledby="pd-objective" className="space-y-8">
            {/* Objective 섹션 */}
            <header>
              <div className="border-b border-white/20 pb-2 mb-6">
                <h2
                  id="pd-objective"
                  className="text-white/60 text-base md:text-lg tracking-wide"
                >
                  Objective
                </h2>
              </div>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                {description}
              </p>
            </header>

            {/* 기능 개요 */}
            <ListSection
              title="Features"
              items={features}
              dotClass="bg-green-400"
              ariaLabel="기능 개요"
            />

            {/* ✅ 성과/지표 */}
            <ListSection
              title="Achievements"
              items={achievements}
              dotClass="bg-sky-400"
              ariaLabel="성과 및 지표"
            />
          </section>

          {/* 우측: 페이지/기능 사진 */}
          <section aria-labelledby="pd-interface">
            <div className="border-b border-white/20 pb-2 mb-8">
              <h2
                id="pd-interface"
                className="text-white/60 text-base md:text-lg tracking-wide"
              >
                Interface
              </h2>
            </div>

            {additionalImages.length > 0 && (
              <div className={gridClasses}>
                {additionalImages.map((image, index) => (
                  <div
                    key={`${image || "img"}-${index}`}
                    className="w-full flex justify-center"
                  >
                    <div className="w-full">
                      {renderFrame(
                        <img
                          src={image}
                          alt={`${title} 인터페이스 ${index + 1}`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </section>
  );
}