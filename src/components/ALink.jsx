import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export const ALink = ({children, link}) => {
  return (
  <a href={link} className="flex items-center justify-center underline uppercase 
  sm:text-[14px]  sm:justify-start">
    {children} <FaArrowRight/>
  </a>
  )
}
