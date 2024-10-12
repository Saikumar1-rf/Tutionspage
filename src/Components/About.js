import React from 'react';
import virtual from '../assets/onlineclass.avif';
import home from '../assets/homeclass.jpg'
import teacher from '../assets/teachermode.jpg';

const Benifits = () => {
  return (
    <>
      {/* Overall Background */}
      <div className='bg-gray-100 min-h-screen flex justify-center items-center p-8'>
        {/* Main Flex Container */}
        <div className='w-full max-w-6xl bg-white p-8 rounded-lg shadow-lg'>
          
          {/* Virtual Mode Section */}
          <div className='mb-8 flex'>
            {/* Left Side Content */}
            <div className='w-1/2 pr-8'>
              <h1 className='text-4xl font-bold text-indigo-600 mb-4'>Virtual Mode</h1>
              <p className='text-lg mb-6'>
                Our Virtual Mode enables seamless online tutoring sessions, allowing students and tutors to connect from anywhere in the world. This mode ensures that geographical boundaries do not limit access to quality education.
              </p>

              <h2 className='text-2xl font-semibold text-indigo-500 mb-2'>Features:</h2>
              <h3 className='text-xl font-semibold text-indigo-500 mb-1'>Live Video Sessions:</h3>
              <p className='text-lg mb-4'>Engage in real-time learning with high-quality video conferencing tools.</p>
              <h3 className='text-xl font-semibold text-indigo-500 mb-1'>Interactive Whiteboard:</h3>
              <p className='text-lg mb-4'>Collaborate with tutors using a digital whiteboard for effective problem-solving and explanations.</p>
              <h3 className='text-xl font-semibold text-indigo-500 mb-1'>Resource Sharing:</h3>
              <p className='text-lg mb-4'>Easily share documents, presentations, and other learning materials during sessions.</p>
              <h3 className='text-xl font-semibold text-indigo-500 mb-1'>Flexible Scheduling:</h3>
              <p className='text-lg mb-4'>Book sessions that fit your schedule, providing maximum flexibility for both students and tutors.</p>
              <h2 className='text-2xl font-semibold text-indigo-500 mb-2'>Benefits:</h2>
              <p className='text-lg mb-1'>Learn from the comfort of your home.</p>
              <p className='text-lg mb-1'>Access a wider range of tutors with diverse expertise.</p>
              <p className='text-lg mb-4'>Record sessions for future reference.</p>
            </div>

            {/* Right Side Image */}
            <div className='w-1/2 flex justify-end items-center'>
              <img src={virtual} alt='Tutoring Illustration' className='max-w-full h-auto rounded-lg shadow-md' />
            </div>
          </div>

          {/* Student Mode Section */}
          <div className='mb-8 flex'>
            {/* Left Side Content */}
            <div className='w-1/2 pr-8'>
              <h1 className='text-4xl font-bold text-indigo-600 mb-4'>Student Mode</h1>
              <p className='text-lg mb-6'>
                In Student Mode, learners can create profiles, search for tutors, and manage their learning experiences effectively. This mode is designed to enhance the student's journey toward academic success.
              </p>

              <h2 className='text-2xl font-semibold text-indigo-500 mb-2'>Features:</h2>
              <h3 className='text-xl font-semibold text-indigo-500 mb-1'>Personalized Profiles:</h3>
              <p className='text-lg mb-4'>Create a profile highlighting your learning goals, subjects of interest, and preferred learning styles.</p>
              <h3 className='text-xl font-semibold text-indigo-500 mb-1'>Search and Filter:</h3>
              <p className='text-lg mb-4'>Easily find tutors based on subjects, availability, ratings, and reviews.</p>
              <h3 className='text-xl font-semibold text-indigo-500 mb-1'>Session Management:</h3>
              <p className='text-lg mb-4'>Manage your sessions and learning materials with ease.</p>
              <h3 className='text-xl font-semibold text-indigo-500 mb-1'>Progress Tracking:</h3>
              <p className='text-lg mb-4'>Monitor your learning progress and achievements through a personalized dashboard.</p>
              <h2 className='text-2xl font-semibold text-indigo-500 mb-2'>Benefits:</h2>
              <p className='text-lg mb-1'>Find the right tutor tailored to your needs.</p>
              <p className='text-lg mb-1'>Stay organized with an intuitive interface for managing sessions.</p>
              <p className='text-lg mb-4'>Receive feedback and track improvements over time.</p>
            </div>

            {/* Right Side Image */}
            <div className='w-1/2 flex justify-end items-center'>
              <img src={home} alt='Tutoring Illustration' className='max-w-full h-auto rounded-lg shadow-md' />
            </div>
          </div>

          {/* Tutor Mode Section */}
          <div className='flex'>
            {/* Left Side Content */}
            <div className='w-1/2 pr-8'>
              <h1 className='text-4xl font-bold text-indigo-600 mb-4'>Tutor Mode</h1>
              <p className='text-lg mb-6'>
                Tutor Mode empowers educators to share their knowledge and skills while managing their tutoring business. This mode provides all the tools needed for effective teaching and student engagement.
              </p>

              <h2 className='text-2xl font-semibold text-indigo-500 mb-2'>Features:</h2>
              <h3 className='text-xl font-semibold text-indigo-500 mb-1'>Tutor Profiles:</h3>
              <p className='text-lg mb-4'>Create a profile highlighting your teaching experience, expertise, and subject interests.</p>
              <h3 className='text-xl font-semibold text-indigo-500 mb-1'>Flexible Availability:</h3>
              <p className='text-lg mb-4'>Set your own schedule and availability to match student needs.</p>
              <h3 className='text-xl font-semibold text-indigo-500 mb-1'>Session Planning:</h3>
              <p className='text-lg mb-4'>Organize your tutoring sessions effectively with tools for sharing documents and lesson materials.</p>
              <h3 className='text-xl font-semibold text-indigo-500 mb-1'>Feedback and Ratings:</h3>
              <p className='text-lg mb-4'>Build a positive reputation by receiving feedback and ratings from your students.</p>
              <h2 className='text-2xl font-semibold text-indigo-500 mb-2'>Benefits:</h2>
              <p className='text-lg mb-1'>Reach students from diverse backgrounds and locations.</p>
              <p className='text-lg mb-1'>Enjoy the freedom to set your own hours and rates.</p>
              <p className='text-lg mb-1'>Build a reputation through positive reviews and feedback.</p>
            </div>

            {/* Right Side Image */}
            <div className='w-1/2 flex justify-end items-center'>
              <img src={teacher} alt='Tutoring Illustration' className='max-w-full h-auto rounded-lg shadow-md' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benifits;
