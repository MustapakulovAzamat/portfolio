import React from 'react'

export const Button = ({
  as: Component = "button",
  children,
  ...props
}) => {
  return (
    <Component className='
    text-white
    bg-red-700
    rounded-2xl
    text
    flex items-center justify-center
    min-w-[150px] max-w-[300px]
    min-h-[40px] max-h-[100px]
    '
    {...props}
    >
      {children}
    </Component>
  )
}
