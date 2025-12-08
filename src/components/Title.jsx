import React from 'react'

export const Title = ({children, className=''}) => {
  return (
    <h2 className={` text-mobile md:text-tablet lg:text-desktop font-normal
    ${className}`}
    >
      {children}
    </h2>
  )
}
