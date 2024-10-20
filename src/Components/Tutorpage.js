import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Admin = () => {
  const [tutors, setTutors] = useState([]);
  const [students, setStudents] = useState([]);
  const [tutorSearch, setTutorSearch] = useState('');
  const [studentSearch, setStudentSearch] = useState('');

  useEffect(() => {
    // Fetch the data from the provided URL when the component mounts
    const fetchAdminDashboardData = async () => {
      try {
        const response = await axios.get('http://192.168.0.2:8080/tuition-application/admin/getAdminDashBoard');
        const { tutorsData, studentsData } = response.data;

        // Assuming the response contains both tutor and student data
        setTutors(tutorsData); // Set tutors data from API response
        setStudents(studentsData); // Set students data from API response
      } catch (error) {
        console.error('Error fetching admin dashboard data:', error);
      }
    };

    fetchAdminDashboardData();
  }, []);

  const filteredTutors = tutors.filter(tutor =>
    tutor.firstName.toLowerCase().includes(tutorSearch.toLowerCase()) ||
    tutor.subjectsLookingFor.toLowerCase().includes(tutorSearch.toLowerCase())
  );

  const filteredStudents = students.filter(student =>
    student.firstName.toLowerCase().includes(studentSearch.toLowerCase()) ||
    student.subjectsLookingFor.toLowerCase().includes(studentSearch.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center mt-48">
      <div className='border-1 shadow-md hover:bg-slate-500 border-black rounded-lg h-14 w-30 flex mr-[-80%] justify-center p-4 bg-blue-600 text-white'>
        <Link to='/admin/posts'><button className='border-none rounded-xl'>Create Post</button></Link>
      </div>

      {/* {/ Tutor Section /} */}
      <div className="w-full text-left mb-4 ml-[40%]">
        <h1 className="text-2xl font-bold">Tutors</h1>
        <div className="flex items-center mt-2 ml-[10%]">
          <input
            type="text"
            placeholder="Search Tutors"
            value={tutorSearch}
            onChange={(e) => setTutorSearch(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg w-[30%] outline-none"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="border-collapse border-4 border-black w-full text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-black px-4 py-2">Name</th>
              <th className="border border-black px-4 py-2">Subject</th>
              <th className="border border-black px-4 py-2">Mode Of Teaching</th>
              <th className="border border-black px-4 py-2">Location</th>
              <th className="border border-black px-4 py-2">Available Timings</th>
            </tr>
          </thead>
          <tbody>
            {filteredTutors.map((tutor, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2">{tutor.firstName}</td>
                <td className="border border-black px-4 py-2">{tutor.subjectsLookingFor}</td>
                <td className="border border-black px-4 py-2">{tutor.modeOfTeaching}</td>
                <td className="border border-black px-4 py-2">{tutor.location}</td>
                <td className="border border-black px-4 py-2">{tutor.availableTimings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* {/ Student Section /} */}
      <div className="w-full text-left mb-4 ml-[40%] mt-[30px]">
        <h1 className="text-2xl font-bold">Students</h1>
        <div className="flex items-center mt-2 ml-[10%]">
          <input
            type="text"
            placeholder="Search Students"
            value={studentSearch}
            onChange={(e) => setStudentSearch(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-[30%] outline-none"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="border-collapse border-4 border-black w-full text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-black px-4 py-2">Name</th>
              <th className="border border-black px-4 py-2">Subject</th>
              <th className="border border-black px-4 py-2">Mode Of Class</th>
              <th className="border border-black px-4 py-2">Location</th>
              <th className="border border-black px-4 py-2">Available Timings</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2">{student.firstName}</td>
                <td className="border border-black px-4 py-2">{student.subjectsLookingFor}</td>
                <td className="border border-black px-4 py-2">{student.modeOfTeaching}</td>
                <td className="border border-black px-4 py-2">{student.location}</td>
                <td className="border border-black px-4 py-2">{student.availableTimings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
