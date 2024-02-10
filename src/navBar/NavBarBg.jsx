 import "../styles/NavBar.css"
 import { NavLink } from "react-router-dom";
const NavBarBg = () => {
    // web version navigation file contains only html and css and disappears based on break points 

    return ( 
        <div className="d-xl-flex navarBs justify-content-xl-around lign-items-xl-center"  style={{zIndex:1200}}>
            <NavLink to="/" className="strokes">Home</NavLink >
            <NavLink  to="/services" className="strokes">Services</NavLink >
            <NavLink  to="/aboutUs" className="strokes">About us</NavLink >
            <div  className="d-xl-flex justify-content-xl-center lign-items-xl-center">
                <NavLink  to="/" >
                    <img src="/images/company logo.png" alt="Bas Insurance Logo"/>
                </NavLink >
            </div> 
            <NavLink  to="/blog" className="strokes">Blog</NavLink >
            <NavLink  to="/contactUs" className="strokes">Contact us</NavLink >
            <NavLink  to="/Partners" className="strokes">Our Partners</NavLink >
        </div>
     );
}

export default NavBarBg;
