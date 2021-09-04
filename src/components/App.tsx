import React from 'react'
import Wave from './Wave'
import About from './About'
import Terms from './Terms'
import Navbar from './Navbar'
import Contact from './Contact'
import Jumbotron from './Jumbotron'

function App () {
  return (
    <div id="app">
      <Navbar />
      <Jumbotron />
      <Wave />
      <About />
      <Terms />
      <Contact />
    </div>
  )
}

export default App
