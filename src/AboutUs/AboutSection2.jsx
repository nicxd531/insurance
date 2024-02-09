import { Box,Typography } from '@mui/material'
import React from 'react'

function AboutSection2() {
  // about section 2 component
  return (
    <Box sx={{px:{lg:"103px"},pt:{lg:1},justifyContent:"space-between",flexDirection:{xs:"column",lg:"row"},fontSize:{lg:"16px"},mt:{xs:2,lg:0}} } className="d-flex justify-spacebetween">
        <Box data-aos="zoom-in" sx={{width:{xs:"100%",lg:"45%"},mt:3}}>
            <img style={{width:"100%",margin:"auto"}} src="/images/aS2.png"/>
        </Box>
        <Box className="d-flex justify-content-center align-items-start" sx={{flexDirection:"column",width:{xs:"100%",lg:"45%"},ml:{lg:14},mt:{xs:2,lg:4}}}>
            <Typography color="primary.main" sx={{fontSize:{xs:"22px",lg:"24px"},fontWeight:"bold" ,width:{xs:"60%",lg:"100%"},mt:{lg:1}}}>Our Vision</Typography>
            <Typography className='text-muted' sx={{textAlign:{xs:"justify",lg:"start"},fontSize:{lg:"16px"},mt:{xs:2,lg:1}}}>The story of how the insurance company started began in the early 1900s, when a small group of entrepreneurs saw the potential of the insurance industry. They believed that the industry could provide much-needed financial security to those who needed it most. With this in mind, the group pooled their resources and expertise and opened their very first office.
                At first, the company offered simple life insurance. But as the years passed, their services expanded to include health insurance, auto insurance, and more. Over time, the company gained recognition as a reliable provider of quality service and became one of the leading insurance companies in the country.
            </Typography>
        </Box>
    </Box>
  )
}

export default AboutSection2