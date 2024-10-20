import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [showSignUpOptions, setShowSignUpOptions] = useState(false);

  const toggleSignUpOptions = () => {
    setShowSignUpOptions(!showSignUpOptions);
  };
 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-blue-600 p-4 relative w-full">
        <div className="flex items-center justify-between">
          {/* Search bar with icon inside */}
          <div className="relative rounded-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 p-2 rounded-md focus:outline-none"
            />
          </div>
          {/* Nav links for larger screens */}
          <ul className="flex space-x-4 text-black justify-between">
            <Link to='/home'><li className="cursor-pointer hover:text-gray-200 px-4">Home</li></Link>
           <Link to='/about'><li className="cursor-pointer hover:text-gray-200 px-4">About</li></Link> 
          <Link to='/carrers'><li className="cursor-pointer hover:text-gray-200 px-4">Carrers</li></Link>
          <Link to='/contact us'><li className="cursor-pointer hover:text-gray-200 px-4">Contact us</li></Link>
          </ul>
          {/* Dropdown Icon for smaller screens */}
          <div className=" text-white cursor-pointer" onClick={toggleDropdown}>
          <Link to='login' className="border-4 border-blue-600 bg-blue-700 text-2xl rounded-3xl p-2 h-[60px] w-[5%] ">Login</Link>
          <Link className="border-4 border-blue-600 bg-blue-700 text-2xl rounded-3xl p-2 h-[60px] w-[10%] "onClick={toggleSignUpOptions}>Register</Link>
          </div>
        </div>

        {/* Dropdown Menu Popup for smaller screens */}
        {isOpen && (
          <div className="absolute top-14 right-0 mt-2 bg-white text-black shadow-lg w-40 rounded-lg z-50">
          <ul className="space-y-2 py-2 px-4">
            {showSignUpOptions && (
              <>
                <Link to="/student">
                  <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">Student register</li>
                </Link>
                <Link to="/signuptutor">
                  <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">Tutor register </li>
                </Link>
              </>
            )}
            
          </ul>
        </div>
        
        )}
      </nav> 
      <div>

      </div>
    </div>
    
  );
};

export default Homepage;
