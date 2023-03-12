import "../styles/Footer.css"

const Footer = () => {
    // main footer for the whole website contains pure html and bootstrap classname

    return ( 
        <section className="footer d-xl-flex">
            <div  className="d-sm-flex justify-content-around">
                <img src="/images/company logo.png" alt="company logo"/>
            </div>
            <div>
                <div className="d-sm-flex">
                    <div className="flex-fill">
                        <h3>Sitemap</h3>
                        <h5><a href="/">Home</a></h5>
                        <h5><a href="/services">Services</a></h5>
                        <h5><a href="/aboutUs">About Us</a></h5>
                        <h5><a href="/blog">Blog</a></h5>
                        <h5><a href="/contactUs">Contact Us</a></h5>
                        <h5><a href="/Partners">Our partners</a></h5>
                    </div>
                    <div className="flex-fill">
                        <h3>Help & Support</h3>
                        <h5><a>FAQ's</a></h5>
                        <h5><a>Terms of service</a></h5>
                        <h5><a>Privacy policy</a></h5>
                        <h5><a>Intellectual property claim</a></h5>
                        <h5><a>Cookies</a></h5>
                    </div>
                </div>
                <div>
                    <h5>Contact Address :</h5>
                    <p>Lörem ipsum eurodade rera aterar. Kontrasäskapet regt, orun salågt andromodern, att tetina. </p>
                </div>
            </div>
            <div>
                <h5>Get in touch</h5>
                <img src="/images/twitter.png" alt="icon"/>
                <img src="/images/instagram.png" alt="icon"/>
                <img src="/images/linkedin.png" alt="icon"/>
            </div>
            <div>
                <h5>Copywright, 2022.</h5>
            </div>
        </section>
     );
}
 
export default Footer;