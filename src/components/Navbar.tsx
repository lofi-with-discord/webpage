import React from 'react'

export default function Navbar () {
  return (
    <nav id="navbar" className="flex justify-center fixed block w-screen z-50" style={{ backgroundColor: '#ffffffee' }}>
      <div className="container flex flex-wrap justify-center sm:justify-start">
        <a id="logo" href="#app" className="flex hover:bg-white p-4 border-purple-300 border-b-2 mx-1">
          <img src="/img/logo.png" alt="logo" width="30" className="max-h-8" />
          <h1 className="my-1 ml-4 hidden md:inline">Lofi with Discord</h1>
          <h1 className="my-1 ml-4 hidden sm:inline md:hidden">LwD</h1>
        </a>
        <a id="logo" href="#about" className="flex hover:bg-white p-4 border-b-2 mx-1">
          <h1 className="my-1 hidden md:inline">About team</h1>
          <h1 className="my-1 inline md:hidden">About</h1>
        </a>
        <a id="logo" href="#terms" className="flex hover:bg-white p-4 border-b-2 mx-1">
          <h1 className="my-1 hidden md:inline">Terms of Service</h1>
          <h1 className="my-1 inline md:hidden">Terms</h1>
        </a>
      </div>
    </nav>
  )
}
