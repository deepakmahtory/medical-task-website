import { useEffect, useState } from "react"
import bs from "../design.module.css"
import axios from "axios"
import { useParams } from "react-router-dom"

const AvailDoctor=()=>{
    
  
    const [users,setUsers]=useState([])
     console.log(users);

    let obj=useParams();
     console.log(obj.xyz);


    useEffect(()=>{
         axios.get(`https://fake-apinew.vercel.app/`)
         .then((res)=>{
              console.log(res.data);
               let x=res.data.filter((x)=>x.City===obj.xyz)
              setUsers(x)
         })
         .catch((error)=>{
            console.log(error);
         })

    },[obj.xyz])



    return(
        <>
       <div>
            
      
        <div className={bs.booking}>
           <marquee behavior="" direction=""><h1 id={bs.area}>Doctors in Your Area</h1></marquee>
        
            {
                
                users.map((e)=>(
                    <table className={bs.table} >
                        <tr  className={bs.rows} >
                            <td>Name: </td>
                            <td>{e.name}</td>
                        </tr>
                        <tr  className={bs.rows}>
                            <td>Expertise :</td>
                            <td>{e.Expertise}</td>
                        </tr>
                        <tr  className={bs.rows}>
                            <td>City :</td>
                            <td>{e.City}</td>
                        </tr>
                        <button id={bs.booknow}>Book Now</button>
                    </table>
                ))
            }

        </div>
        </div>
        </>
    )
}
export default AvailDoctor