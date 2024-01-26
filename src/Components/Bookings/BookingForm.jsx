import { useState } from "react";
import bs from "../design.module.css"
import { useNavigate } from "react-router-dom";


const BookingForm = () => {

   const[name,setName]=useState("");
   const[phoneNumber,setPhoneNumber]=useState("");
   const[text,setText]=useState("")
    let navigate=useNavigate()

   const next=(e)=>{
       e.preventDefault()
       if(name!=="" && phoneNumber!==""){
          navigate("/secondstep")
       }
       else{
          setText("**Both Fields Must be filled**")
       }
   }


    return (
        <>
       
      <div className={bs.booking}>
       
        <form className={bs.formData}>
        <h3>Book Your Slot</h3>
          <label>Name</label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
          <label>Phone Number</label>
          <input type="tel" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
          <p>{text}</p>
          <button onClick={next}>Next</button>
        </form>
      </div>
      </>
    );
  };
  
  export default BookingForm;
  