import React from 'react'

import Profile from './Profile'
import Header from './Header'
import Main from './Main'

const Dashboard = () => {
  return (
    <div className='flex max-sm:flex-col'>
        <div className='w-full h-full max-sm:w-screen bg-slate-200'>
        <Profile/>
        <Header/> 
           <Main/> 
        </div>
    </div>
  )
}

export default Dashboard