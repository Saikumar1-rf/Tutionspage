// import React from 'react';
// import Homepage from './Homepage';
// import sai from '../assets/s6.jpg'; 

// function Home() {
//   return (
//     <>
      
//           <div className='relative h-[90vh] w-[99vw]'>
//         <img src={sai} className='h-full w-full object-cover' alt='Tutoring Service' />
//         <div className='absolute top-0 left-0 h-full w-full flex items-center justify-center'>
//           <div className='ml-[-30%] mt-[-60px]'>
//             <h1 className='text-black text-4xl font-bold mb-4'>TUITIONS</h1>
//             <p className='text-white text-lg p-8 ml-[3/0%]'>
//               Tutoring services offer personalized learning assistance to students who need help <br />
//               understanding subjects or improving their academic skills. Tutors can provide <br />
//               instruction in various subjects, help with homework, prepare students for exams, or even offer skills-based <br />
//               learning such as language proficiency, coding, or test-taking strategies.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;


import React, { useEffect } from 'react';
import Homepage from './Homepage';

import sai from '../assets/s6.jpg'; // Replace with your actual image path
import { Navigate } from 'react-router-dom';

function Home({ posts = []}) {

  return (
    <>
      <div className='relative h-[90vh] w-[99vw]'>
        {/* {/ <img src={sai} className='h-full w-full object-cover' alt='Tutoring Service' /> /} */}
        <div className='absolute top-0 left-0 h-full w-full flex items-center justify-center'>
          <div className='ml-[-30%] mt-[-60px]'>
            {/* <h1 className='text-black text-4xl font-bold mb-4'>TUITIONS</h1>
            <p className='text-white text-lg p-8 ml-[3/0%]'>
              Tutoring services offer personalized learning assistance to students who need help <br />
              understanding subjects or improving their academic skills. Tutors can provide <br />
              instruction in various subjects, help with homework, prepare students for exams, or even offer skills-based <br />
              learning such as language proficiency, coding, or test-taking strategies.
            </p> */}
          </div>
        </div>

        {/* {/ Display Posts /} */}
        <div className='mt-10'>
          <h2 className='text-2xl font-bold'>Submitted Posts</h2>
          <div className='mt-4'>
            {posts.map((post) => (
              <div key={post.id} className='border p-4 mb-2 shadow-lg'>
                <h3 className='font-bold'>{post.name} - {post.subject}</h3>
                <p>Mode: {post.modeOfTeaching || post.modeOfClass}</p>
                <p>Location: {post.location}</p>
                <p>Timing: {post.timing}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
