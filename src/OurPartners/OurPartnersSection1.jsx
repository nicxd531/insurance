import { Box, Typography } from '@mui/material'
import React from 'react'

function OurPartnersSection1() {
  // ourpartnersSection 1 main component
  return (
    <Box sx={{mt:4,height:"670px",overflow:"hidden"}} className="d-flex ">
        <Box sx={{width:{xs:"100%",lg:"50%"},flexDirection:"column",pl:{xs:0,lg:12},mt:28,mb:16}} className="d-flex justify-content-center align-items-start">
            <Typography color="primary.main" sx={{fontWeight:"bold",fontSize:{xs:"32px",lg:"40px"},textAlign:"center"}}>Partnership is the main building block to scale.</Typography>
            <Typography className='text-muted' sx={{fontSize:"18px",textAlign:"start",width:"70%",ml:6}}> Here Is How You Can Leverage Partnerships To Ensure Your Insurance Coverage Is Adequate and Affordable. </Typography>
        </Box>
        <Box sx={{width:"50%",display:{xs:"none",lg:"block"}}}>
            <img src='/images/ops1i.png'/>
        </Box>
    </Box>
  )
}

export default OurPartnersSection1