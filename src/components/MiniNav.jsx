import "../styles/NavBar.css"
const MiniNav = ({toggleSlider,setToggleslider}) => {
// mini nav component
    const menuTop= <div className="miniNav">
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
        <>{menuTop}</>
        
        );
}
 
export default MiniNav;