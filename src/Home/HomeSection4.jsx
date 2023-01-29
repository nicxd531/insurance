const HomeSection4 = () => {
    const data = [
        {
            "image":"/images/Group 24 (1).png",
            "title":"Automobile"

        },
        {
            "image":"/images/Group 577 (2).png",
            "title":"Health/Life"

        },
        {
            "image":"/images/Group 578.png",
            "title":"Device"

        }
    ]
    const cards = data.map((data ,index)=>{
        return(
            <div key={index} className="d-flex flex-column align-items-center">
                <hr/>
                <img src={data.image} alt="card icon"/>
                <h3>{data.title}</h3>
            </div>
        )
    })
    return ( 
        <div className="HomeSection4 d-xl-flex flex-xl-row">
            <div className="d-xl-flex flex-xl-row">
                <div className="d-flex flex-sm-row flex-xl-column">
                   {cards}
                </div>
                <div>
                    <img src="/images/Rectangle 10.png" alt="car image"/>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center">
                <h5>Services</h5>
                <h3>Services we provide for you</h3>
                <p>Lörem ipsum jövis dutyskap spekros. Er heterorad. Prende tögingen lyvis eller fäkosam dotäss julgranssyndrom för att tirar astrolig. Bonus malus reabåbelt. Nengar okugen girad: nys, utan kakron kulyrade fide etnolog.Exobel prede oaktat 
                    Bipona bemägisk eura att närtad. Poskap gåtåg som båd innan operafiering. Diras heterojågen delyligt ultrajöv vivagt tvodd. Megaprement antigisk multidasade dogäning makrovis, i oren. Latäplaliga mide, rilaheten sperad homol plaheten, att begen vittneslitteratur nopände. Backflyt laliga. 
                </p>
                <div className="d-flex align-items-start">
                    <button className="btn">View details</button>
                </div>
            </div>

        </div>
     );
}
 
export default HomeSection4;