import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function OurPartners3() {
    // ourPartners3 component
  return (
    <Box sx={{px:{xs:2,lg:"150px"},pt:8,className:"d-flex justify-content-center align-items-center"}}>
        <Box sx={{textAlign:"center"}}>
            <Typography sx={{fontSize:"24px",fontWeight:"bold"}} color="primary.main">Life just got better and easier</Typography>
            <Typography className='text-muted' sx={{fontSize:"14px",width:{xs:'90%',lg:"30%"},mx:"auto"}}>Do not look further as we are here to solve all your insurance problems.</Typography>
        </Box>
        <Box data-aos="zoom-in-up" className="d-flex align-items-center" sx={{mt:6,justifyContent:"space-between",flexDirection:{xs:"column",lg:"row"}}}>
            <Box sx={{width:{xs:"100%",lg:"45%"}}}>
                <img style={{width:"100%"}} src="/images/op3i1.png"/>
            </Box>
            <Box sx={{width:{xs:"100%",lg:"45%"},ml:{lg:10}}}>
                <Typography color="primary.main" sx={{fontSize:"20px",fontWeight:"bold"}}>Insurance management for businesses</Typography>
                <Typography className="text-muted" sx={{fontSize:"16px",mt:2}}>The process of insurance management begins with an evaluation of the business’ needs and risk profile. It is essential for business owners to assess the risks that their operations involve, such as fire, theft, injury, or liability. It is essential for business owners to review it.</Typography>
                <Button sx={{backgroundColor:"#3CBF54",color:"white",mt:2,width:"195px",height:"50px",fontSizez:"16px"}}>Get in touch</Button>
            </Box>
        </Box>
        <Box data-aos="zoom-in-up" className="d-flex align-items-center" sx={{mt:6,justifyContent:"space-between",flexDirection:{xs:"column",lg:"row"}}}>
            <Box sx={{width:{xs:"100%",lg:"45%"},mr:{lg:10}}}>
                <Typography color="primary.main" sx={{fontSize:"20px",fontWeight:"bold"}}>A solution for insurers and brokers</Typography>
                <Typography className="text-muted" sx={{fontSize:"16px",mt:2}}>Insurance has long been seen as an integral part of the financial services industry. It provides a way for individuals, businesses and other organizations to protect themselves from financial losses due to various risks such as accidents, natural disasters, theft, and legal liability. </Typography>
                <Button sx={{backgroundColor:"#3CBF54",color:"white",mt:2,width:"195px",height:"50px",fontSizez:"16px"}}>View full details</Button>
            </Box>
            <Box sx={{width:{xs:"100%",lg:"45%"}}}>
                <img style={{width:"100%"}} src="/images/op3i2.png"/>
            </Box>
        </Box>
        <Box data-aos="zoom-in-up" className="d-flex align-items-center" sx={{mt:6,justifyContent:"space-between",height:"450px",flexDirection:{xs:"column",lg:"row"}}}>
            <Box sx={{width:{xs:"100%",lg:"45%"}}}>
                <img style={{width:"100%"}} src="/images/op3i3.png"/>
            </Box>
            <Box sx={{width:{xs:"100%",lg:"45%"},ml:{lg:10}}}>
                <Typography color="primary.main" sx={{fontSize:"20px",fontWeight:"bold"}}>A solution for insurers and brokers</Typography>
                <Typography className="text-muted" sx={{fontSize:"16px",mt:2}}>Insurance has long been seen as an integral part of the financial services industry. It provides a way for individuals, businesses and other organizations to protect themselves from financial losses due to various risks such as accidents, natural disasters, theft, and legal liability. </Typography>
                <Button sx={{backgroundColor:"#3CBF54",color:"white",mt:2,width:"195px",height:"50px",fontSizez:"16px"}}>View full details</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default OurPartners3