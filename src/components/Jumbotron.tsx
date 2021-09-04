import React from 'react'

export default function Jumbotron () {
  return (
    <section id="jumbotron" className="w-100 flex justify-center bg-fixed bg-center" style={{ backgroundImage: 'url("/img/background.png")' }}>
      <div className="container sm:min-h-screen text-white py-52 text-center sm:text-left cursor-default select-none">
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold py-3 px-5 border-4 inline">Lofi with Discord.</h1>
        <p className="px-7 py-10">&quot;light-weight Discord bot&quot; development team.</p>
      </div>
    </section>
  )
}
