import React, { Component } from 'react'
import Header from './components/Header'
import ControlPanel from './containers/ControlPanel'

class App extends Component {
  render () {
    return (
      <div className='flex flex-column auto'>
        <div className='bg-lightest-blue'>
          <Header />
        </div>
        <ControlPanel />
      </div>
    )
  }
}

export default App
