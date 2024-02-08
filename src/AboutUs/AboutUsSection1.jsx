import { Box, Typography } from '@mui/material'
import React from 'react'

function AboutUsSection1() {
  // about section 1 component
  return (
    <Box sx={{mt:8,p:{lg:"103px"},justifyContent:"space-between",flexDirection:{xs:"column",lg:"row"},fontSize:{lg:"16px"}} } className="d-flex justify-spacebetween">
        <Box sx={{width:{xs:"100%",lg:"45%"},mt:{xs:4,lg:0}}}>
            <Typography>Who we are</Typography>
            <Typography color="primary.main" sx={{fontSize:{xs:"22px",lg:"40px"},fontWeight:"bold" ,width:{xs:"70%",lg:"100%"},mt:{lg:1}}}>A little backstory of how it all started.</Typography>
            <Typography className='text-muted' sx={{textAlign:{xs:"justify",lg:"start"},fontSize:{lg:"16px"},mt:{xs:1,lg:1}}}>The story of how the insurance company started began in the early 1900s, when a small group of entrepreneurs saw the potential of the insurance industry. They believed that the industry could provide much-needed financial security to those who needed it most. With this in mind, the group pooled their resources and expertise and opened their very first office.
                At first, the company offered simple life insurance. But as the years passed, their services expanded to include health insurance, auto insurance, and more. Over time, the company gained recognition as a reliable provider of quality service and became one of the leading insurance companies in the country.
            </Typography>
        </Box>
        <Box sx={{width:{xs:"100%",lg:"45%"},mt:3,order:{xs:-1,lg:0}}}>
          <img  style={{width:"100%",margin:"auto"}} src="/images/Group 596.png"/>
        </Box>
    </Box>
  )
}

export default AboutUsSection1