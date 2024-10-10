import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login"; 
import ForgotPassword from "./Components/Forgotpassword"; 
import Student from "./Components/Student"; 
import SignUp from "./Components/SignUp"; 
import Successfull from "./Components/Successfull"; 
import Tutorpage from "./Components/Tutorpage";
import React, { useState } from 'react'; 
import "./App.css";
import Saikumar from "./Components/Saikumar";
import Createpassword from "./Components/Createpassword";
import Studentuser from "./Components/Studentuser";
import Homepage from "./Components/Homepage";
import Tutordashboard from "./Components/Tutordashboard";
import About from "./Components/About";
import Home from "./Components/Home";
import Carrers from "./Components/Carrers";
import Payment from "./Components/Payment";
import Header from "./Components/Header";



function App() {
  const [isSubmitted, setIsSubmitted] = useState(false); // State for form submission
  

  return (

    <>
    {/* <Homepage/> */}
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/"element={<Successfull/>}></Route> */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/student" element={<Student />} />
        <Route path="/signuptutor" element={<SignUp setIsSubmitted={setIsSubmitted} />} />
        {/* <Route path="/success" element={<Successfull isSubmitted={isSubmitted} />} /> */}
        <Route path="/admin" element={<Tutorpage />} />
        <Route path="/saikumar" element={<Saikumar/>} />
        <Route path="/studentuser" element={<Studentuser />} />
        <Route path="/createpassword" element={<Createpassword />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/tutordashboard" element={<Tutordashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/carrers" element={<Carrers/>} />
        <Route path="/payment"element={<Payment/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
