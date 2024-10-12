import React, { useState, useEffect } from "react";
import {
  FaUserAlt,
  FaEnvelope,
  FaBell,
  FaPowerOff,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.jpg";

const User = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Change slide every 3 seconds (3000ms)
    pauseOnHover: false, // Keep autoplay even when hovering over the slide
  };

  const images = [s1, s2, s3, s4, s5];

  const [formData, setFormData] = useState({
    subject: "",
    mode: "",
  });
  const [errors, setErrors] = useState({});
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
    const newErrors = {};

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject tuition looking for is required";
    } else if (formData.subject.length < 2) {
      newErrors.subject = "Subject Name must be at least 2 characters";
    }

    // Check if there are any errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setIsModalOpen(true);
    }
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
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    setCurrentMonthYear(`${month} ${year}`);
  }, []);

  // Handle subject input change
  const handleSubjectChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";
    const validInputPattern = /^[a-zA-Z0-9\s,]*$/;
    if (!validInputPattern.test(value)) {
      errorMessage =
        "Special characters are not allowed except for commas to separate subjects.";
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      subject: errorMessage,
    }));

    if (!errorMessage && value.length <= 50) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-teal-400 flex items-center h-14 justify-between px-10 py-2">
        <div className="flex items-center space-x-2">
          <FaUserAlt className="text-gray-950 w-4 h-4" />
          <span className="text-gray-700">Personal</span>
        </div>

        <div className="flex items-center ml-[100px] space-x-6">
          <FaEnvelope className="text-gray-950 w-4 h-4" />
          <FaBell className="text-gray-950 w-4 h-4" />
        </div>

        <div className="flex items-center mt-2 float-end space-x-2">
          <CgProfile className="text-gray-950 h-6 w-6" />
          <h1 className="text-gray-700">Baksi Suraj</h1>
        </div>

        <div className="flex items-center space-x-2">
          <FaPowerOff className="text-gray-950 h-4 w-4" />
          <span className="text-gray-700">Logout</span>
        </div>
      </header>

      {/* Content Section */}
      <main className=" bg-[#E4B1F0] p-4 text-gray-800 text-center">
        <p className="text-xl mt-2 float-start">
          Welcome Baksi Suraj to A1 Tuitions Online Platform
        </p>
       
      </main>

      <section className="p-8 font-sans">
        <h1 className="text-3xl font-bold text-green-500 mb-4">
          Available Tutors for {currentMonthYear}
        </h1>
        <p className="text-lg text-gray-700 mb-2">Dear Students,</p>
        <p className="text-gray-600 mb-6">
          We are excited to announce the availability of tutors for the month of{" "}
          {currentMonthYear}. Please find below the list of available subjects,
          and the mode of teaching (online/offline).
        </p>

        {/* Apply Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex">
            <div>
              <label className="text-gray-900">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter Subject your Looking for..."
                value={formData.subject}
                onChange={handleSubjectChange}
                maxLength={50}
                required
                className={`w-[500px] ml-2 p-2 outline-none border border-gray-300 rounded ${
                  errors.subject ? "border-red-500" : ""
                }`}
              />
              {errors.subject && (
                <span className="text-red-500 flex ml-14 text-sm">
                  {errors.subject}
                </span>
              )}
            </div>
            <div className="flex ml-40">
              <label htmlFor="mode" className="block mt-2 text-gray-900">
                Mode of Teaching
              </label>
              <select
                id="mode"
                name="mode"
                value={formData.mode}
                onChange={handleChange}
                required
                className="w-[500px] p-2 outline-none ml-2 border border-gray-300 rounded"
              >
                <option value="" disabled>
                  Select Mode
                </option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 flex float-end rounded hover:bg-green-600 transition duration-300"
          >
            Search
          </button>
        </form>
      </section>

      {/* Modal (Pop-up) */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-green-100 p-6 text-gray-800 text-center rounded shadow-lg w-96">
            <h2 className="text-2xl font-bold text-gray-800">
              Congratulations
            </h2>
            <p className="text-xl mt-2">You are assigned to xyz tutor.</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-green-400 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* image slider  */}
      <section
        style={{
          display: "flex", // Enable flexbox
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          height: "100vh", // Full viewport height
          backgroundColor: "#f5f5f5", // Optional: Background color for the section
          textAlign: "center", // Center the text
        }}
      >
        <div style={{ width: "50%" }}>
          {" "}
          {/* Control the width of the slider container */}
          <h2 style={{ marginBottom: "20px" }}>Advertisement Slider</h2>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`slide-${index}`}
                  style={{
                    width: "100%", // Fill the div container
                    height: "auto", // Maintain aspect ratio
                    objectFit: "cover", // Ensure the image covers the available space
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default User;
