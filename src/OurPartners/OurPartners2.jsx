import { Box, Button, Typography } from '@mui/material'
import React ,{useState}from 'react'
import MiniNav2 from '../components/MiniNav2'

function OurPartners2() {
    // ourPartners2 Main component
    const [toggleSlider, setToggleslider] = useState(1)
    const data = [
        {
            image:"/images/life-ring.png",
            heading:"Customer satisfaction",
            description:"Customer satisfaction in the insurance sector is essential for a business to thrive. Insurance companies strive to provide the best customer service possible."
        },
        {
            image:"/images/chart-histogram.png",
            heading:"Revenue multiplier",
            description:"Revenue multiplier is a concept used in the insurance industry to measure the potential increase in revenues generated by an underwriter over a period of time."
        },
        {
            image:"/images/interactive.png",
            heading:"Digital ready",
            description:"In recent years, the digital insurance landscape has seen an explosion in the number of digital ready insurance services that have become available."
        },
        {
            image:"/images/product-hunt.png",
            heading:"Optimized products",
            description:"Insurance companies are increasingly realizing the importance of creating optimized products for their customers. By creating insurance products that work."
        },
    ]

  return (
    <Box sx={{mt:1}}>
        <Box sx={{p:{xs:1,lg:"123px"}}}>
            <MiniNav2 toggleSlider={toggleSlider} setToggleslider={setToggleslider}/>
        </Box>
        <Box sx={{width:"100%",backgroundColor:"#DEFDDB",px:{xs:1,lg:"227px"},pt:4}}>
            <Typography color="primary.main" sx={{fontWeight:"bold",textAlign:"center",fontSize:"22px"}}>What we do differently</Typography>
            <Box sx={{flexWrap:"wrap",justifyContent:"space-between"}} className="d-flex  align-items-center">
                {
                    data.map((data,index)=>{
                        return(
                        <Box  data-aos="zoom-in-up" key={index} sx={{width:"45%",textAlign:"center",mt:6}} >
                            <img src={data.image}/>
                            <Typography color="primary.main" sx={{fontWeight:"bold",mt:2,fontSize:{xs:"12px",lg:"18px"}}}>{data.heading}</Typography>
                            <Typography className='text-muted' sx={{mt:2,fontSize:{xs:"10px",lg:"14px"}}}>{data.description}</Typography>
                        </Box>
                        )
                    })
                }
                <Button  variant='contained' sx={{backgroundColor:"#3CBF54",width:{xs:"150px",lg:"249px"} ,mx:"auto",mt:6,mb:4,height:{xs:"30px",lg:"50px"},fontSize:{xs:"10px",lg:"14px"}}}>See case studies</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default OurPartners2