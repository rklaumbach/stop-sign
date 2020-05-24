import React, { Component } from 'react'
import 'react-dropdown/style.css'
import options from '../timeFrameOptions'
import Dropdown from 'react-dropdown'

class RecordOptions extends Component {
  handleChange (e) {
    console.log(e.value)
    this.props.changeTimeFrame(e.value)
  }

  render () {
    return (
      <div className='tc v-mid w-100 code'>
        <h3 className='dib v-mid'>
          Displaying {this.props.selectedTab} items from{' '}
        </h3>
        <Dropdown
          className='dib ml2 v-mid'
          options={options}
          onChange={this.handleChange.bind(this)}
          value={this.props.timeFrame}
          placeholder='Select an option'
        />
      </div>
    )
  }
}

export default RecordOptions
