import React from 'react';
import Homepage from './Homepage';
import sai from '../assets/s6.jpg'; // Replace with your actual image path

function Home() {
  return (
    <>
      <Homepage />
          <div className='relative h-[90vh] w-[99vw]'>
        {/* <img src={sai} className='h-full w-full object-cover' alt='Tutoring Service' /> */}
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

export default Home;
