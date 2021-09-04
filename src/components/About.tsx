import React from 'react'

export default function About () {
  return (
    <section id="about" className="flex justify-center">
      <div className="container py-9 px-10">
        <h2 className="text-4xl border-b-4 inline-block px-2 py-1">About.</h2>
        <div className="flex flex-wrap py-10 gap-8 justify-center sm:justify-start">
          <img src="/img/profile.png" alt="Avatar" className="rounded-full h-40 w-40 border-4 border-purple-200" />
          <div className="break-all mt-5">
            <h3 className="text-3xl font-bold">Dev. PMH<span className="text-lg text-gray-500 font-normal">#7086</span></h3>
            <p className="mb-3 text-gray-500">Team Leader</p>
            <p>&ldquo;Discord bots are over-bloated.&rdquo;</p>
            <p>&ldquo;We are making light weight Discord bots that are easy to use.&rdquo;</p>
          </div>
        </div>
      </div>
    </section>
  )
}
