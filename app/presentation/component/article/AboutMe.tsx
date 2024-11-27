import React from 'react'
import ArticleHeader from '../text/ArticleHeader'

type Props = {}

const AboutMe = (props: Props) => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
        <ArticleHeader str='ABOUT ME'/>
    </div>
  )
}

export default AboutMe