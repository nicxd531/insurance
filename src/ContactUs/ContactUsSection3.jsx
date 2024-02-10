import { Box, Typography } from '@mui/material'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const data =[
    {
        heading:'How do I use the live chat ?',
        description:"It's so easy to get started! Select the chat icon and simply fill out a few details to begin."
    },
    {
        heading:'What types of insurance are available ?',
        description:"It's so easy to get started! Select the chat icon and simply fill out a few details to begin."
    },
    {
        heading:'How does my insurance coverage apply to my medical bills ?',
        description:"It's so easy to get started! Select the chat icon and simply fill out a few details to begin."
    },
    {
        heading:'What is the difference between term and whole life insurance ?',
        description:"It's so easy to get started! Select the chat icon and simply fill out a few details to begin."
    },
    {
        heading:'How much insurance coverage do I need ?',
        description:"It's so easy to get started! Select the chat icon and simply fill out a few details to begin."
    },
    {
        heading:'Is there a way to lower my insurance premiums ?',
        description:"It's so easy to get started! Select the chat icon and simply fill out a few details to begin."
    },
    {
        heading:'What is the difference between liability and full coverage insurance ?',
        description:"It's so easy to get started! Select the chat icon and simply fill out a few details to begin."
    }
]



function ContactUsSection3() {
    // const for holfing accordion 
    
  return (
    <Box sx={{width:{xs:"80%",lg:"50%"},mx:"auto"}}>
        <Box>
            <Typography color="primary.main" sx={{mx:"auto",textAlign:"center",fontSize:"24px",fontWeight:"bold",mb:4}}>Frequent Asked Questions</Typography>
        </Box>
        <Box sx={{mb:3}}>
            {
                data.map((data,index)=>{
                    
                    return(
                        <Accordion sx={{backgroundColor:"#FFF7F7"}}  key={index}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography>{data.heading}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                {data.description}
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
            
        </Box>
    </Box>
  )
}

export default ContactUsSection3