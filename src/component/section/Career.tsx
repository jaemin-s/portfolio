import { CareerRepository } from "../../infrastructure/repositories/careerRepository";
import ArticleHeader from "../text/ArticleHeader";

const Career = () => {
  const CareerList = new CareerRepository().getList();

  return (
    <div className="h-full flex flex-col items-center justify-center text-forest">
      <ArticleHeader className="border-forest">CAREER</ArticleHeader>
      <section className="flex">
        <ul className="flex flex-col gap-12">
          {CareerList.map((item, index) => (
            <li className="flex" key={"careerItem_" + index}>
              <div className="hidden md:block mr-8 bg-slate-50 p-4 rounded-xl h-fit w-fit">
                <img
                  className="w-40"
                  src="https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/logo/homechoice.svg"
                  alt=""
                />
              </div>
              <div className="md:border-l-2 border-stone-400 px-8">
                <header className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="md:hidden mr-2 bg-slate-50 p-1 rounded-md h-fit w-fit">
                      <img
                        className="w-8"
                        src="https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/logo/homechoice.svg"
                        alt=""
                      />
                    </div>
                    <h3 className="text-2xl font-semibold leading-none">
                      {item.companyName}
                    </h3>
                  </div>
                  <p className="text-lg whitespace-pre-wrap mb-2">
                    {item.employmentPeriod}
                  </p>
                  <p className="text-lg whitespace-pre-wrap">
                    {item.companyDescription}
                  </p>
                </header>
                <ul className="flex flex-col gap-4">
                  {item.achievementItems.map((expItem, childIndex) => (
                    <li
                      className={`${item.achievementItems.length - 1 > childIndex ? "border-b-[2px]" : "border-none"} border-stone-400 pb-2`}
                      key={`careerItem_${index}_${childIndex}`}
                    >
                      <h4 className="text-lg font-medium border-l-4 pl-4 mb-2 border-forest leading-none">
                        {expItem.achievementTitle}
                      </h4>
                      <p className="whitespace-pre-wrap text-sm mb-1">
                        {expItem.projectPeriod}
                      </p>
                      <p className="whitespace-pre-wrap text-sm">
                        {expItem.achievementDescription}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Career;
