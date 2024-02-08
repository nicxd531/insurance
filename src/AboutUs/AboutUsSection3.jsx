import React from 'react'
import { Box, Typography } from '@mui/material'

function AboutUsSection3() {
  // about section 3 component
  return (
    <Box sx={{mt:8,p:{lg:"103px"},pt:{lg:1},justifyContent:"space-between",flexDirection:{xs:"column",lg:"row"},fontSize:{lg:"16px"}} } className="d-flex justify-spacebetween">
    <Box  className="d-flex justify-content-center align-items-start" sx={{flexDirection:"column",width:{xs:"100%",lg:"45%"},mt:{xs:2,lg:4}}}>
        <Typography color="primary.main"sx={{fontSize:{xs:"22px",lg:"24px"},fontWeight:"bold" ,width:{xs:"60%",lg:"100%"},mt:{lg:1}}}>Our Mission</Typography>
        <Typography className='text-muted' sx={{textAlign:{xs:"justify",lg:"start"},fontSize:{lg:"16px"},mt:{xs:1,lg:1}}}>
         The mission of the insurance company is to provide superior customer service and quality insurance coverage to their clients. They strive to be a leader in the insurance industry by providing innovative products and services that meet the needs of their customers. They strive to build strong relationships with their clients and to act in their best interests. Their goal is to be the go-to provider of quality insurance coverage and protection that is tailored to each customer's unique needs. They are committed to providing a secure financial future for their customers and their families.
        </Typography>
    </Box>
    <Box sx={{width:{xs:"100%",lg:"45%"},mt:3,order:{xs:-1,lg:0}}}>
      <img  style={{width:"100%",margin:"auto"}} src="/images/as3.png"/>
    </Box>
</Box>
)
}

export default AboutUsSection3