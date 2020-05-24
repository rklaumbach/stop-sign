import React from 'react'

const Record = props => {
  return (
    <div className='flex code justify-around'>
      <h4>{props.record.filename}</h4>
      <h4>{props.record.sendDate}</h4>
      <h4>{props.record.owner}</h4>
    </div>
  )
}

export default Record
