import React from 'react'

export default function Contact () {
  return (
    <section id="contact" className="flex justify-center bg-gray-900">
      <div className="container py-9 px-10 text-white">
        <h2 className="text-4xl border-b-4 inline-block px-2 py-1 ">Contact.</h2>
        <ul className="mt-5">
          <li>Email: <a className="underline hover:text-blue-500" href="mailto:pmhstudio.pmh@gmail.com">pmhstudio.pmh@gmail.com</a></li>
          <li>Discord: <a className="underline hover:text-blue-500" href="https://discord.gg/WJRtvankkB">discord.gg/WJRtvankkB</a></li>
        </ul>
      </div>
    </section>
  )
}
