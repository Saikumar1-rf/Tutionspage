import React, { useState } from 'react';
import Homepage from './Homepage';

const Saikumar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popup, setPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    modeOfTeaching: '',
    location: '',
    timing: ''
  });
  const [data, setData] = useState({
    name: '',
    subject: '',
    modeOfClass: '',
    location: '',
    timing: ''
  });

  const [errors, setErrors] = useState({}); // To store error messages

  // Toggle for Student popup
  const toggleStudentPopup = () => {
    setShowPopup(!showPopup);
    if (popup) setPopup(false); // close tutor popup if open
  };

  // Toggle for Tutor popup
  const toggleTutorPopup = () => {
    setPopup(!popup);
    if (showPopup) setShowPopup(false); // close Student popup if open
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: '',
    }));
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: '',
    }));
  };

  // Validate the form before submitting
  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces
    const subjectRegex = /^[A-Za-z0-9\s,]+$/; // Letters, numbers, spaces, and comma

    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = 'Name can only contain letters and spaces';
    }

    if (!formData.subject) {
      newErrors.subject = 'Subject is required';
    } else if (!subjectRegex.test(formData.subject)) {
      newErrors.subject = 'Subject can only contain letters, numbers, spaces, and special characters like ,';
    }

    if (!formData.location) {
      newErrors.location = 'Location is required';
    }

    if (!formData.modeOfTeaching) {
      newErrors.modeOfTeaching = 'Mode of teaching is required';
    }

    if (!formData.timing) {
      newErrors.timing = 'Timing is required';
    }

    return newErrors;
  };

  // Validate the form for Tutor before submitting
  const validations = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces
    const subjectRegex = /^[A-Za-z0-9\s,]+$/; // Letters, numbers, spaces, and comma

    if (!data.name) {
      newErrors.name = 'Name is required';
    } else if (!nameRegex.test(data.name)) {
      newErrors.name = 'Name can only contain letters and spaces';
    }

    if (!data.subject) {
      newErrors.subject = 'Subject is required';
    } else if (!subjectRegex.test(data.subject)) {
      newErrors.subject = 'Subject can only contain letters, numbers, spaces, and special characters like ,';
    }

    if (!data.location) {
      newErrors.location = 'Location is required';
    }

    if (!data.modeOfClass) {
      newErrors.modeOfClass = 'Mode of class is required';
    }

    if (!data.timing) {
      newErrors.timing = 'Timing is required';
    }

    return newErrors;
  };

  // Handle Apply click for Student
  const apply = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const { name, subject, modeOfTeaching, location, timing } = formData;
      alert(`Applied with details:\nName: ${name}\nSubject: ${subject}\nMode of Teaching: ${modeOfTeaching}\nLocation: ${location}\nTiming: ${timing}`);
      console.log(formData);
    }
  };

  // Handle Apply click for Tutor
  const tutorSubmit = () => {
    const validationErrors = validations();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const { name, subject, modeOfClass, location, timing } = data;
      alert(`Applied with details:\nName: ${name}\nSubject: ${subject}\nMode of Class: ${modeOfClass}\nLocation: ${location}\nTiming: ${timing}`);
      console.log(data);
    }
  };

  return (
    <>
    <Homepage/>
    <div className='relative shadow-2xl ml-[10%] mr-[20%] mt-[5%] p-10 flex justify-between bg-slate-300'>
      {/* Student Section */}
      <div className='shadow-2xl bg-slate-500 text-white p-7 w-64 text-2xl flex flex-col items-center'>
        <button onClick={toggleStudentPopup} className='font-bold'>STUDENT</button>
      </div>

      {/* Tutor Section */}
      <div className='shadow-2xl bg-slate-500 text-white text-2xl p-5 w-64 flex flex-col items-center'>
        <button onClick={toggleTutorPopup} className='font-bold'>TUTOR</button>
      </div>

      {/* Student Popup - Centered in the middle of the screen */}
      {showPopup && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='w-1/2 p-4 bg-white shadow-lg border-2 border-green-400'>
            <button onClick={toggleStudentPopup} className='border-2 border-black float-right px-2'>X</button>
            <h1 className='text-lg'>Title : Available tuitions for Oct 28.</h1>
            <p className=''>Content : Dear Student, We are excited to announce available tuitions for the month of 2024.</p>
            <br />
            <div className='grid grid-cols-2 gap-4 p-4'>
              {/* Name Input */}
              <div>
                <label className='block'>Name:</label>
                <input
                  type='text'
                  id='name'
                  placeholder='name'
                  className={`border-2 border-black w-full p-2 ${errors.name ? 'border-red-500' : ''}`}
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
              </div>

              {/* Subject Input */}
              <div>
                <label className='block'>Subject:</label>
                <input
                  type='text'
                  id='subject'
                  placeholder='subject'
                  className={`border-2 border-black w-full p-2 ${errors.subject ? 'border-red-500' : ''}`}
                  value={formData.subject}
                  onChange={handleInputChange}
                />
                {errors.subject && <p className='text-red-500 text-sm'>{errors.subject}</p>}
              </div>

              {/* Mode of Teaching Dropdown */}
              <div>
                <label className='block'>Mode of Teaching:</label>
                <select
                  id='modeOfTeaching'
                  className='border-2 border-black w-full p-2'
                  value={formData.modeOfTeaching}
                  onChange={handleInputChange}
                >
                  <option value='select'>...select...</option>
                  <option value='virtual'>Virtual Mode</option>
                  <option value='student'>Student Mode</option>
                  <option value='tutor'>Tutor Mode</option>
                </select>
                {errors.modeOfTeaching && <p className='text-red-500 text-sm'>{errors.modeOfTeaching}</p>}
              </div>

              {/* Timing Input */}
              <div>
                <label className='block'>Timing:</label>
                <input
                  type='text'
                  id='timing'
                  placeholder='timing'
                  className={`border-2 border-black w-full p-2 ${errors.timing ? 'border-red-500' : ''}`}
                  value={formData.timing}
                  onChange={handleInputChange}
                />
                {errors.timing && <p className='text-red-500 text-sm'>{errors.timing}</p>}
              </div>

              {/* Location Input */}
              <div>
                <label className='block'>Location:</label>
                <input
                  type='text'
                  id='location'
                  placeholder='location'
                  className={`border-2 border-black w-full p-2 ${errors.location ? 'border-red-500' : ''}`}
                  value={formData.location}
                  onChange={handleInputChange}
                />
                {errors.location && <p className='text-red-500 text-sm'>{errors.location}</p>}
              </div>
            </div>

            <button
              onClick={apply}
              className='px-4 py-2 bg-blue-500 text-white rounded'
            >
              Apply
            </button>
          </div>
        </div>
      )}

      {/* Tutor Popup - Centered in the middle of the screen */}
      {popup && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='w-1/2 p-4 bg-white shadow-lg border-2 border-green-400'>
            <button onClick={toggleTutorPopup} className='border-2 border-black float-right px-2'>X</button>
            <h1 className='text-lg'>Title : Tutor Registration</h1>
            <p className=''>Content : Please provide the details below.</p>
            <br />
            <div className='grid grid-cols-2 gap-4 p-4'>
              {/* Name Input */}
              <div>
                <label className='block'>Name:</label>
                <input
                  type='text'
                  id='name'
                  placeholder='name'
                  className={`border-2 border-black w-full p-2 ${errors.name ? 'border-red-500' : ''}`}
                  value={data.name}
                  onChange={handleChange}
                />
                {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
              </div>

              {/* Subject Input */}
              <div>
                <label className='block'>Subject:</label>
                <input
                  type='text'
                  id='subject'
                  placeholder='subject'
                  className={`border-2 border-black w-full p-2 ${errors.subject ? 'border-red-500' : ''}`}
                  value={data.subject}
                  onChange={handleChange}
                />
                {errors.subject && <p className='text-red-500 text-sm'>{errors.subject}</p>}
              </div>

              {/* Mode of Class Dropdown */}
              <div>
                <label className='block'>Mode of Class:</label>
                <select
                  id='modeOfClass'
                  className='border-2 border-black w-full p-2'
                  value={data.modeOfClass}
                  onChange={handleChange}
                >
                  <option value='select'>...select...</option>
                  <option value='virtual'>Virtual Mode</option>
                  <option value='student'>Student Mode</option>
                  <option value='tutor'>Tutor Mode</option>
                </select>
                {errors.modeOfClass && <p className='text-red-500 text-sm'>{errors.modeOfClass}</p>}
              </div>

              {/* Timing Input */}
              <div>
                <label className='block'>Timing:</label>
                <input
                  type='text'
                  id='timing'
                  placeholder='timing'
                  className={`border-2 border-black w-full p-2 ${errors.timing ? 'border-red-500' : ''}`}
                  value={data.timing}
                  onChange={handleChange}
                />
                {errors.timing && <p className='text-red-500 text-sm'>{errors.timing}</p>}
              </div>

              {/* Location Input */}
              <div>
                <label className='block'>Location:</label>
                <input
                  type='text'
                  id='location'
                  placeholder='location'
                  className={`border-2 border-black w-full p-2 ${errors.location ? 'border-red-500' : ''}`}
                  value={data.location}
                  onChange={handleChange}
                />
                {errors.location && <p className='text-red-500 text-sm'>{errors.location}</p>}
              </div>
            </div>

            <button
              onClick={tutorSubmit}
              className='px-4 py-2 bg-blue-500 text-white rounded'
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Saikumar
