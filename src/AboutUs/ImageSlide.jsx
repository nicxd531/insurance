import { useState, useEffect } from "react"
import "../styles/Home.css"
import { Box } from "@mui/material"

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
                    <Box className={`${currentSlide==0?"imageSwapIn":"imageSwapOut"}`}>
                        <img style={{width:"100%"}}  src="/images/asi1.png" alt="car image"/>
                    </Box>
                    <Box className={`${currentSlide==1?"imageSwapIn":"imageSwapOut"}`}>
                        <img style={{width:"100%"}}  src="/images/asi2.png" alt="car image"/>
                    </Box>
                    <Box className={`${currentSlide==2?"imageSwapIn":"imageSwapOut"}`}>
                        <img style={{width:"100%"}}  src="/images/asi3.png" alt="car image"/>
                    </Box>
                    <Box className={`${currentSlide==3?"imageSwapIn":"imageSwapOut"}`}>
                        <img style={{width:"100%"}}  src="/images/asi4.png" alt="car image"/>
                    </Box>
                    <Box className={`${currentSlide==4?"imageSwapIn":"imageSwapOut"}`}>
                        <img style={{width:"100%"}}  src="/images/asi5.png" alt="car image"/>
                    </Box>
                </div>
            </div>
        </div>
     );
}
 
export default ImageSlide;