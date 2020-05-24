import React from 'react'
import Record from './Record'

const RecordList = props => {
  return (
    <div>
      <Record
        record={{
          filename: 'File Name',
          sendDate: 'Send Date',
          owner: 'Sender'
        }}
      />
      {props.records.map((elt, index) => (
        <Record record={elt} key={index} />
      ))}
    </div>
  )
}

export default RecordList
