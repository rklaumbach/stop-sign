import React from 'react'

const Tab = props => {
  return (
    <div className='br--top br4 b--solid bw1 bb-0 tc w-50 dib bg-white hover-bg-light-yellow h-200'>
      <a
        className='link dib w-100 h-100 dim gray code b mw f3 f3-ns dib mr3 v-btm'
        href='#'
        title='Home'
      >
        {props.name}
      </a>
    </div>
  )
}

export default Tab
