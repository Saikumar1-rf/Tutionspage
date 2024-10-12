import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Homepage from './Homepage';

const Tutorpage = () => {
  const [tutors, setTutors] = useState([
    { name: 'Saikumar', subject: 'Maths', mode: 'Student Mode', email: 'saikumar@gmail.com', timings: '2:00 AM' },
    { name: 'Sai', subject: 'Social', mode: 'Virtual Mode', email: 'dashboard@gmail.com', timings: '3:00 AM' },
    { name: 'Reddy', subject: 'Science', mode: 'Tutor Mode', email: 'reddy@gmail.com', timings: '4:00 AM' },
    { name: 'Vijay', subject: 'Hindi', mode: 'Student', email: 'saikumar@gmail.com', timings: '2:00 AM' },
    { name: 'Saikumar', subject: 'Maths', mode: 'Saikumar ka Salaar', email: 'saikumar@gmail.com', timings: '2:00 AM' },
  ]);

  const [students, setStudents] = useState([
    { name: 'Lakshman', subject: 'Maths', mode: 'Student Mode', email: 'saikumar@gmail.com', timings: '2:00 AM' },
    { name: 'Saikiran', subject: 'Social', mode: 'Virtual Mode', email: 'dashboard@gmail.com', timings: '3:00 AM' },
    { name: 'Roshini', subject: 'Science', mode: 'Tutor Mode', email: 'reddy@gmail.com', timings: '1:00 PM' },
    { name: 'Naveen', subject: 'Botany', mode: 'Virtual Mode', email: 'saikumar@gmail.com', timings: '12:00 AM' },
    { name: 'Aravind', subject: 'Maths', mode: 'Student Mode', email: 'saikumar@gmail.com', timings: '5:00 PM' },
  ]);

  const [tutorSearch, setTutorSearch] = useState('');
  const [studentSearch, setStudentSearch] = useState('');

  const filteredTutors = tutors.filter(tutor =>
    tutor.name.toLowerCase().includes(tutorSearch.toLowerCase()) ||
    tutor.subject.toLowerCase().includes(tutorSearch.toLowerCase())
  );

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
    student.subject.toLowerCase().includes(studentSearch.toLowerCase())
  );

  return (
    <>
    
    <div className="flex flex-col items-center mt-[10px]">
      <div className='border-1 shadow-md hover:bg-slate-500 border-black rounded-lg h-14 w-20 flex mr-[-80%] justify-center p-4 bg-blue-600 text-white'>
        <Link to='/saikumar'><button className='border-none rounded-xl'>CreatePost</button></Link>  
      </div>
      
      {/* Tutor Section */}
      <div className="w-full text-left mb-4 ml-[40%]">
        <h1 className="text-2xl font-bold">Tutor</h1>
        <div className="flex items-center mt-2 ml-[10%]">
          <input
            type="text"
            placeholder="Search Tutors"
            value={tutorSearch}
            onChange={(e) => setTutorSearch(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg w-[30%] outline-none"
          />
          <button className='bg-green-500 text-white p-2 rounded-lg ml-2'>Import</button>
          <button className='bg-blue-500 text-white p-2 rounded-lg ml-2'>Export</button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="border-collapse border-4 border-black w-full text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-black px-4 py-2">Name</th>
              <th className="border border-black px-4 py-2">Name Of Subject</th>
              <th className="border border-black px-4 py-2">Mode Of Teaching</th>
              <th className="border border-black px-4 py-2">Email Id</th>
              <th className="border border-black px-4 py-2">Timings</th>
            </tr>
          </thead>
          <tbody>
            {filteredTutors.map((tutor, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2">{tutor.name}</td>
                <td className="border border-black px-4 py-2">{tutor.subject}</td>
                <td className="border border-black px-4 py-2">{tutor.mode}</td>
                <td className="border border-black px-4 py-2">{tutor.email}</td>
                <td className="border border-black px-4 py-2">{tutor.timings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Student Section */}
      <div className="w-full text-left mb-4 ml-[40%] mt-[30px]">
        <h1 className="text-2xl font-bold">Student</h1>
        <div className="flex items-center mt-2 ml-[10%]">
          <input
            type="text"
            placeholder="Search Students"
            value={studentSearch}
            onChange={(e) => setStudentSearch(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-[30%] outline-none"
          />
          <button className='bg-green-500 text-white p-2 rounded-lg ml-2'>Import</button>
          <button className='bg-blue-500 text-white p-2 rounded-lg ml-2'>Export</button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="border-collapse border-4 border-black w-full text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-black px-4 py-2">Name</th>
              <th className="border border-black px-4 py-2">Name Of Subject</th>
              <th className="border border-black px-4 py-2">Mode Of Class</th>
              <th className="border border-black px-4 py-2">Email Id</th>
              <th className="border border-black px-4 py-2">Timings</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2">{student.name}</td>
                <td className="border border-black px-4 py-2">{student.subject}</td>
                <td className="border border-black px-4 py-2">{student.mode}</td>
                <td className="border border-black px-4 py-2">{student.email}</td>
                <td className="border border-black px-4 py-2">{student.timings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Tutorpage;
