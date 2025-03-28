import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Email validation
  const validateEmail = (input) => {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z.-]+\.(com|net|org|in|edu|gov|mil|co|us|info)$/;
    return emailPattern.test(input) && !/^\d[0-5]/.test(input);
  };

  // Phone number validation
  const validatePhoneNumber = (input) => {
    const phonePattern = /^[6-9]\d{9}$/; // Starts with 6-9 and followed by 9 digits
    return phonePattern.test(input);
  };

  // Password validation
  const validatePassword = (input) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&+#^=])[A-Za-z\d@$!%?&+#^=]{8,}$/;
    return passwordPattern.test(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;

    const trimmedEmail = emailId.trim();
    console.log('Trimmed email/phone:', trimmedEmail);

    // Validate email or phone number
    if (!validateEmail(trimmedEmail) && !validatePhoneNumber(trimmedEmail)) {
      setEmailError('Please enter a valid email or a 10-digit phone number.');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate password
    if (!validatePassword(password)) {
      setPasswordError('Password must be 8 characters with upper, lower, number, and special character.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      const requestData = {
        emailId: trimmedEmail,
        password: password,
      };

      try {
        const response = await axios.post('https://hrms-repository-gruhabase.onrender.com/tuition-application/authenticate/login', requestData);
        const data = response.data;
        console.log('Login successful:', data);

        if (data && data.jwToken) {
          // Save the token to localStorage
          localStorage.setItem('authToken', data.jwToken);
          console.log('Token saved to localStorage:', data.jwToken);
          setSuccessMessage('Login Successful');

        setEmailId('');
        setPassword('');
        }
      } catch (error) {
        console.error('Error during login:', error);

        if (error.response) {
          // Server responded with an error
          setEmailError(error.response.data?.message || 'Login failed. Please try again.');
        } else {
          // Network error or other issues
          setEmailError('An error occurred. Please check your network connection.');
        }
      } finally {
        setTimeout(() => {
          setSuccessMessage('');
        }, 2000);
      }
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    // Remove spaces and uppercase characters
    const formattedValue = value.replace(/\s+/g, '').replace(/[A-Z]/g, '');

    // Prevent starting with 0-5 for phone number input
    if (/^[0-5]/.test(formattedValue)) {
      return; // Disallow input if it starts with 0-5
    }

    setEmailId(formattedValue);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      {successMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-2xl font-bold text-blue-500">{successMessage}</p>
          </div>
        </div>
      )}

      <div className="w-full max-w-2xl h-full p-8 bg-white shadow-md rounded-lg z-10">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-500">Login To Your Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">Email ID or Phone Number</label>
            <input
              type="text"
              id="email"
              value={emailId}
              maxLength={validatePhoneNumber(emailId) ? 10 : 40}
              onChange={handleEmailChange}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${emailError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              aria-invalid={!!emailError}
              aria-describedby="email-error"
              aria-label="Email or Phone Number"
            />
            {emailError && <p id="email-error" className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-left">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`mt-1 block w-full px-3 py-2 sm:text-sm ${passwordError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pr-10`}
              aria-invalid={!!passwordError}
              aria-describedby="password-error"
              aria-label="Password"
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {passwordError && <p id="password-error" className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>
          <div className="mt-2 text-right">
            <Link to="/forgotpassword" className="text-sm text-blue-500 hover:text-blue-500">Forgot Password</Link>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 mt-5"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't Have An Account?{' '}
            <Link to="/student" className="text-blue-500 hover:text-blue-500 font-medium underline p-3">S/Register</Link>
            <Link to="/tutor" className="text-blue-500 hover:text-blue-500 font-medium underline">T/Register</Link>
            <Link to="/studentuser" className="text-blue-500 hover:text-blue-500 font-medium underline p-3">Student/tutor</Link>
            <Link to="/createpassword" className="text-blue-500 hover:text-blue-500 font-medium underline">Createpassword</Link>
            <Link to="/tutordashboard" className="text-blue-500 hover:text-blue-500 font-medium underline ml-3">Tutordashboard</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
