import { Xicon , TelegramIcon, DiscordIcon} from '../../../globalComponents/SVGcomponents/SVGicons';

const Footer = (props : any) => {
    const handleClickOpen = ()=> {
        props.onClick && props.onClick()
    } 
  return (
    <div className="footer"> 
      <div  className= "IconConatiner">
        <div onClick={handleClickOpen}className='landingIconButton' > <Xicon /> </div>
        <div onClick={handleClickOpen} className='landingIconButton'> <TelegramIcon /> </div>
        <div onClick={handleClickOpen} className='landingIconButton'> <DiscordIcon /></div>
      </div> 
     </div>
  )
}

export default Footer