import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

    const Automobile=[
        {
            image:"/images/bsi5.png",
            date:"May 22, 2022",
            topic:"Types of Insurance Policies and how to buy",
            description:"Lörem ipsum kror kaligt väjagen."
        },
        {
            image:"/images/bsi6.png",
            date:"May 22, 2022",
            topic:"Making Smart Insurance Decisions and do it right.",
            description:"Lörem ipsum kror kaligt väjagen."
        },
        {
            image:"/images/bsi5.png",
            date:"May 22, 2022",
            topic:"Shopping for Insurance: Including online ",
            description:"Lörem ipsum kror kaligt väjagen."
        }
    ]

    const Health =[
        {
            image:"/images/bsi5.png",
            date:"May 22, 2022",
            topic:"Understanding Different Types of Insurance",
            description:"Lörem ipsum kror kaligt väjagen."
        },
        {
            image:"/images/bsi6.png",
            date:"May 22, 2022",
            topic:"Claims Process: Learn the steps to file a claim.",
            description:"Lörem ipsum kror kaligt väjagen."
        },
        {
            image:"/images/bsi5.png",
            date:"May 22, 2022",
            topic:"Insurance Companies: Helping customers buy",
            description:"Lörem ipsum kror kaligt väjagen."
        }
    ]
    const Device=[
        {
            image:"/images/bsi5.png",
            date:"May 22, 2022",
            topic:"Understanding Your Coverage: Get it right",
            description:"Lörem ipsum kror kaligt väjagen."
        },
        {
            image:"/images/bsi6.png",
            date:"May 22, 2022",
            topic:"Claims Adjustment: Explaining the process",
            description:"Lörem ipsum kror kaligt väjagen."
        },
        {
            image:"/images/bsi5.png",
            date:"May 22, 2022",
            topic:"Disaster Preparation: Learn how to prepare",
            description:"Lörem ipsum kror kaligt väjagen."
        }
    ]
