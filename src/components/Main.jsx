import React from 'react'

const Main = () => {
  return (
    <div className='flex max-sm:flex-col bg-slate-800 h-auto w-full'>
     <div className=' flex w-auto  flex-col'>
      <div className=' flex max-sm:flex-col h-[370px] '>
        <h1 className='text-white mt-10 text-xl ml-6 sm:hidden'>Stats</h1>
        <div className='flex flex-col max-sm:flex-row ml-8 max-sm:ml-[8px] w-auto mt-10 h-[300px]   justify-between '>
           <h1 className='text-white p-2 max-sm:hidden' >Stats</h1>
         <div className=' max-sm:mr-[5px] text-white max-sm:h-[90px]  bg-gradient-to-r from-[#913175] to-[#CD5888] w-[200px] max-sm:w-[120px] text-center rounded-2xl mb-8 h-[70px] '>
          <h2 className=' pt-3'>4.8/5.0</h2>
          <p>Tutor Rating</p>
         </div>
         <div className='w-[200px] max-sm:mr-[5px]  text-white text-center rounded-2xl mb-8 h-[70px] max-sm:h-[90px]  bg-gradient-to-r max-sm:w-[120px]  from-[#913175] to-[#CD5888]'>
          <h2 className='pt-3'>500+</h2>
          <p> Question answered</p>
         </div>
         <div className='w-[200px] max-sm:mr-[5px]  text-white rounded-2xl text-center  h-[70px] max-sm:w-[120px] max-sm:h-[90px]  bg-gradient-to-r  from-[#913175] to-[#CD5888]'>
          <h2 className='pt-3'>March 2023</h2>
          <p>Tutor since</p>
         </div>
        </div>
        <div className=''>
          <div className='p-4 w-auto ml-8 max-sm:ml-0 max-sm:mt-2 mt-8 h-auto '>
          <h1 className='text-white p-2'>Number Of Students</h1>
            <img className=' rounded-2xl  w-[500px] h-[280px]' src="Line-Graph.png" alt="" />
          </div>
        </div>
      </div>
      <div className='h-full p-2  max-sm:hidden'>
         <div className='flex items-center max-sm:w-[300px] text-white justify-between w-full mb-2'>
            <h1>Top Courses</h1>
             <button className='ml-32  border-2 text-center  rounded-lg w-[100px] p-1 ' >View All</button>
         </div>
         <div className='flex max-sm:overflow-hidden max-sm:w-[300px] w-[800px] justify-between'>
         <div className='w-[260px] rounded-2xl border-2  h-[154px] bg-black' >
          <div className='w-[300px] h-auto text-white mt-3 p-4'>
             <h3 className='text-[10px]'>online</h3>
             <h2  className='text-lg'>Introduction to C++</h2>
             <p className='w-[200px] text-[13px] '>Lorem ipsum, dolor sit amet consectetur  </p>
             <div className='ml-32 border-2 text-center rounded-lg w-[100px] p-1'>
                <h3 className='w-auto text-sm' >20 Learners</h3>
             </div>
          </div>
         </div>
         <div className='w-[260px] rounded-2xl border-2  h-[154px] bg-black' >
          <div className='w-[300px] h-auto text-white mt-3 p-4'>
             <h3 className='text-[10px]'>online</h3>
             <h2  className='text-lg'>Introduction to C++</h2>
             <p className='w-[200px] text-[13px] '>Lorem ipsum, dolor sit amet consectetur  </p>
             <div className='ml-32 border-2 text-center  rounded-lg w-[100px] p-1'>
                <h3 className='w-auto text-sm' >20 Learners</h3>
             </div>
          </div>
         </div>
         <div className='w-[260px]  h-[154px] rounded-2xl border-2 bg-black ' >
          <div className='w-[300px] h-auto text-white mt-3 p-4'>
             <h3 className='text-[10px]'>online</h3>
             <h2 className='text-lg'>Introduction to C++</h2>
             <p className='w-[200px] text-[13px] '>Lorem ipsum, dolor sit amet consectetur  </p>
             <div className='ml-32 border-2 text-center rounded-lg w-[100px] p-1'>
                <h3 className='w-auto text-sm' >20 Learners</h3>
             </div>
          </div>
         </div>
        
        
         </div>
      </div>
     </div>
      <div className=' w-full max-sm:mt-48' >
          <div className='w-[350px] mt-10 bg-slate-700 rounded-lg mx-auto h-[500px]  flex flex-col items-center '>
              <div className='text-white mb-5 mt-10'>
              <h2 className='mb-8'>Educator Highlights</h2>
               <h3>Worked At NeatSkills</h3>
              </div>
               <div className='text-white mb-5'>
                 <h3 className='mb-2'> Studied at <span className='text-[#CD5888]'> xxxxxxBtech </span></h3>
                 <p className='w-[280px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illo laudantium laboriosam alias, animi rerum voluptatum obcaecati temporibus dolores doloribus, vero repellendus odit iusto 
                 </p>
               </div>
               <div className='text-white mb-5'>
               <h3 className='mb-2'> Lives in <span className='text-[#CD5888]'> Kota,Rajasthan,India</span></h3>
                 <p className='w-[280px]'>
                    Unacademy Educator since 10th March,2022
                 </p>
               </div>
               <div className='text-white'>
               <h3 className='w-[280px]'> Knows Hinglish,Hindi and English</h3>
               </div>
          </div>
      </div>
            <div className='h-full p-2 sm:hidden max-sm:mt-10'>
         <div className='flex items-center max-sm:w-[370px] text-white justify-between w-full mb-2'>
            <h1>Top Courses</h1>
             <button className='ml-32  border-2 text-center  rounded-lg w-[100px] p-1 ' >View All</button>
         </div>
         <div className='flex max-sm:overflow-hidden max-sm:w-[380px] w-[800px] justify-between'>
         <div className='w-[260px] rounded-2xl border-2  h-[154px] bg-black' >
          <div className='w-[300px] h-auto text-white mt-3 p-4'>
             <h3 className='text-[10px]'>online</h3>
             <h2  className='text-lg'>Introduction to C++</h2>
             <p className='w-[200px] text-[13px] '>Lorem ipsum, dolor sit amet consectetur  </p>
             <div className='ml-32 border-2 text-center rounded-lg w-[100px] p-1'>
                <h3 className='w-auto text-sm' >20 Learners</h3>
             </div>
          </div>
         </div>
         <div className='w-[260px] rounded-2xl border-2  h-[154px] bg-black' >
          <div className='w-[300px] h-auto text-white mt-3 p-4'>
             <h3 className='text-[10px]'>online</h3>
             <h2  className='text-lg'>Introduction to C++</h2>
             <p className='w-[200px] text-[13px] '>Lorem ipsum, dolor sit amet consectetur  </p>
             <div className='ml-32 border-2 text-center  rounded-lg w-[100px] p-1'>
                <h3 className='w-auto text-sm' >20 Learners</h3>
             </div>
          </div>
         </div>
         <div className='w-[260px]  h-[154px] rounded-2xl border-2 bg-black ' >
          <div className='w-[300px] h-auto text-white mt-3 p-4'>
             <h3 className='text-[10px]'>online</h3>
             <h2 className='text-lg'>Introduction to C++</h2>
             <p className='w-[200px] text-[13px] '>Lorem ipsum, dolor sit amet consectetur  </p>
             <div className='ml-32 border-2 text-center rounded-lg w-[100px] p-1'>
                <h3 className='w-auto text-sm' >20 Learners</h3>
             </div>
          </div>
         </div>
        
        
         </div>
      </div>
    </div>
  )
}

export default Main