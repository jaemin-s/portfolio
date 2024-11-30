import React from 'react'
import ArticleHeader from '../text/ArticleHeader'
import CareerSection from '../section/CareerSection'

const Career = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-forest">
      <ArticleHeader className="border-forest">CAREER</ArticleHeader>
      <CareerSection />
    </div>
  )
}

export default Career
