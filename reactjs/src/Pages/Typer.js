import React from 'react'

export const Typer = ({content,Maincontent}) => {
  return (
    <div className='typer d-flex'>
        <h3>{Maincontent}</h3>
        <h3 style={{'--i': content.length}} className="typer-text">{content}</h3>
    </div>
  )
}
