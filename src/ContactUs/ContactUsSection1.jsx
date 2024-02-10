import { Box, Typography } from '@mui/material'
import React from 'react'

function ContactUsSection1() {
  return (
    <Box className="contactUsSection1 d-flex justify-content-center align-items-center" sx={{height:{xs:"100vh",lg:"500px"},mt:{xs:10,lg:10},flexDirection:"column",color:"#F2F2F2",mb:{xs:"550px",lg:"700px"}}}> 
        <Typography sx={{fontSize:{xs:"35px",lg:"40px"},width:{xs:"100%",lg:"50%"},textAlign:"center"}}>Get in touch with us regarding any issues faced</Typography>
        <Typography sx={{fontSize:{xs:"20px",lg:"18px"},width:{xs:"100%",lg:"30%"},textAlign:"center"}}> Contact Us Today for Comprehensive Insurance Solutions!</Typography>
    </Box>
  )
}

export default ContactUsSection1