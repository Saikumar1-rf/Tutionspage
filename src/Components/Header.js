import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
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
         
          <li className="cursor-pointer hover:text-gray-200 px-4">Contact Us</li>
          </ul>

          {/* Dropdown Icon for smaller screens */}
          <div className=" text-white cursor-pointer" onClick={toggleDropdown}>
            <FaBars />
          </div>
        </div>

        {/* Dropdown Menu Popup for smaller screens */}
        {isOpen && (
          <div className="absolute top-14 right-0 mt-2 bg-white text-black shadow-lg w-40 rounded-lg z-50">
          <ul className="space-y-2 py-2 px-4">
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded" onClick={toggleSignUpOptions}>
              SignUp
            </li>
            {showSignUpOptions && (
              <>
                <Link to="/student">
                  <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">SignUp Student</li>
                </Link>
                <Link to="/signuptutor">
                  <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">SignUp Tutor</li>
                </Link>
              </>
            )}
            <Link to="/login">
              <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">Login</li>
            </Link>
          </ul>
        </div>
        
        )}
      </nav> 
      <div>

      </div>
    </div>
    
  );
};

export default Header;
