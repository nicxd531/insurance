import { IconButton,Box, Divider } from "@mui/material";
import {Twirl as Hamburger} from "hamburger-react"
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBarSs = () => {
    // web version navigation file contains only html and css and disappears based on break points 

    // use state hook for the Hamburger menu
    const [isOpen, setOpen] = useState(false)
    return (  
        <div className="navBarSs grid " >
            <img src="/images/company logo.png" alt="Bas Insurance Logo"/>
            <Hamburger toggled={isOpen} toggle={setOpen}/>
            <div className={`menu z-1 ${isOpen?"menuOpen" : "menuClose"}`}>
                <Box sx={{mt:0,flexDirection:"column",width:"100%"}} className="d-flex justify-content-center align-items-center">
                    <NavLink to="/" className="strokes" ><IconButton sx={{mx:0,width:"100%",fontSize:"14px"}}>Home</IconButton></NavLink >
                    <Divider variant="inset" sx={{width:"100%",margin:"auto"}}/>
                    <NavLink  to="/services" className="strokes"><IconButton sx={{mx:0,fontSize:"14px"}}>Services</IconButton></NavLink >
                    <Divider variant="inset" sx={{width:"100%",margin:"auto"}}/>
                    <NavLink  to="/aboutUs" className="strokes"><IconButton sx={{mx:0,fontSize:"14px"}}>About us</IconButton></NavLink >
                    <Divider variant="inset" sx={{width:"100%",margin:"auto"}}/>
                    <NavLink  to="/blog" className="strokes"><IconButton sx={{mx:0,fontSize:"14px"}}>Blog</IconButton></NavLink >
                    <Divider variant="inset" sx={{width:"100%",margin:"auto"}}/>
                    <NavLink  to="/contactUs" className="strokes"><IconButton sx={{mx:0,fontSize:"14px"}}>Contact us</IconButton></NavLink >
                    <Divider variant="inset" sx={{width:"100%",margin:"auto"}}/>
                    <NavLink  to="/Partners" className="strokes"><IconButton sx={{mx:0,fontSize:"14px"}}>Our Partners</IconButton></NavLink >
                </Box>
            </div>
        </div>
    );
}
 
export default NavBarSs;