import HeroImage from "./HeroImage"
import logo from "./images/Fix Health.jpg"
import style from "./design.module.css"
import { Link, useNavigate } from "react-router-dom"
const HomePage=()=>{


   let navigate=useNavigate()
       
        let btnNavigate=()=>{
            navigate("/bookingpage")
        }


    return(
        <>
        <div className={style.main}>
            
             <img src={logo}  id={style.logo}/>
             
            <div className={style.submain}>
            <Link to="/">Home</Link>
            <Link to="/">Services</Link>
            <Link to="/">Blogs</Link>
            <Link to="/">About</Link>
            <button id={style.btn} onClick={btnNavigate}>Book Now</button>
            </div>
        </div>
        <HeroImage/>
        </>
    )
}
export default HomePage