import {Twirl as Hamburger} from "hamburger-react"
import { useState } from "react";

const NavBarSs = () => {
    const [isOpen, setOpen] = useState(false)
    return (  
        <div className="navBarSs grid " >
            <img src="/images/company logo.png" alt="Bas Insurance Logo"/>
            <Hamburger toggled={isOpen} toggle={setOpen}/>
            <div className={`menu z-1 ${isOpen?"menuOpen" : "menuClose"}`}>
                <a href="/">Home</a>
                <a href="/services">Services</a>
                <a href="/aboutUs">About us</a>
                <a href="/blog">Blog</a>
                <a href="/contactUs">Contact us</a>
                <a href="/Partners">partners</a>
            </div>
        </div>
    );
}
 
export default NavBarSs;``