import HomeComponent1 from "./HomeComponent1";

const HomeSection6 = () => {
    console.log("hello")
    console.log('1');
    const mainData=[
        {
            number:"1",
            title:"Take a picture of the incident",
            content:"Lörem ipsum jövis dutyskap spekros. Er heterorad. Prende tögingen lyvis eller fäkosam dotäss julgranssyndrom för att tirar astrolig. Bonus malus reabåbelt. Nengar okugen girad: nys, utan kakron kulyrade fide etnolog.Exobel prede oaktat Bipona bemägisk eura att närtad. Poskap gåtåg som båd innan operafiering. Diras heterojågen delyligt ultrajöv."
        },
        {
            number:"2",
            title:"Describe what happened",
            content:"Lörem ipsum jövis dutyskap spekros. Er heterorad. Prende tögingen lyvis eller fäkosam dotäss julgranssyndrom för att tirar astrolig. Bonus malus reabåbelt. Nengar okugen girad: nys, utan kakron kulyrade fide etnolog.Exobel prede oaktat Bipona bemägisk eura att närtad. Poskap gåtåg som båd innan operafiering. Diras heterojågen delyligt ultrajöv."
        },
        {
            number:"3",
            title:"Upload supporting documents",
            content:"Lörem ipsum jövis dutyskap spekros. Er heterorad. Prende tögingen lyvis eller fäkosam dotäss julgranssyndrom för att tirar astrolig. Bonus malus reabåbelt. Nengar okugen girad: nys, utan kakron kulyrade fide etnolog.Exobel prede oaktat Bipona bemägisk eura att närtad. Poskap gåtåg som båd innan operafiering. Diras heterojågen delyligt ultrajöv."
        },
        {
            number:"4",
            title:"Get instant feedback on your claim status",
            content:"Lörem ipsum jövis dutyskap spekros. Er heterorad. Prende tögingen lyvis eller fäkosam dotäss julgranssyndrom för att tirar astrolig. Bonus malus reabåbelt. Nengar okugen girad: nys, utan kakron kulyrade fide etnolog.Exobel prede oaktat Bipona bemägisk eura att närtad. Poskap gåtåg som båd innan operafiering. Diras heterojågen delyligt ultrajöv."
        }
    ]

    const section2 = <div>
    {mainData.map((data,index)=>{
        console.log("hello")
       return(
        <div key={index} className="card2 text-center ">
            <div className="d-flex align-items-center justify-content-center">{data.number}</div>
            <h5>{data.title}</h5>
            <p>{data.content}</p>
        </div>
       ) 
    })}
 </div> 
    return ( 
        <section className="HomeSection6">
            <div className="d-flex flex-column align-items-center">
                <h6>Process</h6>
                <h4>Insurance made easy</h4>
                <h5>Complete your purchase in 4 easy steps</h5>
            </div>
            <div >
                {section2}
            </div>
        </section>
     );
}
 
export default HomeSection6;