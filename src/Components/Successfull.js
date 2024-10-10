// import React from 'react';
// import { Navigate } from 'react-router-dom';




// const Successfull = ({isSubmitted}) => {
//   if (!isSubmitted) {
//     return <Navigate to="/tutor" />;
//   }
//   return (
//     <div className="max-w-3xl sm-640px mx-auto mt-10 p-10 bg-white border border-gray-300 rounded-lg shadow-lg">
//       <h1>Successful Register </h1> 
//       <h1>Payment has been Initiated</h1>
//     </div>
//   );
// }

// export default Successfull;

import React from 'react';
// import Homepage from './Homepage';
import sai from '../assets/s6.jpg'; 

function Successfull() {
  return (
    <>
      
          <div className='relative h-[90vh] w-[99vw]'>
        <img src={sai} className='h-full w-full object-cover' alt='Tutoring Service' />
        <div className='absolute top-0 left-0 h-full w-full flex items-center justify-center'>
          <div className='ml-[-30%] mt-[-60px]'>
            <h1 className='text-black text-4xl font-bold mb-4'>TUITIONS</h1>
            <p className='text-white text-lg p-8 ml-[3/0%]'>
              Tutoring services offer personalized learning assistance to students who need help <br />
              understanding subjects or improving their academic skills. Tutors can provide <br />
              instruction in various subjects, help with homework, prepare students for exams, or even offer skills-based <br />
              learning such as language proficiency, coding, or test-taking strategies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Successfull;