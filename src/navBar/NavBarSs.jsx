import {Twirl as Hamburger} from "hamburger-react"
import { useState } from "react";

const NavBarSs = () => {
    const [isOpen, setOpen] = useState(false)
    return (  
        <div className="navBarSs grid">
            <img src="/images/company logo.png" alt="Bas Insurance Logo"/>
            <Hamburger toggled={isOpen} toggle={setOpen}/>
            <div className={`menu ${isOpen?"menuOpen" : "menuClose"}`}>
                <a href="#">Home</a>
                <a href="/services">Services</a>
                <a href="/About">About us</a>
                <a href="/skills">Blog</a>
                <a href="/contact">Contact us</a>
                <a href="/ourPartners">Projects</a>
            </div>
        </div>
    );
}
 
export default NavBarSs;``