import "../styles/NavBar.css"
const MiniNav2 = ({toggleSlider,setToggleslider}) => {
// mini nav component 2
    const menuTop= <div className="miniNav" style={{width:"100%"}}>
            <div className="d-flex justify-content-between" style={{width:"100%"}}>
                <div onClick={()=>setToggleslider(1)} className="d-xl-flex align-items-xl-center justify-content-xl-center"><img src="/images/ops2i.png" alt="icon"/></div>
                <div onClick={()=>setToggleslider(2)} className="d-xl-flex align-items-xl-center justify-content-xl-center"><img src="/images/ops3i.png" alt="icon"/></div>
            </div>
            <div>
                <div style={{borderRadius:"5px"}} className={`${toggleSlider === 1 ? "toggleSlider1" : null } ${toggleSlider === 2 ?"toggleSlider23": null} `}></div>
            </div>
        </div>

    return (
        <>{menuTop}</>
        
        );
}
 
export default MiniNav2;