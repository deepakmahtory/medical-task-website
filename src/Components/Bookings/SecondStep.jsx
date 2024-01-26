import { createContext, useState } from "react";
import bs from "../design.module.css";
import { useNavigate } from "react-router-dom";
import ThirdStep from "./ThirdStep";






const SecondStep = () => {
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [company, setCompany] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const next = (e) => {
    e.preventDefault();
    if (age !== "" && city !== "" && company !== "") {
      if(age<40){
        navigate(`/availdoctor/${city}`)
      }
      else{
        // navigate("/thirdstep");
        navigate(`/thirdstep/${city}`)
      }
      
    } else {
      setText("**All Fields must be Filled**");
    }
    
  };

   let data1=city;

  return (
    <>
      <div className={bs.booking}>
        <form className={bs.formData}>
          <h3>Book Your Slot</h3>
          <label>Age</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          <label>City</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          <label>Company</label>
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
          <p>{text}</p>
          <button onClick={next}>Next</button>
          
        </form>
      </div>
    
    </>
  );
};

export default SecondStep;
