import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import flagged from '../flagged'
import RecordList from '../components/RecordList'
import RecordOptions from '../components/RecordOptions'

class ControlPanel extends Component {
  constructor () {
    super()
    this.state = {
      selectedTab: 'flagged',
      records: flagged,
      sortBy: '',
      timeFrame: 'week'
    }
  }

  componentDidUpdate () {
    console.log(this.state.timeFrame)
  }

  toggleTab () {
    if (this.state.selectedTab === 'flagged') {
      this.setState({
        selectedTab: 'blocked'
      })
    } else {
      this.setState({
        selectedTab: 'flagged'
      })
    }
  }

  sortRecords (input) {
    this.setState({
      sortBy: input
    })
  }

  changeTimeFrame (input) {
    this.setState({
      timeFrame: input
    })
  }

  render () {
    return (
      <div>
        <div className='bg-lightest-blue'>
          <Navbar
            selectedTab={this.state.selectedTab}
            toggleTab={this.toggleTab.bind(this)}
          />
        </div>

        <div className='bg-light-yellow'>
          <RecordOptions
            selectedTab={this.state.selectedTab}
            sortBy={this.state.sortBy}
            timeFrame={this.state.timeFrame}
            sortRecords={this.sortRecords.bind(this)}
            changeTimeFrame={this.changeTimeFrame.bind(this)}
          />
          <RecordList
            records={this.state.records}
            sortBy={this.state.sortBy}
            timeFrame={this.state.timeFrame}
          />
        </div>
      </div>
    )
  }
}

export default ControlPanel
