import { IconButton,Box, Divider } from "@mui/material";
import {Twirl as Hamburger} from "hamburger-react"
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBarSs = () => {
    // web version navigation file contains only html and css and disappears based on break points 

    // use state hook for the Hamburger menu
    const [isOpen, setOpen] = useState(false)
    return (  
        <div className="navBarSs grid " >
            <img src="/images/company logo.png" alt="Bas Insurance Logo"/>
            <Hamburger toggled={isOpen} toggle={setOpen}/>
            <div className={`menu z-1 ${isOpen?"menuOpen" : "menuClose"}`}>
                <Box sx={{mt:6,flexDirection:"column",width:"100%"}} className="d-flex justify-content-center align-items-center">
                    <Link href="/" style={{color:"black",textDecoration:"none",fontWeight:"bold",width:"100%",borderRadius:"0"}}> <IconButton sx={{mx:0,width:"100%"}}> Home</IconButton></Link>
                    <Divider variant="inset" sx={{width:"100%",margin:"auto"}}/>
                    <Link href="/services" style={{color:"black",textDecoration:"none",fontWeight:"bold"}}><IconButton href="/services" sx={{mx:0}}>Services</IconButton></Link>
                    <Divider variant="inset" sx={{width:"100%",margin:"auto"}}/>
                   <Link href="/aboutUs" style={{color:"black",textDecoration:"none",fontWeight:"bold"}}> <IconButton sx={{mx:0}}>About us</IconButton></Link>
                    <Divider variant="inset" sx={{width:"100%",margin:"auto"}}/>
                    <Link href="/blog" style={{color:"black",textDecoration:"none",fontWeight:"bold"}}><IconButton sx={{mx:0}}>Blog</IconButton></Link>
                    <Divider variant="inset" sx={{width:"100%",margin:"auto"}}/>
                   <Link href="/contactUs" style={{color:"black",textDecoration:"none",fontWeight:"bold"}}> <IconButton sx={{mx:0}}>Contact us</IconButton></Link>
                    <Divider variant="inset" sx={{width:"100%",margin:"auto"}}/>
                   <Link href="/Partners" style={{color:"black",textDecoration:"none",fontWeight:"bold"}}> <IconButton sx={{mx:0}}>partners</IconButton></Link>
                    <Divider variant="inset" sx={{width:"100%",margin:"auto"}}/>

                </Box>
            </div>
        </div>
    );
}
 
export default NavBarSs;