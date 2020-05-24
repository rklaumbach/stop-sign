import React from 'react'

const Tab = props => {
  if (props.selected) {
    return (
      <div className='br--top br4 b--solid bw1 bb-0 tc w-50 dib bg-light-yellow'>
        <a
          className='link dib w-100 h-100 dim black code b mw f3 f3-ns dib mr3 v-btm'
          href='#'
          title={
            props.name === 'Blocked'
              ? 'Documents that were blocked and deleted'
              : 'Documents that were flagged for review'
          }
          style={{ outline: 'none' }}
        >
          {props.name}
        </a>
      </div>
    )
  } else {
    return (
      <div className='br--top br4 b--solid bw1 tc w-50 dib bg-white hover-bg-light-yellow'>
        <a
          className='link dib w-100 h-100 dim black code b mw f3 f3-ns dib mr3 v-btm'
          href='#'
          title={
            props.name === 'Blocked'
              ? 'Documents that were blocked and deleted'
              : 'Documents that were flagged for review'
          }
          onClick={props.toggle}
        >
          {props.name}
        </a>
      </div>
    )
  }
}

export default Tab
