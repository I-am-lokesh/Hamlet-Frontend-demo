import {useState} from 'react'
import '../styles.css'
import AppHeader from '../../../globalComponents/AppHeader/AppHeader'
import squares from "../squares.svg"
import squareVertical from "../squares-vertical.svg"
import Hamlet from "../Hamlet.png"
import AppButton from '../../../globalComponents/Buttons/AppButton'
import CustomDialog from '../../../globalComponents/CustomDialog/components/CustomDialog'
import Footer from './Footer'
const Index = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return ( 
    <div className ="root">
      <img src={squares} className='squares' alt="" />
      <AppHeader onButtonClick={handleClickOpen}/>
      <div className='landing'> 
        <div className='landing__content'>
          <h1 className='landing__title'> <p><span style={{color : "#CBDC49"}}>Community</span> Powered </p> Fair Token Launches</h1>
          <p className='landing__description'>Form a hamlet, raise on-chain funds, and create LP for your memecoin or project token</p>
          <div className="button_container"> 
            <AppButton 
              text={"Explore Hamlets"}
              styles={{
                bgColor : "#E8EAED",
                color : "#000000",
                
                }}
              onClick = {handleClickOpen}
              />
            <AppButton 
              text={"Launch Your Token"} 
              img={"launch"} 
              styles={{
                bgColor : "transparent",
                color : "#CBDC49",
                border : "2px solid #CBDC49",
                }}
                onClick = {handleClickOpen} />
          </div> 
        </div>
        <div className='landing__image'>
           <img src={Hamlet} className="landing_pic" alt="" />
           <div className='image_text'> <p>hamlet. noun. ham·​let ˈham-lət. : a small mountain village</p> </div>
        </div>
      </div>
       <img src={squareVertical} className='squares-vertical' alt="" />
      <CustomDialog open={open} setOpen={setOpen} />
      <Footer onClick = {handleClickOpen}/>  
    </div>
  )
}

export default Index