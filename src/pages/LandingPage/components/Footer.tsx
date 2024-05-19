import React, { Fragment } from 'react'
import x from '../x.svg'
import telegram from '../telegram.svg'
import discord from '../discord.svg'
const Footer = (props : any) => {
    const handleClickOpen = ()=> {
        props.onClick && props.onClick()
    } 
  return (
    <div className="footer"> 
      <div  className= "IconConatiner">
        <button onClick={handleClickOpen} className='landingIconButton'> <img src={x} className='landingIcons' alt="" /> </button>
        <button onClick={handleClickOpen} className='landingIconButton'> <img src={telegram} className='landingIcons' alt="" /> </button>
        <button onClick={handleClickOpen} className='landingIconButton'> <img src={discord} className='landingIcons' alt="" /> </button>

      </div> 
     </div>
  )
}

export default Footer