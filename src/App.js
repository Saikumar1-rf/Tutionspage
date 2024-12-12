import { Routes, Route} from "react-router-dom";
import Login from "./Components/Login"; 
import ForgotPassword from "./Components/Forgotpassword"; 
import Student from "./Components/Student"; 
import SignUp from "./Components/SignUp"; 
import ResetPassword from "./Components/ResetPassword"; 
import Tutorpage from "./Components/Tutorpage";
import React, { useState } from 'react'; 
import "./App.css";

import Createpassword from "./Components/Createpassword";
import Studentuser from "./Components/Studentuser";
import Homepage from "./Components/Homepage";
import Tutordashboard from "./Components/Tutordashboard";
import About from "./Components/About";
import Home from "./Components/Home";
import Carrers from "./Components/Carrers";
import Payment from "./Components/Payment";




function App() {
  const [isSubmitted, setIsSubmitted] = useState(false); // State for form submission
  

  return (

    <>
    <Homepage/>
    <div className="App">
    {isSubmitted && <p>Form Submitted Successfully!</p>}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/student" element={<Student />} />
        <Route path="/signuptutor" element={<SignUp isSubmitted={setIsSubmitted} />} />
        <Route path="/admin" element={<Tutorpage />} />
        <Route path="/studentuser" element={<Studentuser />} />
        <Route path="/createpassword" element={<Createpassword />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/tutordashboard" element={<Tutordashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/carrers" element={<Carrers/>} />
        <Route path="/payment"element={<Payment/>} />
        <Route path="/resetpassword"element={<ResetPassword/>}></Route>
      </Routes>
    </div>
    </>
  );
}
export default App;
