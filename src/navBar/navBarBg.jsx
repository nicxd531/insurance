 import "../styles/NavBar.css"
const NavBarBg = () => {
    return ( 
        <div className="d-xl-flex navarBs justify-content-xl-around lign-items-xl-center" >
            <a href="/" className="strokes">Home</a>
            <a href="/services" className="strokes">Services</a>
            <a href="/aboutUs" className="strokes">About us</a>
            <div href="/" className="d-xl-flex justify-content-xl-center lign-items-xl-center">
                <img src="/images/company logo.png" alt="Bas Insurance Logo"/>
            </div> 
            <a href="/blog" className="strokes">Blog</a>
            <a href="/contactUs" className="strokes">Contact us</a>
            <a href="/Partners" className="strokes">Projects</a>
        </div>
     );
}
 
export default NavBarBg;