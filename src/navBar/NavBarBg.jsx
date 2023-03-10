 import "../styles/NavBar.css"
const NavBarBg = () => {
    // web version navigation file contains only html and css and disappears based on break points 

    return ( 
        <div className="d-xl-flex navarBs justify-content-xl-around lign-items-xl-center" >
            <a href="/" className="strokes">Home</a>
            <a href="/services" className="strokes">Services</a>
            <a href="/aboutUs" className="strokes">About us</a>
            <div  className="d-xl-flex justify-content-xl-center lign-items-xl-center">
                <a href="/" >
                    <img src="/images/company logo.png" alt="Bas Insurance Logo"/>
                </a>
                
            </div> 
            <a href="/blog" className="strokes">Blog</a>
            <a href="/contactUs" className="strokes">Contact us</a>
            <a href="/Partners" className="strokes">Our Partners</a>
        </div>
     );
}

export default NavBarBg;
