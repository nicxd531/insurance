const ServicesSection1 = () => {

    // first section of the services just pure html 
    return ( 
        <section className="servicesSection1 d-flex justify-content-center align-items-center">
            <img src="/images/bulb 1.png" alt="icons" />
            <img src="/images/steering-wheel (1) 1.png" alt="icons"  />
            <img src="/images/shield-check 1.png" alt="icons"  />
            <img src="/images/computer 1.png" alt="icons"  />
            <img src="/images/doctor 1.png" alt="icons"  />
            <img src="/images/umbrella 1.png" alt="icons"  />
            <div className="text-center">
                <h5>We are making life a lot easier</h5>
                <h4>Thinking insurance coverage?<br/>Think Us.</h4>
                <h5>Our plans are beneficial to anyone looking to protect their family, assets/property and themselves from financial risk/losses.</h5>
                <button className="btn">get started</button>
            </div>
        </section>
     );
}
export default ServicesSection1;