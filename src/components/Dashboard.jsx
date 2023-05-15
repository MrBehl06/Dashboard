import React from 'react'
import NavBar from './NavBar'
import Profile from './Profile'
import Header from './Header'
import Main from './Main'

const Dashboard = () => {
  return (
    <div className='flex max-sm:flex-col'>
        <div className='h-screen w-auto max-sm:hidden  '>
        <NavBar/>
        </div>
        <div className='w-full h-screen max-sm:w-screen'>
        <Profile/>
        <Header/> 
           <Main/> 
        </div>
    </div>
  )
}

export default Dashboard