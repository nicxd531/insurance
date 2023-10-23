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
                <Link href="/">Home</Link>
                <Link href="/services">Services</Link>
                <Link href="/aboutUs">About us</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contactUs">Contact us</Link>
                <Link href="/Partners">partners</Link>
            </div>
        </div>
    );
}
 
export default NavBarSs;