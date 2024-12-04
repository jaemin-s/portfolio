import { ProjectItem } from "@/data/types/project.entity";
import TechBadge from "../badge/TechBadge";

const ProjectDialog = (props: ProjectItem) => {
  return (
    <div>
      <header className="bg-copper text-white p-6">
        <h2 className="text-3xl font-bold mb-2">{props.title}</h2>
        <ul className="flex gap-2 mb-2">
          {props.stackBadges.map((item, index) => (
            <li key={index}>
              <TechBadge>{item}</TechBadge>
            </li>
          ))}
        </ul>
        <p className="text-stone-300">{props.period}</p>
      </header>
      {/* 프로젝트 미리보기 */}
      <section className="p-6 border-b border-stone-200">
        <h2 className="text-2xl font-bold text-stone-800 mb-6">
          프로젝트 미리보기
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-fit mx-auto">
          {props.previewUrls.map((item, index) => (
            <img
              src={item}
              key={index}
              alt=""
              className="h-52 rounded-lg shadow object-cover"
            />
          ))}
        </div>
      </section>
      {/* 주요 기능 */}
      <section className="p-6 border-b border-stone-200">
        <h2 className="text-2xl font-bold text-stone-800 mb-6">주요 기능</h2>
        <ul className="flex flex-col gap-6">
          {props.features.map((item, index) => (
            <li key={index} className="bg-stone-100 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-stone-800 mb-2">
                {item.title}
              </h3>
              <p className="text-stone-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>
      {/* 기술 스택 섹션 */}
      <section className="p-6">
        <h2 className="text-2xl font-bold text-stone-800 mb-6">사용 기술</h2>
        {/* 주요 기술 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-stone-800 mb-4">
            주요 기술
          </h3>
          <ul className="space-y-6">
            {props.functions.map((item, index) => (
              <li key={index} className="p-4 bg-stone-100 rounded-lg">
                <h4 className="text-copper font-medium mb-3">{item.title}</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-stone-600 font-medium mb-2">
                      선정 이유:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      {item.description.map((str, index) => (
                        <li key={index}>{str}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-stone-600 mt-3 text-sm">{item.comment}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* 기타 사용 기술 */}
        <div>
          <h3 className="text-xl font-simibold text-stone-800 mb-4">
            기타 사용 기술
          </h3>
          <div className="bg-stone-100 rounded-lg p-4">
            <ul className="flex flex-col gap-4">
              {props.stackCategories.map((item, index) => (
                <li key={index}>
                  <h4 className="text-stone-700 font-medium mb-2">
                    {item.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.stacks.map((stack, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white text-stone-600 rounded-md border border-stone-200"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProjectDialog;
