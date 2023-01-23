const HomeSection1 = () => {
    return ( 
        <div className="HomeSection1 d-xl-flex">
            <div>
                <h6>First stop insurance marketplace</h6>
                <h2>All-in-one platform to get your insurance.</h2>
                <h6>Lörem ipsum kror kaligt väjagen som osade. Heterogon möreligt, prepirade. Decitosunat astrohajat, kemkastrering ren ore.  </h6>
                <div className="homeBtn">
                    <button type="button" className="btn ">Get started</button>
                    <button type="button" className="btn btn-outline-success">Get a quote</button>
                </div>
                <div className="partnersHome d-flex">
                    <p>In partnership with</p>
                    <div>
                        <img src="/images/partner1.png" alt="partner1"/>
                        <img src="/images/partner2.png" alt="parthner2"/>
                    </div>
                </div>
            </div>
            <div>
            <img src="/images/Group 87.png" alt="intro image"/>
            </div>
        </div>
     );
}
 
export default HomeSection1;