import { useState, useEffect } from "react"

const HomeSection4 = () => {
    // the fourth file that makes up the main homepage

    // use state hook for the image slider
    const [currentSlide, setcurrentSlide] = useState(0)

    // the main data object for the image directory and title
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

    const autoScroll= true;
    let slideInterval;
    let intervalTime= 5000;
    const nextSlide=()=>{
        setcurrentSlide(currentSlide === 2? 0 : currentSlide +1)
    }
    
    function auto () {
        slideInterval=setInterval(nextSlide, intervalTime)
    }

    // useeffect hook for reset on refresh 
    useEffect(()=>{
        setcurrentSlide(0)
    },[])

    // use effect hook to call the auto funtion and also clear interval function to clear errors
    useEffect(()=>{
       if (autoScroll) {
        auto()
       }
       return() => {clearInterval(slideInterval)}
    },[currentSlide])

    // map for the card imported into the return to keep the code less
    const cards = data.map((data ,index)=>{
        return(
            <div data-aos="zoom-in" onMouseOver={()=>setcurrentSlide(index)} key={index} className="d-flex flex-column align-items-center">
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
                    {/* imported maps card */}
                   {cards}
                </div>
                <div>
                    <img className={`${currentSlide==0?"imageSwapIn":"imageSwapOut"}`} src="/images/Rectangle 10.png" alt="car image"/>
                    <img className={`${currentSlide==1?"imageSwapIn":"imageSwapOut"}`} src="/images/Rectangle 11.png" alt="car image"/>
                    <img className={`${currentSlide==2?"imageSwapIn":"imageSwapOut"}`} src="/images/Rectangle 12.png" alt="car image"/>
                </div>
            </div>
            <div className="d-flex flex-column align-items-xl-start">
                <h5>Services</h5>
                <h3>Services we provide for you</h3>
                <p>Insurance is a contract, which is called a policy, in which an individual or organisation receives financial protection and reimbursement of damages from the insurer or the insurance company. At a very basic level, it is some form of protection from any possible financial losses. The basic principle of insurance is that an entity will choose to spend small periodic amounts of money against a possibility of a huge unexpected loss. Basically, all the policyholder pool their risks together. Any loss that they suffer will be paid out of their premium.
                </p>
                <div className="d-flex align-items-start">
                    <button className="btn">View details</button>
                </div>
            </div>

        </div>
     );
}
 
export default HomeSection4;