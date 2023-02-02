const HomeSection7 = () => {
    return ( 
        <section className="HomeSection7">
            <div className="d-xl-flex justify-content-xl-center align-items-xl-center">
                <div>
                    <h6>Subscribe</h6>
                    <h4>Be in the know about everything insurance</h4>
                    <h6>Subscribe to our newsletter to stay informed</h6>
                </div>
                <form className="d-flex">
                    <input
                        className="flex-grow-1"
                        placeholder="enter your email address"
                        required
                    />
                    <button className="btn">Subscribe</button>
                </form>
            </div>
            <div className="d-xl-flex justify-content-xl-end ">
                <h4>Welcome 😉, How may I help you?</h4>
                <img src="/images/Group 24 (3).png"/>
            </div>
        </section>
     );
}
 
export default HomeSection7;