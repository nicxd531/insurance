import { useState } from "react";
import MiniNav from "../components/MiniNav";

const HomeSection5 = () => {
    // the 5th file  for the main homepage

    // use state hook to toggle the Yearly and monthly btn 
    const [toggleBtn, setToggleBtn] = useState(false)

    // use state hook to toggle the category of plans 
    const [toggleSlider, setToggleslider] = useState(1)

    // object data for the plans
    const AutomobileMonthly =[
        {
            title:"Personal",
            cost:"₦5000",
            category:"monthly",
            listed:"os med bejoskapet till ödleplåster."
        },
        {
            title:"Professional",
            cost:"₦10,000",
            category:"monthly",
            listed:"os med bejoskapet till ödleplåster."
        },
        {
            title:"Enterprise",
            cost:"₦15,000",
            category:"monthly",
            listed:"os med bejoskapet till ödleplåster."
        }
    ]
    const AutomobileYearly =[
        {
            title:"Personal",
            cost:"₦60,000",
            category:"yearly",
            listed:"os med bejoskapet till ödleplåster."
        },
        {
            title:"Professional",
            cost:"₦120,000",
            category:"yearly",
            listed:"os med bejoskapet till ödleplåster."
        },
        {
            title:"Enterprise",
            cost:"₦180,000",
            category:"yearly",
            listed:"os med bejoskapet till ödleplåster."
        }
    ]
    const HealthLifeMonthly =[
        {
            title:"Personal",
            cost:"₦6000",
            category:"monthly",
            listed:"os med bejoskapet till ödleplåster."
        },
        {
            title:"Professional",
            cost:"₦12,000",
            category:"monthly",
            listed:"os med bejoskapet till ödleplåster."
        },
        {
            title:"Enterprise",
            cost:"₦20,000",
            category:"monthly",
            listed:"os med bejoskapet till ödleplåster."
        }
    ]
    const HealthLifeYearly =[
        {
            title:"Personal",
            cost:"₦72,000",
            category:"yearly",
            listed:"os med bejoskapet till ödleplåster."
        },
        {
            title:"Professional",
            cost:"₦144,000",
            category:"yearly",
            listed:"os med bejoskapet till ödleplåster."
        },
        {
            title:"Enterprise",
            cost:"₦240,000",
            category:"yearly",
            listed:"os med bejoskapet till ödleplåster."
        }
    ]
    const DeviceMonthly =[
        {
            title:"Personal",
            cost:"₦4000",
            category:"monthly",
            listed:"os med bejoskapet till ödleplåster."
        },
        {
            title:"Professional",
            cost:"₦8,000",
            category:"monthly",
            listed:"os med bejoskapet till ödleplåster."
        },
        {
            title:"Enterprise",
            cost:"₦12,000",
            category:"monthly",
            listed:"os med bejoskapet till ödleplåster."
        }
    ]
    const DeviceYearly =[
        {
            title:"Personal",
            cost:"₦48,000",
            category:"yearly",
            listed:"os med bejoskapet till ödleplåster."
        },
        {
            title:"Professional",
            cost:"₦96,000",
            category:"yearly",
            listed:"os med bejoskapet till ödleplåster."
        },
        {
            title:"Enterprise",
            cost:"₦144,000",
            category:"yearly",
            listed:"os med bejoskapet till ödleplåster."
        }
    ]
    
    // maps for each category data them imported directly into a variable in sectioon to the yearly and monthly planning 
    const AutomobileMonthlyMap = AutomobileMonthly.map((data,index)=>{
        return (
            <div data-aos="zoom-in" className="card4" key={index}>
                <h5>{data.title}</h5>
                <h4>{data.cost}</h4>
                <h5>monthly</h5>
                <button className="btn">Choose plan</button>
                <div className="d-flex"><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
                <div className="d-flex"><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
                <div className="d-flex"><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
                <div className="d-flex"><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
            </div>
        )

    })
    const AutomobileYearlyMap = AutomobileYearly.map((data,index)=>{
        return (
            <div data-aos="zoom-in" className="card4" key={index}>
                <h5>{data.title}</h5>
                <h4>{data.cost}</h4>
                <h5>yearly</h5>
                <button className="btn">Choose plan</button>
                <div className="d-flex" ><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
                <div className="d-flex" ><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
                <div className="d-flex" ><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
                <div className="d-flex" ><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
            </div>
        )

    })
    const HealthLifeMonthlyMap = HealthLifeMonthly.map((data,index)=>{
        return (
            <div data-aos="zoom-in" className="card4" key={index}>
                <h5>{data.title}</h5>
                <h4>{data.cost}</h4>
                <h5>monthly</h5>
                <button className="btn">Choose plan</button>
                <div className="d-flex"><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
                <div className="d-flex"><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
                <div className="d-flex"><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
                <div className="d-flex"><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
            </div>
        )

    })
    const HealthLifeYearlyMap = HealthLifeYearly.map((data,index)=>{
        return (
            <div data-aos="zoom-in" className="card4" key={index}>
                <h5>{data.title}</h5>
                <h4>{data.cost}</h4>
                <h5>yearly</h5>
                <button className="btn">Choose plan</button>
                <div className="d-flex"><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
                <div className="d-flex"><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
                <div className="d-flex"><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
                <div className="d-flex"><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
            </div>
        )

    })
    const DeviceMonthlyMap = DeviceMonthly.map((data,index)=>{
        return (
            <div data-aos="zoom-in" className="card4" key={index}>
                <h5>{data.title}</h5>
                <h4>{data.cost}</h4>
                <h5>monthly</h5>
                <button className="btn">Choose plan</button>
                <div className="d-flex"><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
                <div className="d-flex"><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
                <div className="d-flex"><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
                <div className="d-flex"><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
            </div>
        )

    })
    const DeviceYearlyMap = DeviceYearly.map((data,index)=>{
        return (
            <div data-aos="zoom-in" className="card4" key={index}>
                <h5>{data.title}</h5>
                <h4>{data.cost}</h4>
                <h5>yearly</h5>
                <button className="btn">Choose plan</button>
                <div className="d-flex"><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
                <div className="d-flex"><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
                <div className="d-flex"><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
                <div className="d-flex"><img src="/images/Group 41.png" alt="icon"/><h5>{data.listed}</h5></div>
            </div>
        )

    })

    // sectioning of plan category into yearly and monthly then imported into return 
    const monthly = <div className="d-xl-flex">
                        {toggleSlider===1 && AutomobileMonthlyMap}
                        {toggleSlider===2 && HealthLifeMonthlyMap}
                        {toggleSlider===3 && DeviceMonthlyMap}
                    </div>
    const Yearly = <div  className="d-xl-flex">
                        {toggleSlider===1 && AutomobileYearlyMap}
                        {toggleSlider===2 && HealthLifeYearlyMap}
                        {toggleSlider===3 && DeviceYearlyMap}
                    </div>

    // menu nav for the main category withe the use of the hooks 
   

    return ( 
        <section className="HomeSection5">
            <div>
                <h6>Plans</h6>
                <h3>We have plan for your future</h3>
                <h4>Lörem ipsum jona tåpov syntris ohet. Fotofiering nyrade prede. 
                Sar os med bejoskapet till ödleplåster, i prende nelöpp. </h4>
                <div>
                    <h5 onClick={()=>setToggleBtn(false)} className={toggleBtn ===false ? "toggleBtn1":"toggleBtn2" }>Monthly</h5>
                    <h5 onClick={()=>setToggleBtn(true)} className={toggleBtn === true ? "toggleBtn1":"toggleBtn2" }>Yearly</h5>
                    <div className={toggleBtn === false ? "toggleBtnMove1":"toggleBtnMove2" }></div>
                </div>
               
            </div>
            <div className="text-center">
                <div>
                    {/* imported maps */}
                    <MiniNav setToggleslider={setToggleslider } toggleSlider={toggleSlider}/>
                    {toggleBtn === true ? Yearly : monthly }
                </div>
            </div>
        </section>
     );
}
 
export default HomeSection5;