import React from 'react'

const Button = ({ className, ...props }) => (
  <button
    className={`
      f5 ttu
      tracked
      dib
      bw1
      b
      b--near-white
      ph4 pv3
      link pointer
      near-white hover-near-black
      bg-transparent hover-bg-near-white bg-animate
      ${className}
    `}
    {...props}
  />
)

export default Button
