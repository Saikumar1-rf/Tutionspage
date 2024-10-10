import React, { useState } from 'react';
import Homepage from './Homepage';
import Home from './Home'; // Import the Home component

const Saikumar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popup, setPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    subjectsLookingFor: '',
    modeOfTeaching: '',
    location: '',
    availableTimings: ''
  });
  const [data, setData] = useState({
    firstName: '',
    subjectsLookingFor: '',
    modeOfClass: '',
    location: '',
    availableTimings: ''
  });
  const [errors, setErrors] = useState({});
  const [posts, setPosts] = useState([]); // State for storing submitted posts

  const toggleStudentPopup = () => {
    setShowPopup(!showPopup);
    if (popup) setPopup(false);
  };

  const toggleTutorPopup = () => {
    setPopup(!popup);
    if (showPopup) setShowPopup(false);
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

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const subjectRegex = /^[A-Za-z0-9\s,]+$/;

    if (!formData.firstName) newErrors.firstName = 'Name is required';
    else if (!nameRegex.test(formData.firstName)) newErrors.firstName = 'Name can only contain letters and spaces';

    if (!formData.subjectsLookingFor) newErrors.subjectsLookingFor = 'Subject is required';
    else if (!subjectRegex.test(formData.subjectsLookingFor)) newErrors.subjectsLookingFor = 'Subject can only contain letters, numbers, spaces, and special characters like ,';

    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.modeOfTeaching) newErrors.modeOfTeaching = 'Mode of teaching is required';
    if (!formData.availableTimings) newErrors.availableTimings = 'Timing is required';

    return newErrors;
  };

  const validations = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const subjectRegex = /^[A-Za-z0-9\s,]+$/;

    if (!data.firstName) newErrors.firstName = 'Name is required';
    else if (!nameRegex.test(data.firstName)) newErrors.firstName = 'Name can only contain letters and spaces';

    if (!data.subjectsLookingFor) newErrors.subjectsLookingFor = 'Subject is required';
    else if (!subjectRegex.test(data.subjectsLookingFor)) newErrors.subjectsLookingFor = 'Subject can only contain letters, numbers, spaces, and special characters like ,';

    if (!data.location) newErrors.location = 'Location is required';
    if (!data.modeOfClass) newErrors.modeOfClass = 'Mode of class is required';
    if (!data.availableTimings) newErrors.availableTimings = 'Timing is required';

    return newErrors;
  };

  const apply = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const newPost = {
        id: Date.now(), // Unique ID for each post
        ...formData
      };
      setPosts((prevPosts) => [...prevPosts, newPost]);
   
      setFormData({ firstName: '', subjectsLookingFor: '', modeOfTeaching: '', location: '', timing: '' }); // Reset form
      toggleStudentPopup();
    }
  };

  const tutorSubmit = () => {
    const validationErrors = validations();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const newTutorPost = {
        id: Date.now(), // Unique ID for each post
        ...data
      };
      setPosts((prevPosts) => [...prevPosts, newTutorPost]);
      alert(`Applied with details:\nName: ${data.firstName}\nSubject: ${data.subjectsLookingFor}\nMode of Class: ${data.modeOfClass}\nLocation: ${data.location}\nTiming: ${data.timing}`);
      console.log(data);
      setData({ firstName: '', subject: '', modeOfClass: '', location: '', timing: '' }); // Reset form
      toggleTutorPopup();
    }
  };
  

  return (
    <>
    <Homepage/>
      <div className='relative shadow-2xl ml-[10%] mr-[20%] mt-[5%] p-10 flex justify-between bg-slate-300'>
        <div className='shadow-2xl bg-slate-500 text-white p-7 w-64 text-2xl flex flex-col items-center'>
          <button onClick={toggleStudentPopup} className='font-bold'>STUDENT</button>
        </div>

        <div className='shadow-2xl bg-slate-500 text-white text-2xl p-5 w-64 flex flex-col items-center'>
          <button onClick={toggleTutorPopup} className='font-bold'>TUTOR</button>
        </div>

        {showPopup && (
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
            <div className='w-1/2 p-4 bg-white shadow-lg border-2 border-green-400'>
              <button onClick={toggleStudentPopup} className='border-2 border-black float-right px-2'>X</button>
              <h1 className='text-lg'>Title: Available tuitions for Oct 28.</h1>
              <p>Content: Dear Student, We are excited to announce available tuitions for the month of 2024.</p>
              <br />
              <div className='grid grid-cols-2 gap-4 p-4'>
                {/* {/ Name Input /} */}
                <div>
                  <label className='block'>Name:</label>
                  <input
                    type='text'
                    id="firstName"
                    // name='firstName'
                    maxLength='30'
                    placeholder='firstName' 
                    className={`border-2 border-black w-full p-2 ${errors.firstName ? 'border-red-500' : ''}`}
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  {errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName}</p>}
                </div>

                <div>
                  <label className='block'>Subject:</label>
                  <input
                    type='text'
                    id='subjectsLookingFor'
                    name='subjectsLookingFor'
                    maxLength='30'
                    placeholder='subject'
                    className={`border-2 border-black w-full p-2 ${errors.subjectsLookingFor ? 'border-red-500' : ''}`}
                    value={formData.subjectsLookingFor}
                    onChange={handleInputChange}
                  />
                  {errors.subjectsLookingFor && <p className='text-red-500 text-sm'>{errors.subjectsLookingFor}</p>}
                </div>

                <div>
                  <label className='block'>Mode Of Teaching:</label>
                  <select
                    id='modeOfTeaching'
                    name='modeOfTeaching'
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

                <div>
                  <label className='block'>Timing:</label>
                  <input
                    type='text'
                    id='availableTimings'
                    name='availableTimings'
                    placeholder='timing'
                    className={`border-2 border-black w-full p-2 ${errors.availableTimings ? 'border-red-500' : ''}`}
                    value={formData.availableTimings}
                    onChange={handleInputChange}
                  />
                  {errors.availableTimings && <p className='text-red-500 text-sm'>{errors.availableTimings}</p>}
                </div>

                <div>
                  <label className='block'>Location:</label>
                  <input
                    type='text'
                    id='location'
                    name='location'
                    placeholder='location'
                    className={`border-2 border-black w-full p-2 ${errors.location ? 'border-red-500' : ''}`}
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                  {errors.location && <p className='text-red-500 text-sm'>{errors.location}</p>}
                </div>
              </div>
              <button className='bg-green-400 px-4 py-2 mt-4' onClick={apply}>Apply</button>
            </div>
          </div>
        )}

        {popup && (
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
            <div className='w-1/2 p-4 bg-white shadow-lg border-2 border-green-400'>
              <button onClick={toggleTutorPopup} className='border-2 border-black float-right px-2'>X</button>
              <h1 className='text-lg'>Title: Available tuitions for Oct 28.</h1>
              <p>Content: Dear Tutor, We are excited to announce available tuitions for the month of 2024.</p>
              <br />
              <div className='grid grid-cols-2 gap-4 p-4'>
                <div>
                  <label className='block'>Name:</label>
                  <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    maxLength='30'
                    placeholder='name'
                    className={`border-2 border-black w-full p-2 ${errors.firstName ? 'border-red-500' : ''}`}
                    value={data.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName}</p>}
                </div>

                <div>
                  <label className='block'>Subject:</label>
                  <input
                    type='text'
                    id='subject'
                    name='subjectsLookingFor'
                    maxLength='30'
                    placeholder='subjectsLookingFor'
                    className={`border-2 border-black w-full p-2 ${errors.subject ? 'border-red-500' : ''}`}
                    value={data.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <p className='text-red-500 text-sm'>{errors.subject}</p>}
                </div>

                <div>
                  <label className='block'>Mode of Class:</label>
                  <select
                    id='modeOfClass'
                    name='modeOfClass'
                    className='border-2 border-black w-full p-2'
                    value={data.modeOfClass}
                    onChange={handleChange}
                  >
                    <option value='select'>...select...</option>
                    <option value='virtual'>Virtual Mode</option>
                    <option value='in-person'>In-Person Mode</option>
                  </select>
                  {errors.modeOfClass && <p className='text-red-500 text-sm'>{errors.modeOfClass}</p>}
                </div>

                <div>
                  <label className='block'>Timing:</label>
                  <input
                    type='text'
                    id='timing'
                    name='availableTimings'
                    placeholder='timing'
                    className={`border-2 border-black w-full p-2 ${errors.timing ? 'border-red-500' : ''}`}
                    value={data.timing}
                    onChange={handleChange}
                  />
                  {errors.timing && <p className='text-red-500 text-sm'>{errors.timing}</p>}
                </div>

                <div>
                  <label className='block'>Location:</label>
                  <input
                    type='text'
                    id='location'
                    name='location'
                    placeholder='location'
                    className={`border-2 border-black w-full p-2 ${errors.location ? 'border-red-500' : ''}`}
                    value={data.location}
                    onChange={handleChange}
                  />
                  {errors.location && <p className='text-red-500 text-sm'>{errors.location}</p>}
                </div>
              </div>
              <button className='bg-green-400 px-4 py-2 mt-4' onClick={tutorSubmit}>Apply</button>
            </div>
          </div>
        )}
      </div>

      {/* <Home posts={posts} /> */}
    </>
  );
};

export default Saikumar;
