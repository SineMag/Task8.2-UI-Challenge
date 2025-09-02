import React from 'react'


type Props ={
    variant?: String,
    children: React.ReactNode,
    style?: React.CSSProperties
}
export const Text: React.FC<Props>=({ variant, children, style })=> {
    if(variant === 'h1') return <h1 style={style}>{children}</h1>
    if(variant === 'h2') return <h2 style={style}>{children}</h2>
    if(variant === 'p') return <p style={style}>{children}</p>
    if(variant === 'span') return <span style={style}>{children}</span>
  return (
    <div style={style}>{children} </div>
  )
}
