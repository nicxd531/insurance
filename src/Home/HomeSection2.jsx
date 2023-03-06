const HomeSection2 = () => {

    // second page file in the  main homepage

    // list of data used to create the purpose cards
    const info=[
        {
            "image":"./images/Group 7.png",
            "title":"Clear Communication",
            "description":"Effective communication is essential in the insurance market. Not only does it help build strong relationships, it also ensures customer fully understand both the products and the process."
        },
        {
            "image":"./images/Group 23.png",
            "title":"Flexible Payment Plans",
            "description":"Premium flexibility means that policy owners can choose to pay what they can, when they can. This will allow them to increase the cash value of their policy more quickly if they have the resources to do so."
        },
        {
            "image":"./images/Group 577.png",
            "title":"Competitive Pricing",
            "description":"In the digital era, customers expect insurance prices to be easily available online. They will make inquiries for home and car insurance on price comparison websites and expect prices to be available immediately."
        }
    ]

    // card map with the use of the info data from above then imported into the return
    const card = info.map( (data, index)=>{
        return(
            <div key={index} className="d-flex flex-column justify-content-center rounded-top align-items-center">
                <img src={data.image} alt="icon image"/>
                <h3>{data.title}</h3>
                <h5>{data.description}</h5>
            </div>
        )
    })
    return ( 
        <section className="homeSection2 d-sm-flex flex-sm-column ">
            <div className="d-sm-flex flex-sm-column text-center">
                <h6>Purpose</h6>
                <h3>Why we are different from others</h3>
                <h4>We provide the cover against unforeseen events that enables individuals and businesses to carry out their daily activities
                </h4>
            </div>
            <div className="d-xl-flex flex-xl-row">
                {/* the imported map */}
                {card}
            </div>
        </section>
     );
}
 
export default HomeSection2;