import React from 'react'
import BodyText from '../text/BodyText'
import DateText from '../text/DateText'
import { CareerRepository } from '@/app/data/repositories'
// import Image from 'next/image'

const CareerSection = async () => {
  const CareerList = await CareerRepository.getCareerList()

  return (
    <section className="flex">
      <ul className="flex flex-col gap-12">
        {CareerList.map((item, index) => (
          <li className="flex" key={'careerItem_' + index}>
            <div className="mr-8 bg-slate-50 p-4 rounded-full h-fit w-fit">
              {/* <Image src="https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/logo/homechoice.png" alt="" /> */}
              <img
                className="w-40"
                src="https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/logo/homechoice.svg"
                alt=""
              />
            </div>
            <div className="border-l-2 border-stone-400 pl-8">
              <header className="mb-6">
                <h3 className="text-2xl mb-4 font-semibold">{item.companyName}</h3>
                <DateText className="mb-2">{item.employmentPeriod}</DateText>
                <BodyText>{item.companyDescription}</BodyText>
              </header>
              <ul className="flex flex-col gap-4">
                {item.achievementItems.map((expItem, childIndex) => (
                  <li
                    className={`${item.achievementItems.length - 1 > childIndex ? 'border-b-[2px]' : 'border-none'} border-stone-400 pb-2`}
                    key={`careerItem_${index}_${childIndex}`}
                  >
                    <h4 className="text-lg font-medium border-l-4 pl-4 mb-2 leading-none">
                      {expItem.achievementTitle}
                    </h4>
                    <DateText className="text-sm mb-1">{expItem.projectPeriod}</DateText>
                    <BodyText className="text-sm">{expItem.achievementDescription}</BodyText>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CareerSection
