import React from 'react';


function Home({ posts = []}) {

  return (
    <>
      <div className='relative h-[90vh] w-[99vw]'>
    
        <div className='absolute top-0 left-0 h-full w-full flex items-center justify-center'>
          <div className='ml-[-30%] mt-[-60px]'>

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
