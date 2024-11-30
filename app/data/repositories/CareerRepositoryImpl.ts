import { CareerEntity } from '@/app/domain/entities/career.entity'
import { CareerRepository } from '@/app/domain/repositories/career.repo'

export class CareerRepositoryImpl implements CareerRepository {
  private readonly mockData: CareerEntity[] = [
    {
      companyName: '(주)홈초이스',
      logoUrl: 'https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/logo/homechoice.svg',
      employmentPeriod: '2024.01 ~ 재직중',
      companyDescription: 'VOD, 배급, 광고, 채널 등의 다양한 사업을 영위하는 종합미디어 그룹',
      achievementItems: [
        {
          achievementTitle: 'UI/UX 개편',
          projectPeriod: '2024년 상반기',
          achievementDescription: 'Smart TV앱의 전반적인 UI/UX 개선 작업',
        },
        {
          achievementTitle: 'Smart TV App 심사 등록 관리',
          projectPeriod: '2024년 상반기',
          achievementDescription: 'Samsung, LG 스토어 심사 담당',
        },
        {
          achievementTitle: 'UI/UX 개편',
          projectPeriod: '2024년 상반기',
          achievementDescription: 'Smart TV앱의 전반적인 UI/UX 개선 작업',
        },
        {
          achievementTitle: 'Smart TV App 심사 등록 관리',
          projectPeriod: '2024년 상반기',
          achievementDescription: 'Samsung, LG 스토어 심사 담당',
        },
      ],
    },
  ]

  async getCareerList(): Promise<CareerEntity[]> {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return this.mockData
  }
}
