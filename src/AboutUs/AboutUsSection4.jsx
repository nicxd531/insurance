import { Box, Typography } from '@mui/material'
import React from 'react'
import ImageSlide from './ImageSlide'
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function AboutUsSection4() {
  // about section 4 main component
  return (
    <Box>
        <Box sx={{width:"100%",flexDirection:"column",mt:5,mb:5}} className="d-flex justify-content-center align-items-center">
            <Typography sx={{fontSize:{lg:'16px'}}}>Who we are</Typography>
            <Typography color="primary.main" sx={{fontWeight:"bold",fontSize:{xs:"16px",lg:"24px"}}}>This is who we are</Typography>
            <Typography sx={{fontSize:{lg:'16px'}}} className='text-muted'>Meet the key players and trailblazers of the company</Typography>
        </Box>
        <Box sx={{display:{xs:"none",lg:"grid"},gridTemplateColumns:"repeat(12, 1fr)",height:"1000px" ,gridTemplateRows:"repeat(12, 1fr)",rowGap:"20px",columnGap:"60px",width:"100%"}}>
          <Box sx={{gridRow:{lg:"1/6"},gridColumn:{lg:"2/5"},objectFit:"cover",position:"relative"}}>
            <img src='/images/asi1.png' style={{width:"100%"}}/>
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
          <Box className="d-flex" sx={{gridRow:{lg:"1/12"},gridColumn:{lg:"5/9"}}} >
            <Box sx={{height:"60%",width:"100%",my:"auto",position:"relative"}}>
              <img src='/images/asi2.png' style={{width:"100%"}}/>
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
          </Box>
          <Box sx={{gridRow:{lg:"1/6"},gridColumn:{lg:"9/12"},position:"relative"}}>
            <img src='/images/asi3.png' style={{width:"100%"}}/>
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
          <Box sx={{gridRow:{lg:"7/12"},gridColumn:{lg:"2/5"},position:"relative"}}>
            <img src='/images/asi4.png'style={{width:"100%"}}/>
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
          <Box sx={{gridRow:{lg:"7/12"},gridColumn:{lg:"9/12"},position:"relative"}}>
            <img src='/images/asi5.png' style={{width:"100%"}}/>
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
        </Box>
        <Box sx={{display:{xs:"block",lg:"none",width:"100%",overflow:"hidden",mt:9}}}>
          <ImageSlide/>
        </Box>
    </Box>
  )
}

export default AboutUsSection4