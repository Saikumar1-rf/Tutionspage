import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Saikumar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    subjectsLookingFor: '',
    modeOfTeaching: '',
    availableTimings: ''
  });
  const [selectedRole, setSelectedRole] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const togglePopup = (role) => {
    setSelectedRole(role);
    setShowPopup(!showPopup);
    if (!showPopup) {
      setFormData({
        firstName: '',
        subjectsLookingFor: '',
        modeOfTeaching: '',
        availableTimings: ''
      });
      setErrors({});
    }
  };

  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    const today = new Date();
    const options = { month: 'short', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    setCurrentDate(formattedDate);
  }, []);

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
    else if (!subjectRegex.test(formData.subjectsLookingFor)) newErrors.subjectsLookingFor = 'Subject can only contain letters, numbers, spaces, and commas';

    if (formData.modeOfTeaching === 'select' || !formData.modeOfTeaching) newErrors.modeOfTeaching = 'Mode of teaching is required';
    if (!formData.availableTimings) newErrors.availableTimings = 'Timing is required';

    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const requestData = {
      ...formData,
      role: selectedRole,
    };

    const apiUrl = selectedRole === 'student'
      ? 'https://hrms-repository-gruhabase.onrender.com/tuition-application/studentAdvertisement/create'
      : 'https://hrms-repository-gruhabase.onrender.com/tuition-application/tutorAdvertisement/create';

    try {
      const response = await axios.post(apiUrl, requestData);
      console.log('Success:', response.data);
      setFormData({ firstName: '', subjectsLookingFor: '', modeOfTeaching: '', availableTimings: '' });
      navigate('/careers', { state: { formData } });
      togglePopup('');
    } catch (error) {
      if (error.response) {
        console.error('Error Response:', error.response);
        alert(`Error: ${error.response.data.message || error.message}`);
      } else {
        console.error('Error:', error);
        alert('There was an issue submitting your request. Please try again.');
      }
    }
  };

  return (
    <>
      <div className='relative shadow-2xl ml-[20%] mr-[20%] mt-[5%] p-10 flex justify-between bg-slate-300'>
        <div className='shadow-2xl bg-slate-500 text-white p-7 w-64 text-2xl flex flex-col items-center'>
          <button onClick={() => togglePopup('student')} className='font-bold'>STUDENT</button>
        </div>

        <div className='shadow-2xl bg-slate-500 text-white text-2xl p-5 w-64 flex flex-col items-center'>
          <button onClick={() => togglePopup('tutor')} className='font-bold'>TUTOR</button>
        </div>

        {showPopup && (
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
            <div className='w-1/2 p-4 bg-white shadow-lg border-2 border-green-400'>
              <button onClick={() => togglePopup('')} className='border-2 border-black float-right px-2'>X</button>
              <h1 className='text-lg'>Title: Available tuitions for {currentDate}.</h1>
              <p>Content: {selectedRole === 'student' ? 'Dear Student' : 'Dear Tutor'}, We are excited to announce available tuitions for the month of 2024.</p>
              <br />
              <div className='grid grid-cols-2 gap-4 p-4'>
                <div>
                  <label className='block'>Name:</label>
                  <input
                    type='text'
                    id="firstName"
                    name='firstName'
                    maxLength='30'
                    placeholder='name'
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
                  <label className='block'>Mode of {selectedRole === 'student' ? 'Teaching' : 'Class'}:</label>
                  <select
                    id='modeOfTeaching'
                    name='modeOfTeaching'
                    className={`border-2 border-black w-full p-2 ${errors.modeOfTeaching ? 'border-red-500' : ''}`}
                    value={formData.modeOfTeaching}
                    onChange={handleInputChange}
                  >
                    <option value='select'>...select...</option>
                    <option value='virtual'>Virtual Mode</option>
                    <option value='in-person'>In-Person Mode</option>
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
              </div>
              <button className='bg-green-400 px-4 py-2 mt-4' onClick={handleSubmit}>Apply</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Saikumar;
