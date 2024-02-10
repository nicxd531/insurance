import { Box,Button,FormGroup,TextField,Typography } from '@mui/material'
import React from 'react'


function ContactUsSection2() {
    // contactussection2 component
  return (
    <Box className="d-flex" sx={{backgroundColor:"#F2F2F2",width:{lg:"1100px",xs:"90%"},position:"absolute",top:{lg:440,xs:700},left:{xs:20,lg:100},}}>
        <Box sx={{width:{lg:"50%",xs:"100%"},p:"10px",display:{xs:"flex"},justifyContent:{xs:"center"},alignItems:{xs:"center"}}}>
            <Box sx={{flexDirection:"column",width:{xs:"100%"},mt:{xs:3}}} className="d-flex justify-content-center align-items-center">
                <Typography color="primary.main" sx={{fontSize:{lg:"24px"},fontWeight:'bold'}}>Contact Us</Typography>
                <Typography className="text-muted" sx={{fontSize:{lg:"18px"}}}>Need help? We would love to hear from you</Typography>
                <FormGroup sx={{mt:3,flexDirection:"column",width:{lg:"70%",xs:"90%"}}} className='d-flex justify-content-center align-items-center '>
                    <TextField sx={{width:"100%",mt:3}}  id="outlined-basic" label="First Name" variant="outlined" />
                    <TextField sx={{width:"100%",mt:3}}   id="outlined-basic" label="Last Name" variant="outlined" />
                    <TextField sx={{width:"100%",mt:3}}  id="outlined-basic" label="Email" variant="outlined" />
                    <TextField multiline rows={15} sx={{width:"100%",mt:3}}  id="outlined-basic" label="Message" variant="outlined" />
                    <Button  component="label" variant="contained"  sx={{backgroundColor:"#3CBF54",width:"100%",mt:3,mb:2}}>Send</Button>
                </FormGroup>
            </Box>

        </Box>
        <Box className=" justify-content-cennter align-items-center" sx={{backgroundColor:"#255B7D",width:{xs:"90%",lg:"50%"},p:"72px",display:{xs:"none",lg:"flex"}}}>
            <Box sx={{color:"white"}}>
                <Typography sx={{fontSize:{lg:"18px",mb:2},fontWeight:"bold"}}>Hours</Typography>
                <Typography sx={{fontSize:{lg:"16px"},mb:4}}>Mon - Fri : 8am - 5pm</Typography>
                <Typography sx={{fontSize:{lg:"16px"},fontWeight:"bold"}}>Email</Typography>
                <Typography sx={{fontSize:{lg:"16px"},mb:4}}>Send a message using the form or shoot us a mail to us at help@basinsurancebrokers.com</Typography>
                <Typography sx={{fontSize:{lg:"18px"},fontWeight:"bold"}}>Address</Typography>
                <Typography sx={{fontSize:{lg:"16px"},mb:4}}>Mutual Benefits Assurance Plc 7th Floor, Wing A, Zone 3 Plot 1665, Adetokunbo Ademola Street Victoria Island  Lagos, Nigeria.</Typography>
                <Typography sx={{fontSize:{lg:"18px"},fontWeight:"bold"}}>Give us a call</Typography>
                <Typography sx={{fontSize:{lg:"16px"}}}>We can be reached by phone at 090-5462-1726</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default ContactUsSection2