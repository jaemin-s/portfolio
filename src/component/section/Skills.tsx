import { SkillRepository } from "../../infrastructure/repositories/skillRepository";
import ArticleHeader from "../text/ArticleHeader";
import SkillCategoryComponent from "./SkillCategoryComponent";

function Skills() {
  const skillCategoryList = new SkillRepository().getList();
  return (
    <div className="min-h-full h-fit flex flex-col items-center justify-center text-black">
      <ArticleHeader className="border-black">SKILLS</ArticleHeader>
      <section className="flex flex-col gap-8">
        {skillCategoryList.map((item) => (
          <SkillCategoryComponent
            key={item.categoryName}
            categoryName={item.categoryName}
            skillList={item.skillList}
          />
        ))}
      </section>
    </div>
  );
}

export default Skills;
