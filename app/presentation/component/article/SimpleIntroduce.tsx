import React from 'react'
import ArticleHeader from '../text/ArticleHeader'

const SimpleIntroduce = () => {
  const str = `SIM JAE MIN`
  const str2 = `안녕하세요\n지속적인 성장과 혁신을 추구하는\n열정적인 프론트엔드 개발자\n심재민입니다`
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <ArticleHeader str={str} color="#ffeeaa" />
      <div className="flex gap-10 h-fit items-center">
        <img
          className="w-40 h-40 object-cover object-top rounded-full"
          src="https://github.com/jaemin-s/jaemin-s/raw/refs/heads/main/image/personal/jm.jpg"
        />
        <p className="whitespace-pre-wrap text-center text-xl">{str2}</p>
      </div>
    </div>
  )
}

export default SimpleIntroduce
