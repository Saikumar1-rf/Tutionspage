import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaUserAlt,
  FaEnvelope,
  FaBell,
  FaPowerOff,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Tutordashboard = () => {
  const [formData, setFormData] = useState({
    subject: "",
    mode: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMonthYear, setCurrentMonthYear] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Show modal when the form is submitted
    setIsModalOpen(true);
  };

  // Close modal function
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const date = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[date.getMonth()]; // Get current month
    const year = date.getFullYear(); // Get current year

    setCurrentMonthYear(`${month} ${year}`);
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-blue-500 flex items-center h-14 justify-between px-10 py-2">
        <div className="relative flex items-center">
          <FaSearch className="absolute left-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-full shadow-lg px-10 w-[300px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <FaUserAlt className="text-gray-950 w-4 h-4" />
          <span className="text-gray-700">Tutor Dashboard</span>
        </div>

        <div className="flex items-center ml-[100px] space-x-6">
          {/* Envelope Icon */}
          <FaEnvelope className="text-gray-950 w-4 h-4" />

          {/* Bell Icon */}
          <FaBell className="text-gray-950 w-4 h-4" />
        </div>

        <div className="flex items-center space-x-2">
          <FaPowerOff className="text-gray-950 h-4 w-4" />
          <span className="text-gray-700">Logout</span>
        </div>
      </header>

      {/* Welcome Section */}
      <main className="bg-[#C1E1F0] p-4 text-gray-800 text-center">
        <p className="text-xl mt-2 float-start">
          Welcome Tutor John Doe to the A1 Tuitions Online Platform
        </p>
        <div className="flex items-center mt-2 float-end space-x-2">
          <CgProfile className="text-gray-950 h-6 w-6" />
          <h1 className="text-gray-700">John Doe</h1>
        </div>
      </main>

      {/* Tutor-specific content */}
      <section className="p-8 font-sans">
        <h1 className="text-3xl font-bold text-blue-500 mb-4">
          Your Teaching Availability for {currentMonthYear}
        </h1>
        <p className="text-lg text-gray-700 mb-2">Hello Tutor,</p>
        <p className="text-gray-600 mb-6">
          Please provide the subjects you are available to teach and select your
          preferred mode (online/offline) for {currentMonthYear}.
        </p>

        {/* Availability Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="subject" className="block mb-2 text-gray-700">
              Subject:
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="" disabled>
                Select Subject
              </option>
              <option value="math">Mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="economics">Economics</option>
              <option value="zoology">Zoology</option>
              <option value="botany">Botany</option>
            </select>
          </div>

          <div>
            <label htmlFor="mode" className="block mb-2 text-gray-700">
              Mode of Teaching:
            </label>
            <select
              id="mode"
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">
                Select Mode
              </option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300"
          >
            Set Availability
          </button>
        </form>
      </section>

      {/* Modal (Pop-up) */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-blue-100 p-6 text-gray-800 text-center rounded shadow-lg w-96">
            <h2 className="text-2xl font-bold text-gray-800">Thank You</h2>
            <p className="text-xl mt-2">Your availability has been set.</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tutordashboard;