function BlogSection3() {
    // main blog section 3 component
  return (
    <Box sx={{mt:8,px:{xs:2,lg:"143px"}}}>
        <Box className="d-flex align-items-center justify-content-center" sx={{flexDirection:"column"}}>
            <Typography className='text-muted' sx={{fontSize:{lg:"18px"}}}>Learn by category</Typography>
            <Typography sx={{fontSize:{xs:"18px",lg:"24px"},fontWeight:"bold",mt:{lg:2}}} color="primary.main">Learn as you join our network</Typography>
            <Typography className='text-muted' sx={{textAlign:"center",fontSize:{lg:"18px"},width:{lg:"40%"}}}>Understanding Your Insurance: Explaining the different parts of an insurance policy.</Typography>
        </Box>
        <Box className="d-flex justify-content-center " sx={{mt:4,flexDirection:"column",width:"100%",alignItems:{xs:"center",lg:"start"}}}>
            <Typography sx={{textAlign:{lg:"start"},textDecoration:"underline",fontSize:{xs:"18px",lg:"20px"},fontWeight:"bold"}} color="primary.main">Automobile Insurance</Typography>
            <Box className="d-flex align-items-center" sx={{justifyContent:{xs:"center",lg:"space-between"},flexDirection:{xs:"column",lg:"row"},mt:{lg:3}}}>
                {Automobile.map((data,index)=>{
                    return(
                        <Paper data-aos="zoom-in-up" key={index} sx={{width:{xs:"80%",lg:"32%"},height:{xs:"275px",lg:"350px"},mt:{xs:2,lg:0}}}>
                            <Box sx={{height:{xs:"60%"},overflow:"hidden",position:"relative"}}><img src={data.image}/> <img src="/images/playicon.png" style={{top:"50%",left:"40%",position:"absolute"}}/></Box>
                            <Box sx={{p:2}}>
                                <Box className="d-flex" sx={{justifyContent:"space-between",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}}>
                                    <Typography sx={{fontSize:"12px" }}>{data.date}</Typography>
                                    <Box>
                                        <img src='/images/arrow.png'/>
                                    </Box>
                                </Box>
                                <Typography color="primary.main" sx={{fontWeight:"bold",fontSize:"14px",mt:1}}>{data.topic}</Typography>
                                <Typography className='text-muted' sx={{fontWeight:"bold",fontSize:"12px"}}>{data.description}</Typography>
                            </Box>
                            
                        </Paper>
                    )
                })}
            </Box>
        </Box>
        <Box className="d-flex justify-content-center " sx={{mt:4,flexDirection:"column",width:"100%",alignItems:{xs:"center",lg:"start"}}}>
            <Typography sx={{textAlign:{lg:"start"},textDecoration:"underline",fontSize:{xs:"18px",lg:"20px"},fontWeight:"bold"}} color="primary.main">Health Insurance</Typography>
            <Box className="d-flex align-items-center" sx={{justifyContent:{xs:"center",lg:"space-between"},flexDirection:{xs:"column",lg:"row"},mt:{lg:3}}}>
                {Health.map((data,index)=>{
                    return(
                        <Paper data-aos="zoom-in-up" key={index} sx={{width:{xs:"80%",lg:"32%"},height:{xs:"275px",lg:"350px"},mt:{xs:2,lg:0}}}>
                            <Box sx={{height:{xs:"60%"},overflow:"hidden",position:"relative"}}><img src={data.image}/> <img src="/images/playicon.png" style={{top:"50%",left:"40%",position:"absolute"}}/></Box>
                            <Box sx={{p:2}}>
                                <Box className="d-flex" sx={{justifyContent:"space-between",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}}>
                                    <Typography sx={{fontSize:"12px" }}>{data.date}</Typography>
                                    <Box>
                                        <img src='/images/arrow.png'/>
                                    </Box>
                                </Box>
                                <Typography color="primary.main" sx={{fontWeight:"bold",fontSize:"14px",mt:1}}>{data.topic}</Typography>
                                <Typography className='text-muted' sx={{fontWeight:"bold",fontSize:"12px"}}>{data.description}</Typography>
                            </Box>
                            
                        </Paper>
                    )
                })}
            </Box>
        </Box>
        <Box className="d-flex justify-content-center " sx={{mt:4,flexDirection:"column",width:"100%",alignItems:{xs:"center",lg:"start"}}}>
            <Typography sx={{textAlign:{lg:"start"},textDecoration:"underline",fontSize:{xs:"18px",lg:"20px"},fontWeight:"bold"}} color="primary.main">Device Insurance</Typography>
            <Box className="d-flex align-items-center" sx={{justifyContent:{xs:"center",lg:"space-between"},flexDirection:{xs:"column",lg:"row"},mt:{lg:3}}}>
                {Device.map((data,index)=>{
                    return(
                        <Paper data-aos="zoom-in-up" key={index} sx={{width:{xs:"80%",lg:"32%"},height:{xs:"275px",lg:"350px"},mt:{xs:2,lg:0}}}>
                            <Box sx={{height:{xs:"60%"},overflow:"hidden",position:"relative"}}><img src={data.image}/> <img src="/images/playicon.png" style={{top:"50%",left:"40%",position:"absolute"}}/></Box>
                            <Box sx={{p:2}}>
                                <Box className="d-flex" sx={{justifyContent:"space-between",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}}>
                                    <Typography sx={{fontSize:"12px" }}>{data.date}</Typography>
                                    <Box>
                                        <img src='/images/arrow.png'/>
                                    </Box>
                                </Box>
                                <Typography color="primary.main" sx={{fontWeight:"bold",fontSize:"14px",mt:1}}>{data.topic}</Typography>
                                <Typography className='text-muted' sx={{fontWeight:"bold",fontSize:"12px"}}>{data.description}</Typography>
                            </Box>
                            
                        </Paper>
                    )
                })}
            </Box>
        </Box>
    </Box>
  )
}

export default BlogSection3