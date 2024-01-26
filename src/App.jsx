import { BrowserRouter, Route,Routes } from "react-router-dom"
import HomePage from "./Components/HomePage"
import BookingForm from "./Components/Bookings/BookingForm"
import SecondStep from "./Components/Bookings/SecondStep"
import ThirdStep from "./Components/Bookings/ThirdStep"
import AvailDoctor from "./Components/Bookings/AvailDoctor"

const App=()=>{
  return(
    <>
    <BrowserRouter >
      <Routes>

      <Route path="/" element={<HomePage/>} />
       <Route path="/bookingpage"  element={<BookingForm/>} />
       <Route path="/secondstep" element={<SecondStep/>} />
       <Route path="/thirdstep/:abc"  element={<ThirdStep/>} />
       <Route path="/availdoctor/:xyz" element={<AvailDoctor/>} />
      </Routes>
    
    </BrowserRouter>
  

    </>
  )
}
export default App