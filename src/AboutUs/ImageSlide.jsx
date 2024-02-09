import { useState, useEffect } from "react"
import "../styles/Home.css"
import { Box,Typography } from "@mui/material"
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ImageSlide = () => {
    // image slider for about section 
    // use state hook for the image slider
    const [currentSlide, setcurrentSlide] = useState(0)
    // the main data object for the image directory and title
    const data = [
        {
            "image":"/images/Group 24 (1).png",
            "title":"Automobile"

        },
        {
            "image":"/images/Group 577 (2).png",
            "title":"Health/Life"

        },
        {
            "image":"/images/Group 578.png",
            "title":"Device"

        }
    ]

    const autoScroll= true;
    let slideInterval;
    let intervalTime= 5000;
    const nextSlide=()=>{
        setcurrentSlide(currentSlide === 4? 0 : currentSlide +1)
    }
    
    function auto () {
        slideInterval=setInterval(nextSlide, intervalTime)
    }

    // useeffect hook for reset on refresh 
    useEffect(()=>{
        setcurrentSlide(0)
    },[])

    // use effect hook to call the auto funtion and also clear interval function to clear errors
    useEffect(()=>{
       if (autoScroll) {
        auto()
       }
       return() => {clearInterval(slideInterval)}
    },[currentSlide])

    
    return ( 
        <div className="HomeSection4 d-xl-flex flex-xl-row" style={{position:"relative"}}>
            <div className="d-xl-flex flex-xl-row">
                <div>
                    <Box  className={`${currentSlide==0?"imageSwapIn":"imageSwapOut"}`}>
                        <img style={{width:"100%"}}  src="/images/asi1.png" alt="car image"/>
                        <Box className="glass d-flex justify-content-center align-items-start" sx={{flexDirection:"column",position:"absolute",width:"200px",height:"120px",bottom:"20px",left:35,borderRadius:"5px"}}>
                            <Typography sx={{ml:2,color:"#FFFFFF",fontSize:"18px"}}>Rich Wilson</Typography>
                            <Typography sx={{ml:2,color:"#FFFFFF",fontSize:"14px"}}>QA Tester</Typography>
                            <Box className="d-flex  align-items-start" sx={{mt:1,ml:2,color:"#FFFFFF" ,width:"40%",justifyContent:"space-between"}}>
                            <XIcon/>
                            <InstagramIcon/>
                            <LinkedInIcon/>
                            </Box>
                        </Box>
                    </Box>
                    <Box  className={`${currentSlide==1?"imageSwapIn":"imageSwapOut"}`}>
                        <img style={{width:"100%"}}  src="/images/asi2.png" alt="car image"/>
                        <Box className="glass d-flex justify-content-center align-items-start" sx={{flexDirection:"column",position:"absolute",width:"300px",height:"150px",bottom:"20px",left:40,borderRadius:"5px"}}>
                            <Typography sx={{ml:2,color:"#FFFFFF",fontSize:"18px"}}>Janet Wilson</Typography>
                            <Typography sx={{ml:2,color:"#FFFFFF",fontSize:"14px"}}>Co-founder</Typography>
                            <Typography sx={{ml:2,color:"#FFFFFF",fontSize:"12px" ,width:"70%"}}>She is a co-founder of the insurance company. He has a degree in economics. </Typography>
                            <Box className="d-flex  align-items-start" sx={{mt:1,ml:2,color:"#FFFFFF" ,width:"40%",justifyContent:"space-between"}}>
                            <XIcon/>
                            <InstagramIcon/>
                            <LinkedInIcon/>
                            </Box>
                        </Box>
                    </Box>
                    <Box  className={`${currentSlide==2?"imageSwapIn":"imageSwapOut"}`}>
                        <img style={{width:"100%"}}  src="/images/asi3.png" alt="car image"/>
                        <Box className="glass d-flex justify-content-center align-items-start" sx={{flexDirection:"column",position:"absolute",width:"200px",height:"120px",bottom:"20px",left:35,borderRadius:"5px"}}>
                            <Typography sx={{ml:2,color:"#FFFFFF",fontSize:"18px"}}>Mia Warder</Typography>
                            <Typography sx={{ml:2,color:"#FFFFFF",fontSize:"14px"}}>Product Lead</Typography>
                            <Box className="d-flex  align-items-start" sx={{mt:1,ml:2,color:"#FFFFFF" ,width:"40%",justifyContent:"space-between"}}>
                            <XIcon/>
                            <InstagramIcon/>
                            <LinkedInIcon/>
                            </Box>
                        </Box>
                    </Box>
                    <Box  className={`${currentSlide==3?"imageSwapIn":"imageSwapOut"}`}>
                        <img style={{width:"100%"}}  src="/images/asi4.png" alt="car image"/>
                        <Box className="glass d-flex justify-content-center align-items-start" sx={{flexDirection:"column",position:"absolute",width:"200px",height:"120px",bottom:"20px",left:35,borderRadius:"5px"}}>
                            <Typography sx={{ml:2,color:"#FFFFFF",fontSize:"18px"}}>Archie Young</Typography>
                            <Typography sx={{ml:2,color:"#FFFFFF",fontSize:"14px"}}>Intern</Typography>
                            <Box className="d-flex  align-items-start" sx={{mt:1,ml:2,color:"#FFFFFF" ,width:"40%",justifyContent:"space-between"}}>
                            <XIcon/>
                            <InstagramIcon/>
                            <LinkedInIcon/>
                            </Box>
                        </Box>
                    </Box>
                    <Box  className={`${currentSlide==4?"imageSwapIn":"imageSwapOut"}`}>
                        <img style={{width:"100%"}}  src="/images/asi5.png" alt="car image"/>
                        <Box className="glass d-flex justify-content-center align-items-start" sx={{flexDirection:"column",position:"absolute",width:"200px",height:"120px",bottom:"20px",left:35,borderRadius:"5px"}}>
                            <Typography sx={{ml:2,color:"#FFFFFF",fontSize:"18px"}}>Annie Stanley</Typography>
                            <Typography sx={{ml:2,color:"#FFFFFF",fontSize:"14px"}}>Designer</Typography>
                            <Box className="d-flex  align-items-start" sx={{mt:1,ml:2,color:"#FFFFFF" ,width:"40%",justifyContent:"space-between"}}>
                            <XIcon/>
                            <InstagramIcon/>
                            <LinkedInIcon/>
                            </Box>
                        </Box>
                    </Box>
                </div>
            </div>
        </div>
     );
}
 
export default ImageSlide;