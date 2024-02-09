import { Box, Divider, Paper, Typography } from '@mui/material'
import React from 'react'

function BlogSection2() {
    // main Section 2 component
  return (
    <Box sx={{px:{xs:2,lg:"143px"},mt:4}}>
        <Box className="d-flex align-content-center " sx={{justifyContent:"space-between"}}>
            <Typography color="primary.main">Latest posts</Typography>
            <Typography color="secondary.main">Read more</Typography>
        </Box>
        <Divider sx={{color:"black", border:"0.2px solid black"}}/>
        <Box className="d-flex align-content-center " sx={{justifyContent:"space-between",flexDirection:{xs:"column",lg:"row"}}}>
            <Paper sx={{height:{lg:"350px"},width:{xs:"100%",lg:"47%"},p:0,mt:4,borderRadius:"5px"}}>
                <Box sx={{height:"60%",overflow:"hidden",width:"100%",objectFit:"cover",borderTopLeftRadius:"5px",borderTopRightRadius:"5px"}}>
                    <img style={{objectFit:"cover",width:"100%",scale:"1.2",borderRadius:"5px"}} src='/images/bsi2.png'/>
                </Box>
                <Box sx={{p:1,pb:0}}>
                    <Box className="d-flex align-content-center " sx={{justifyContent:"space-between"}}>
                    <Typography sx={{fontSize:"16px"}}>Automobile   .   May 22, 2022</Typography>
                    <Box >
                        <img src='/images/arrow.png'/>
                    </Box>
                    </Box>
                    <Typography sx={{fontSize:"20px",fontWeight:"bold",width:"75%"}} color="primary.main">Understanding the Different Types of Life Insurance</Typography>
                    <Typography className='text-muted' sx={{fontSize:"18px"}}>Lörem ipsum kror kaligt väjagen som osade.  </Typography>
                </Box>
            </Paper>
            <Box className="d-flex" sx={{width:{xs:"100%",lg:"47%"},mt:4,height:"350px",justifyContent:"space-between",flexDirection:"column"}}>
                <Paper  data-aos="zoom-in-up" className="d-flex " sx={{height:{xs:"100%",lg:"47%"}}}>
                    <Box sx={{width:{xs:"50%",lg:"40%"},objectFit:"cover",overflow:"hidden",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}}>    
                     <img style={{width:"100%",height:"100%",objectFit:"cover",scale:{xs:"2",lg:"1.4"}}} src="/images/bsi3.png"/>
                    </Box>
                    <Box sx={{p:2}}>
                        <Box className="d-flex" sx={{justifyContent:"space-between",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}}>
                                <Typography sx={{fontSize:"12px" }}>Automobile   .   May 22, 2022</Typography>
                            <Box>
                                <img src='/images/arrow.png'/>
                            </Box>
                        </Box>
                        <Typography color="primary.main" sx={{fontSize:"18px" ,mt:2,width:{xs:"100%",lg:"90%"}}}> What to Know Before Buying auto Insurance</Typography>
                        <Typography className='text-muted' sx={{fontSize:"16px",width:{xs:"100%",lg:"80%"} }}>Lörem ipsum kror kaligt väjagen.</Typography>
                    </Box>
                </Paper>
                <Paper  data-aos="zoom-in-up" className="d-flex " sx={{height:{xs:"100%",lg:"47%"},mt:{xs:2,lg:0}}}>
                    <Box sx={{width:{xs:"50%",lg:"40%"},objectFit:"cover",overflow:"hidden",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}}>    
                        <img style={{width:"100%",height:"100%",objectFit:"cover",scale:{xs:"2",lg:"1.4"}}} src="/images/bsi4.png"/>
                    </Box>
                    <Box sx={{p:2}}>
                        <Box className="d-flex" sx={{justifyContent:"space-between",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}}>
                                <Typography sx={{fontSize:"12px" }}>Automobile   .   May 22, 2022</Typography>
                            <Box>
                                <img src='/images/arrow.png'/>
                            </Box>
                        </Box>
                        <Typography color="primary.main" sx={{fontSize:"18px" ,mt:2,width:{xs:"100%",lg:"90%"}}}> Best toyota insurance 2022: quotes, reviews </Typography>
                        <Typography className='text-muted' sx={{fontSize:"16px",width:{xs:"100%",lg:"80%"} }}>Lörem ipsum kror kaligt väjagen.</Typography>
                    </Box>
                </Paper>

            </Box>
        </Box>
    </Box>
  )
}

export default BlogSection2