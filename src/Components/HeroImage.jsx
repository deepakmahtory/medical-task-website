import imgd from "./images/doctor.jpg"
import style from "./design.module.css"
const HeroImage=()=>{
    return(
        <>
        <div>
           
        <img src={imgd} alt="" id={style.img} />
        </div>
        
        </>
    )
}
export default HeroImage