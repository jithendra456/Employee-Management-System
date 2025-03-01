import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2x  font-medium'>Hello <br /> <span className='text-3xl font-semibold'> Jithu 👋</span> </h1>
      <button className='bg-red-600 text-white px-5 py-2 rounded-md text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
