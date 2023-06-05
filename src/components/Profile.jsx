import React from 'react'

const Profile = () => {
  return (
    <div className='bg-gray-700  w-full max-sm:w-auto  h-auto max-sm:h-[80px]  max-sm:rounded-none flex  items-center  max-sm:justify-between justify-evenly '>
<div className=''>
<h1 className='text-white ml-16 p-2 mr-[500px] max-sm:mr-[0] max-sm:ml-0 text-2xl'>
            Profile
        </h1>
</div>
        <div className='flex w-full h-auto items-center max-sm:hidden justify-between ' >
            <button className='flex w-[350px] rounded-xl h-[50px] items-center border-slate-400  border-2 mr-10 p-2'>
               <img className='w-[30px] bg-white h-[30px] mr-2 rounded-lg' src="search.png" alt="" />
               <h1 className='text-white'>Search</h1>
            </button>

            <div className='flex items-center justify-between w-[100px] h-[80px] mr-10'>
                <img className='w-[40px] bg-white rounded-lg h-[40px] ' src="bell.png" alt="" />
                <img className='w-[50px] bg-white h-[50px] rounded-lg' src="profile.png" alt="" />
            </div>
        </div>
        <div className='sm:hidden'>
            <img className='w-[50px] h-[50px] pr-2' src="hamburger.png "  alt="" />
        </div>
    </div>
  )
}

export default Profile