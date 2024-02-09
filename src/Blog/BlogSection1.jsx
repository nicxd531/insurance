import { Typography,Box } from '@mui/material'
import React from 'react'

function BlogSection1() {
    // main Blog section  1 component
  return (
    <Box sx={{mt:15}}>
        <Box sx={{flexDirection:"column",mb:{xs:3,lg:8},mt:{xs:2,lg:7}}} className="d-flex justify-content-center align-items-center">
            <Typography sx={{fontSize:{xs:"",lg:"16px"},mb:2}}>Gain insights within the imdustry</Typography>
            <Typography color="primary.main" sx={{fontSize:{xs:"20px",lg:"40px"},width:{xs:"80%",lg:"40%"},textAlign:"center",fontWeight:"bold"}}>The blog,<br/>Here to keep you informed</Typography>
            <Typography className='text-muted' sx={{fontSize:{xs:"14px",lg:"18px"},width:{xs:"80%",lg:"40%"},textAlign:"center"}}>Get the Most Out of Your Insurance Policy with Tips from the Experts</Typography>
        </Box>
        <Box sx={{width:"100%"}}>
            <img style={{width:"100%"}} src="/images/bs1i.png"/>
        </Box>
    </Box>
  )
}

export default BlogSection1