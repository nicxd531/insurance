import HomeComponent1 from "./HomeComponent1";

const HomeSection6 = () => {
    // the 6th file that makes up the main homepage
    
    // object data for process
    const mainData=[
        {
            number:"1",
            title:"Take a picture of the incident",
            content:"Taking pictures for insurance claims ensures your honesty in filing claims and, even though taking your Allstate claim photos might be a bit of a hassle, it could help you find damage you didn’t even know about. For example, if you have a dent in your car, the picture will document the dent so that you can’t file a claim for it at a future time."
        },
        {
            number:"2",
            title:"Describe what happened",
            content:"Description of the incident, including specific job site location, the sequence of events, and the results of the event. Whether or not proper PPE was being used. The root cause(s) of the incident. Associated hazards raised and resolved following the event. To write an incident report, use a narrative format. In other words, simply tell the story."
        },
        {
            number:"3",
            title:"Upload supporting documents",
            content:"Documentation is important to every insurance claim file to ensure a proper outcome. A well-documented claim not only tells a full story but also allows claim managers to make the right decisions with ease. This allows efficient time management, especially if a claim is moved to a new adjuster. Claim document should be approached with care."
        },
        {
            number:"4",
            title:"Get instant feedback on your claim status",
            content:"Once an insurance company has admitted liability and agreed to process the claim, they tend to move quickly. Some claimants receive their compensation in a few days. More commonly, the claimant will receive their compensation payment within 2 and 4 weeks. The time needed to settle an injury claim can vary significantly."
        }
    ]
    
    // map for the process data then imported into return 
    const section2 = <div>
    {mainData.map((data,index)=>{
       return(
        <div key={index} className="card2  text-center  ">
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
                {/* imported map into return  */}
                {section2}
            </div>
        </section>
     );
}
 
export default HomeSection6;