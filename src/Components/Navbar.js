import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import gruha from '../assets/gruhapandit.png'

const Navbar = () => {
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
      <nav className="bg-white p-3 relative w-full shadow-lg fixed">
        <div className="flex items-center justify-between">
          {/* Search bar with icon inside */}
          <div className="relative rounded-full">

           <img src={gruha} className="h-[100px] w-[100px]"></img>
          </div>
          {/* Nav links for larger screens */}
          <ul className="flex space-x-4 text-black justify-between">
            <Link to='/home'><li className="cursor-pointer hover:text-gray-200 px-4">Home</li></Link>
           <Link to='/about'><li className="cursor-pointer hover:text-gray-200 px-4">About</li></Link> 
          <Link to='/carrers'><li className="cursor-pointer hover:text-gray-200 px-4">Posts</li></Link>
          <Link to='/contact us'><li className="cursor-pointer hover:text-gray-200 px-4">Contact us</li></Link>
          </ul>
          {/* Dropdown Icon for smaller screens */}
          <div className=" text-white cursor-pointer mr-4" onClick={toggleDropdown}>
          <Link to='login' className="bg-cyan-500  shadow-lg font-bold text-xl rounded-xl py-2 px-8  h-[60px] w-[5%] mr-10">Login</Link>
          <Link className="bg-white-500 font-bold shadow-lg border  text-xl rounded-xl py-2 px-8 h-[60px] w-[10%] z-1 text-black"onClick={toggleSignUpOptions}>Register</Link>
          </div>
        </div>

        {/* Dropdown Menu Popup for smaller screens */}
        {isOpen && (
          <div className="absolute top-14 right-0 mt-4 bg-white text-black shadow-lg w-42 rounded-lg z-[-1]">
          <ul className="space-y-2 py-2 px-4 mt-1">
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

export default Navbar;
