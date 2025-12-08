import React from 'react'

export const Text = ({children, className = ""}) => {
  return (
    <p className={`sm:text-lg ${className}`}>
      {children}
    </p>
  )
}
