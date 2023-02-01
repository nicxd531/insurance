import { useState
 } from "react";
const HomeSection5 = () => {
    const [toggleBtn, setToggleBtn] = useState(false)
    const [toggleSlider, setToggleslider] = useState(1)

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

    const AutomobileMonthlyMap = AutomobileMonthly.map((data,index)=>{
        return (
            <div className="card4" key={index}>
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
            <div className="card4" key={index}>
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
            <div className="card4" key={index}>
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
            <div className="card4" key={index}>
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
            <div className="card4" key={index}>
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
            <div className="card4" key={index}>
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
    const menuTop= <div>
                        <div className="d-flex justify-content-between ">
                            <div onClick={()=>setToggleslider(1)} className="d-xl-flex align-items-xl-center justify-content-xl-center"><img src="/images/Vector.png" alt="icon"/><h6>Automobile</h6></div>
                            <div onClick={()=>setToggleslider(2)} className="d-xl-flex align-items-xl-center justify-content-xl-center"><img src="/images/Vector (1).png" alt="icon"/><h6>Health/Life</h6></div>
                            <div onClick={()=>setToggleslider(3)} className="d-xl-flex align-items-xl-center justify-content-xl-center"><img src="/images/Vector (2).png" alt="icon"/><h6>Device</h6></div>
                        </div>
                        <div>
                            <div className={`${toggleSlider === 1 ? "toggleSlider1" : null } ${toggleSlider === 2 ?"toggleSlider2": null}  ${toggleSlider === 3 ?"toggleSlider3": null}`}></div>
                        </div>
                    </div>

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
                    {menuTop}
                    {toggleBtn === true ? Yearly : monthly }
                </div>
            </div>
        </section>
     );
}
 
export default HomeSection5;