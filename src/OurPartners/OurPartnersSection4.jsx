import { Box, Typography } from '@mui/material'
import React,{useState} from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Arrow from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



function OurPartnersSection4() {
    // OurPartnersSection4 component

    const [currentImage, setCurrentImage] = useState(0)
    const [currentImageArrow, setCurrentImageArrow] = useState(true)
    const data =[
        "/images/op4i1.png",
        "/images/op4i1.png",
        "/images/op4i1.png",
        "/images/op4i1.png",
        "/images/op4i1.png",
        "/images/op4i1.png"
    ]
    const handleClickForward  =()=>{
        setCurrentImageArrow(true)
        if(currentImage < data.length - 1){
            setCurrentImage(currentImage + 1)
        }else{
            setCurrentImage(0)
        }
    }
    const handleClickBackward  =()=>{
        setCurrentImageArrow(false)
        if(currentImage == 0){
            setCurrentImage(data.length - 1)
        }else{
            setCurrentImage(currentImage - 1 )
        }
    }
  return (
    <Box sx={{px:{xs:2,lg:"150px"},mt:{xs:40,lg:6},mb:14}}>
        <Box sx={{textAlign:"center"}}>
            <Typography color="primary.main" sx={{fontWeight:"bold",fontSize:"24px"}}>Here is what clients have to say</Typography>
            <Typography className="text-muted"  sx={{width:{xs:"100%",lg:"50%"},mx:"auto",fontSize:"18px",mt:2}}>Reviews from individuals who have made use of our services would convince you</Typography>
        </Box>
        <Box>
            <Box sx={{px:{xs:2,lg:8},mt:{xs:4,lg:6}}}>
               {data.map((data,index)=>{
                const image = currentImage == index ? <img data-aos="zoom-in" key={index} style={{width:"100%"}} src={data}/> :null
                return(
                    <Box> {image}</Box>
                )
               }) }
            </Box>
            <Box sx={{mr:16,mt:{xs:2,lg:0}}} className="d-flex justify-content-end align-items-center">
                <ArrowBackIcon sx={{cursor:"pointer",fontSize:"34px",color: currentImageArrow == false? "#3CBF54":"#868686"}} onClick={handleClickBackward}/>
                <ArrowForwardIcon   sx={{cursor:"pointer",fontSize:"34px",color: currentImageArrow == true ?"#3CBF54":"#868686"}} onClick={handleClickForward}/>
                
            </Box>
        </Box>
    </Box>
  )
}

export default OurPartnersSection4