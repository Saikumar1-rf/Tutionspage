import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login";  // Correct path
import ForgotPassword from "./Components/Forgotpassword";  // Remove src
import Student from "./Components/Student";  // Remove src
import SignUp from "./Components/SignUp";  // Correct path
import Successfull from "./Components/Successfull";  // Remove src
import React, { useState } from 'react'; 
import "./App.css";


function App() {
const [isSubmitted, setIsSubmitted] = useState(false); // Initialize state here

  return (
    <div className="App">
    
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/student" element={<Student />} />
          <Route path="/tutor" element={<SignUp setIsSubmitted={setIsSubmitted} />} />
          <Route path="/success" element={<Successfull isSubmitted={isSubmitted} />} />
        </Routes>
      
    </div>
  );
}

export default App;