import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Createpassword = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');

    const bannedUsernames = new Set(['admin', 'user', 'test']); // Example banned usernames
    const profanityList = new Set(['badword1', 'badword2']); // Example profanity list

    const validateUsername = (input) => {
        const minLength = 3;
        const maxLength = 15;
        const usernamePattern = /^[A-Z][a-zA-Z0-9@_-]*$/; // Starts with uppercase, followed by alphanumeric or special characters

        if (input.length < minLength || input.length > maxLength) return false;
        if (bannedUsernames.has(input.toLowerCase())) return false;
        if (profanityList.has(input.toLowerCase())) return false;
        if (!usernamePattern.test(input)) return false;
        if (/__|--|@@/.test(input)) return false;

        return true;
    };

    const validatePassword = (input) => {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordPattern.test(input) && !/\s/.test(input);
    };

    const checkPasswordStrength = (input) => {
        if (input.length < 8) {
            return 'Weak';
        } else if (/(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}/.test(input)) {
            return 'Strong';
        }
        return 'Medium';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPasswordError('');
        setUsernameError('');
        setSuccessMessage('');
        setPasswordStrength('');

        // Validate username
        if (!validateUsername(username)) {
            setUsernameError('Enter a valid username. It must start with an uppercase letter.');
            return;
        }

        // Validate password
        if (!validatePassword(password)) {
            setPasswordError('Password must be 8 characters with upper, lower, number, and special character.');
            return;
        } else if (password !== confirmPassword) {
            setPasswordError('Passwords do not match.');
            return;
        }

        // If all validations pass, simulate a successful signup
        setSuccessMessage('Signup successful! Welcome, ' + username + '!');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    };

    const handlePasswordChange = (e) => {
        const input = e.target.value;
        setPassword(input);
        setPasswordStrength(checkPasswordStrength(input));
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prev) => !prev);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold mb-6 text-center text-blue-500">Signup</h1>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input 
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${usernameError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                        />
                        {usernameError && <p className="text-red-500 text-sm mt-1">{usernameError}</p>}
                    </div>

                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Create Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            maxLength={8}
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${passwordError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                            aria-invalid={!!passwordError}
                            aria-describedby="password-error"
                            aria-label="Create Password"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-9 text-gray-600"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        {passwordError && <p id="password-error" className="text-red-500 text-sm mt-1">{passwordError}</p>}
                        <p className="text-xs text-gray-500 mt-1">Password strength: {passwordStrength}</p>
                    </div>

                    <div className="mb-4 relative">
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirm-password"
                            maxLength={8}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-9 text-gray-600"
                            onClick={toggleConfirmPasswordVisibility}
                        >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        <p className="text-xs text-gray-500 mt-1">Please re-enter your password.</p>
                    </div>

                    <button 
                        type="submit" 
                        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Submit
                    </button>
                </form>

                {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
            </div>
        </div>
    );
};

export default Createpassword;
