import React from 'react'
import ArticleHeader from '../text/ArticleHeader'

const SimpleIntroduce = () => {

    const str = `SIM JAE MIN`
    const str2 = `안녕하세요\n지속적인 성장과 혁신을 추구하는\n열정적인 프론트엔드 개발자\n심재민입니다`
  return (
    <div className='h-full flex flex-col items-center justify-center'>
        <ArticleHeader str={str} color='#ffeeaa'/>
        <p className='whitespace-pre-wrap text-center text-2xl'>{str2}</p>
    </div>
  )
}

export default SimpleIntroduce