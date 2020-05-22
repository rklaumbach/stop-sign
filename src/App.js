import React, { Component } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Tab from './components/Tab'

class App extends Component {
  render () {
    return (
      <div className='bg-lightest-blue'>
        <Header />
        <Navbar />
      </div>
    )
  }
}

export default App
