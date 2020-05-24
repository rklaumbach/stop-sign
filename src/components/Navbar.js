import React from 'react'
import Tab from './Tab'

const Navbar = props => {
  return (
    <div className='flex'>
      <Tab
        name='Flagged'
        selected={props.selectedTab === 'flagged' ? true : false}
        toggle={props.toggleTab}
      />
      <Tab
        name='Blocked'
        selected={props.selectedTab === 'blocked' ? true : false}
        toggle={props.toggleTab}
      />
    </div>
  )
}

export default Navbar
