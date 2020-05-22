import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
      <img
        className='h3 ma2 v-mid'
        src={require('./logo-transparent.png')}
        alt='logo'
      ></img>
      <h1 className='f2 code v-mid mh5'>Stop Sign for Google Drive</h1>
      <img
        className='dib v-mid dim pointer'
        src='https://img.icons8.com/cotton/64/000000/settings--v1.png'
        alt='settings'
      ></img>
    </div>
  )
}

export default Header
