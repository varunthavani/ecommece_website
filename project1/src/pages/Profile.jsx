import React from 'react'
import MyPage from './MyPage.jsx'

const Profile = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-grow mx-auto container p-4 md:p-6'>
        <div className='flex flex-col md:space-x-6  md:flex-row md:space-y-0 space-y-6'>
          {/* Left Section */}
          <div className=' md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6'>
            <h2 className='text-2xl font-bold mb-4  md:text-3xl'>John Doe</h2>
            <p className='text-lg text-gray-600 mb-4'>create@gmail.com</p>
            <button className='w-full py-2 px-4 rounded text-white bg-red-500 hover:bg-red-600 '>Logout</button>
          </div>
          <div className='w-full md:2/3 lg:3/4'>
            <MyPage />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
