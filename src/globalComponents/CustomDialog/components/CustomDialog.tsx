import * as React from 'react';
import Button from '@mui/material/Button';
import {Dialog, Box} from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Backdrop from '@mui/material/Backdrop';
import dialogImg from "../construction.png"

import "../styles.css"
import Footer from '../../../pages/LandingPage/components/Footer';
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({open, setOpen}) {
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
  
  return (
    <React.Fragment>
        <Backdrop
        sx={{ color: '#fff', 
              zIndex: (theme) => theme.zIndex.drawer + 1 ,
              filter: 'blur(5px)', 
              backgroundColor: 'rgba(0, 0, 0, 0.8)' ,
              // borderRadius: "30px"
            }}
        open={open}
        onClick={handleClose}
      >      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx ={{
            backgroundColor: "transparent",           
            minHeight: "300px",
            minWidth: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // borderRadius: "40px" 
          }}
      >
        
        <Box 
          sx ={{
            margin: "0px",
            backgroundColor: "#1E1E1E",
            minHeight: "400px",
            minWidth: "500px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // borderRadius: "40px" 
          }}>          
           <div className="dialogImage-div"> 
             <img src={dialogImg} className='dialogImage' alt="construction-img" />
           </div>
           <div className='dialogText-div'>
            <h1 className='dialogText-text'><p>Under</p> <p style={{color : "#CBDC49", fontStyle : "italic"}}> {" "}Construction...</p></h1>
           {/* <Footer onClick = {handleClickOpen}/>         */}
             
           </div>            
        </Box>
      </Dialog>
      </Backdrop>
    </React.Fragment>
  );
}