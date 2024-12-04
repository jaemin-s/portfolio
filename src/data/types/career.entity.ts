export interface CareerEntity {
  companyName: string;
  logoUrl: string;
  employmentPeriod: string;
  companyDescription: string;
  achievementItems: AchievementItem[];
}

export interface AchievementItem {
  achievementTitle: string;
  projectPeriod: string;
  achievementDescription: string;
}
