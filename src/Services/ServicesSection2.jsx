import MiniNav from "../components/MiniNav";
import { useState,useEffect } from "react";

const ServicesSetion2 = () => {

    // use state hook to toggle the category of plans and also to change name  
    const [toggleSlider, setToggleslider] = useState(1)
    const [category, setCategory] = useState("")
    
    
    
    // data for cards 
    const card3 =[
        {
            image:"/images/visual-basic 1.png",
            title:"Simple",
            description:"Everything we've learned about e-commerce design can be applied to the auto insurance consumer--no matter where or how a policy is purchased."
        },
        {
            image:"/images/shopping-cart-add 1.png",
            title:"Affordable",
            description:"You can take advantage of your products flexibility and built-in features to make sure your insurance remains affordable.Please speak to your financial adviser. "
        },
        {
            image:"/images/time-fast 1.png",
            title:"Instant",
            description:"Insurance industry begins the move to a customer centric model We Increase the use of AI throughout the process end-to-end Use an omnichannel approach to interact with customers"
        }
    ]

    // map for card3Map through card3
    const card3Map =<div className="card3">
                        {card3.map((data,index)=>{
                            return(
                                <div data-aos="zoom-in" key={index} className="d-sm-flex d-xl-inline-flex flex-column align-items-center text-center">
                                    <div>
                                        <img src={data.image} alt="icon" />
                                    </div>
                                    <h3>{data.title}</h3>
                                    <p>{data.description}</p>
                                </div>
                            )
                        })}
                    </div>

        // use effect for name switch
        useEffect(() => {
            
            console.log(category)
            toggleSlider=== 1 && setCategory("automobile's") 
            toggleSlider=== 2 && setCategory("health/Life") 
            toggleSlider=== 3 && setCategory("device's") 
        }, [toggleSlider])
        

    return ( 
        <section className="servicesSection2">
            <div>
                <MiniNav setToggleslider={setToggleslider } toggleSlider={toggleSlider}/>
            </div>
            <div>
                <div className="text-center">
                    <h2>Insurance that keeps your {category} safe</h2>
                    <h5>Get covered in 90 seconds, no stress.</h5>
                </div>
                {/* imported map  */}
                {card3Map}
            </div>

        </section>
     );
}
 
export default ServicesSetion2;