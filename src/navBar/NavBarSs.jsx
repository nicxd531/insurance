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
                <Box sx={{mt:6,flexDirection:"column",width:"100%"}} className="d-flex">
                    <IconButton sx={{mx:0,width:"100%"}}> <Link href="/" style={{color:"black",textDecoration:"none",fontWeight:"bold"}}>Home</Link></IconButton>
                    <Divider variant="inset" sx={{width:"100%",margin:"auto"}}/>
                    <IconButton sx={{mx:0}}><Link href="/services" style={{color:"black",textDecoration:"none",fontWeight:"bold"}}>Services</Link></IconButton>
                    <Divider variant="inset" sx={{width:"100%",margin:"auto"}}/>
                    <IconButton sx={{mx:0}}><Link href="/aboutUs" style={{color:"black",textDecoration:"none",fontWeight:"bold"}}>About us</Link></IconButton>
                    <Divider variant="inset" sx={{width:"100%",margin:"auto"}}/>
                    <IconButton sx={{mx:0}}><Link href="/blog" style={{color:"black",textDecoration:"none",fontWeight:"bold"}}>Blog</Link></IconButton>
                    <Divider variant="inset" sx={{width:"100%",margin:"auto"}}/>
                    <IconButton sx={{mx:0}}><Link href="/contactUs" style={{color:"black",textDecoration:"none",fontWeight:"bold"}}>Contact us</Link></IconButton>
                    <Divider variant="inset" sx={{width:"100%",margin:"auto"}}/>
                    <IconButton sx={{mx:0}}><Link href="/Partners" style={{color:"black",textDecoration:"none",fontWeight:"bold"}}>partners</Link></IconButton>
                    <Divider variant="inset" sx={{width:"100%",margin:"auto"}}/>

                </Box>
            </div>
        </div>
    );
}
 
export default NavBarSs;