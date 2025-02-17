import React from 'react'

function Button({text, bgColor, textColor, handler = () => {}}) {
  return (
    <button className={`${bgColor} ${textColor} cursor-pointer text-black/85 hover:scale-105 duration-300 lg:py-4 lg:px-8 py-2 px-4 rounded-full font-bold relative z-10 `}>
        {text}
    </button>
  )
}

export default Button