import { useState } from "react"
import { TfiAngleLeft,TfiAngleRight } from 'react-icons/tfi';


const ServicesSection4 = () => {
    const [scale, setScale] = useState(1);
      


    // data for the card
    const data = [
        {
            title:"How much is auto insurance?",
            description:"The cost of your auto insurance policy will depend on a number of factors, such as your age, driving record, and the type of car you drive.In general, most drivers will pay an annual premium of aro"
        },
        {
            title:"What type of auto insurance do I need?",
            description:"It depends on the type of car you have and the state you live in, as minimum requirements for car insurance vary by state. Generally, most states require you to have liability coverage at a minimum."
        },
        {
            title:"What type of auto insurance do I need?",
            description:"You may also consider other types of coverage, such as comprehensive and collision coverage, to ensure that your vehicle and its contents are protected in the event of an accident."
        }
    ];

    // map for the above data
    const card6 = data.map((data,index)=>{
        return(
            <div key={index} className={`card6 text-center ${scale === index ? "scaleOut" :"scaleIn" }`}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
            </div>
        )
    });
    return ( 
        <section className="servicesSection4">
            <h3 className="text-center">Frequently asked questions</h3>
            <h5 className="text-center">Insure your car and see what it gets you</h5>
            <div className="d-xl-flex">
                <TfiAngleLeft onClick={()=>setScale( scale=== 0 ? 2 : scale -1)} className="arrowServices arr1" size={30}/>
                {card6}
                <TfiAngleRight onClick={()=>setScale( scale=== 2 ? 0 : scale +1)} className="arrowServices arr2" size={30}/>
            </div>
        </section>
     );
}
 
export default ServicesSection4;