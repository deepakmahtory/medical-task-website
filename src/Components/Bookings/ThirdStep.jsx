import { useState } from "react";
import bs from "../design.module.css";
import { useNavigate, useParams } from "react-router-dom";
import AvailDoctor from "./AvailDoctor";

const ThirdStep = (props) => {
  const [complaints, setComplaints] = useState("");
  const [pexp, setPexp] = useState("");
  const navigate = useNavigate();
     
    let obj=useParams();
    // console.log(obj);
    let cn=obj.abc;
    // console.log(cn);

  const next = (e) => {
    e.preventDefault();
    navigate(`/availdoctor/${cn}`);
  };

  return (
    <>
      <div className={bs.booking}>
        <form className={bs.desc}>
          <h3>Book Your Slot</h3>
          <label>Chief Complaints</label>
          <textarea value={complaints} cols="30" rows="10" onChange={(e) => setComplaints(e.target.value)}></textarea>
          <label>Previous Experience(optional) </label>
          <textarea value={pexp} cols="30" rows="10" onChange={(e) => setPexp(e.target.value)}></textarea>
          <button onClick={next}>Next</button>
        </form>
      </div>
     
    </>
  );
};

export default ThirdStep;
