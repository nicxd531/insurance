const ServicesSection3 = () => {

    // list of data for services ServicesSection3
    const data = [
        {
            image:"/images/services icon 1.png",
            title:"If you are in a car crash",
            description:"Auto insurance typically covers damages caused by a car accident, including those caused by a single car crash."
        },
        {
            image:"/images/services icon 2.png",
            title:"If you are stalled on the highway",
            description:"if you have added roadside assistance, also known as towing and labor coverage, to your insurance policy."
        },
        {
            image:"/images/services icon 3.png",
            title:"If your car is stolen",
            description:"When a car is stolen, auto insurance typically covers the cost of vehicle replacement, though there are limits."
        },
        {
            image:"/images/services icon 4.png",
            title:"In the case of unforeseen contingencies",
            description:"Comprehensive coverage is available to help cover the cost of damages caused by these unexpected events.v"
        },
        {
            image:"/images/services icon 5.png",
            title:"If your mirror is damaged",
            description:"Comprehensive car insurance can cover a broken side mirror in certain scenarios, while collision insurance."
        },
        {
            image:"/images/services icon 6.png",
            title:"If your are sued for liability",
            description:"Liability coverage typically covers your legal defense costs, court costs, and any damages awarded to the plaintiff."
        }
    ]

    // mapping through the above data
    const dataCard = data.map((data,index)=>{
        return(
            <div 
            data-aos="zoom-in-up"
            className="card5 text-center" key={index}>
                <div>
                <img src={data.image} alt="icon" />
                </div>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
            </div>
        )
    })
    return ( 
        <section className="servicesSection3 text-center">
            <h3>What’s covered</h3>
            <h5>Insure your car and see what it gets you</h5>
           {dataCard}
           <button data-aos="zoom-in-up" className="btn">Check our prices</button>
        </section>
     );
}
 
export default ServicesSection3;