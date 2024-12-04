import { SkillCategory } from "@/data/types/skill.entity";

export const SKILL_DATA: SkillCategory[] = [
  {
    categoryName: "Languages",
    skillList: [
      { name: "TypeScript", color: "3178C6", logoName: "typescript" },
      { name: "JavaScript", color: "F7DF1E", logoName: "javascript" },
      { name: "HTML", color: "E34F26", logoName: "html5" },
      { name: "CSS", color: "1572B6", logoName: "css3" },
      { name: "Kotlin", color: "7F52FF", logoName: "kotlin" },
    ],
  },
  {
    categoryName: "Frameworks",
    skillList: [
      { name: "React", color: "61DAFB", logoName: "react" },
      { name: "Next.js", color: "000000", logoName: "nextdotjs" },
      { name: "React Native", color: "0088CC", logoName: "react" },
      { name: "Android", color: "34A853", logoName: "android" },
      { name: "Jetpack Compose", color: "4285F4", logoName: "jetpackcompose" },
    ],
  },
  {
    categoryName: "State",
    skillList: [
      { name: "Redux", color: "764ABC", logoName: "redux" },
      { name: "Recoil", color: "3578E5", logoName: "recoil" },
      { name: "Zustand", color: "", logoName: "" },
      { name: "Context API", color: "0088CC", logoName: "react" },
      { name: "React Query", color: "FF4154", logoName: "reactquery" },
    ],
  },
  {
    categoryName: "Styling",
    skillList: [
      {
        name: "StyledComponents",
        color: "DB7093",
        logoName: "styledcomponents",
      },
      { name: "Tailwind CSS", color: "06B6D4", logoName: "tailwindcss" },
      { name: "Emotion", color: "", logoName: "" },
    ],
  },
  {
    categoryName: "Testing",
    skillList: [
      { name: "Jest", color: "C21325", logoName: "jest" },
      { name: "React Testing Library", color: "", logoName: "" },
    ],
  },
  {
    categoryName: "DevOps",
    skillList: [
      { name: "Vite", color: "646CFF", logoName: "vite" },
      { name: "Webpack", color: "8DD6F9", logoName: "webpack" },
      { name: "npm", color: "CB3837", logoName: "npm" },
      { name: "Yarn", color: "2C8EBB", logoName: "yarn" },
      { name: "Vercel", color: "000000", logoName: "vercel" },
      { name: "Git", color: "F05032", logoName: "git" },
      { name: "Github", color: "181717", logoName: "github" },
      { name: "Github Actions", color: "2088FF", logoName: "githubactions" },
      { name: "Husky", color: "", logoName: "" },
      { name: "Slack", color: "4A154B", logoName: "slack" },
    ],
  },
];
