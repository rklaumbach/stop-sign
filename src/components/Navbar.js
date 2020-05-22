import React from 'react'
import Tab from './Tab'

const Navbar = () => {
  return (
    <div className='flex'>
      <Tab name='Flagged' />
      <Tab name='Blocked' />
    </div>
  )
}

export default Navbar
