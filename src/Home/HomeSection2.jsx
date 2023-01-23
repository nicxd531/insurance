const HomeSection2 = () => {
    const info=[
        {
            "image":"./images/Group 7.png",
            "title":"Clear Communication",
            "description":"Lörem ipsum sall infraska alltså homonde i teleren epil vasm, till gongen. Lal on. Mikropol jyfande och speling exoss än infran telen fygyssa. Antirar homopängar. Lasenas enstik i temakonfirmation emedan hexabel spet till polyktig i sugen i lånat. "
        },
        {
            "image":"./images/Group 23.png",
            "title":"Flexible Payment Plans",
            "description":"Lörem ipsum sall infraska alltså homonde i teleren epil vasm, till gongen. Lal on. Mikropol jyfande och speling exoss än infran telen fygyssa. Antirar homopängar. Lasenas enstik i temakonfirmation emedan hexabel spet till polyktig i sugen i lånat. "
        },
        {
            "image":"Group 577.png",
            "title":"Competitive Pricing",
            "description":"Lörem ipsum sall infraska alltså homonde i teleren epil vasm, till gongen. Lal on. Mikropol jyfande och speling exoss än infran telen fygyssa. Antirar homopängar. Lasenas enstik i temakonfirmation emedan hexabel spet till polyktig i sugen i lånat. "
        }
    ]
    const card = info.map( data=>{
        return(
            <div className="d-flex flex-column justify-content-center align-items-center">
                <img src={data.image} alt="icon image"/>
                <h3>{data.title}</h3>
                <h5>{data.description}</h5>
            </div>
        )
    })
    return ( 
        <section className="homeSection2 d-sm-flex flex-sm-column">
            <div className="d-sm-flex flex-sm-column text-center">
                <h6>Purpose</h6>
                <h3>Why we are different from others</h3>
                <h4>Lörem ipsum jona tåpov syntris ohet. Fotofiering nyrade prede. 
                    Sar os med bejoskapet till ödleplåster, i prende nelöpp. 
                </h4>
            </div>
            <div>
                {card}
            </div>
        </section>
     );
}
 
export default HomeSection2;