import React from 'react'

const Header = () => {
  return (
    <div className=' h-[130px] max-sm:h-[100px]  w-full relative bg-gradient-to-r from-[#ffdd00] to-[#CD5888]' >
       <div className='w-[120px] max-sm:w-[90px] max-sm:h-[90px] h-[120px] max-sm:left-3 left-20 top-10 bg-white rounded-full absolute'>
       </div>
       <div className='flex h-full w-full items-end justify-between '>
       <div className='ml-[200px] max-sm:ml-[100px] text-2xl text-white
        p-2' >
        <h1>Sandeep Behl</h1>
        </div>
        <div className='mr-5 p-2  text-white'>
        <button>Edit Profile</button>
        </div>
       </div>
    </div>
  )
}

export default Header