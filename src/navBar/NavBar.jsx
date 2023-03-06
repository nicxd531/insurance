import NavBarBg from "./NavBarBg";
import NavBarSs from "./NavBarSs";

const NavBar = () => {
    // the main navigation bar file with imported files for  mobile and desktop version
    
    return ( 
        <section className="navBar z-1">
            <NavBarSs/>
            <NavBarBg/>
        </section>
     );
}
 
export default NavBar;
