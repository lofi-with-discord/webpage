import React from 'react'
import PrivacyPolicy from './PrivacyPolicy'
import TermsOfService from './TermsOfService'

export default function Terms () {
  return (
    <section id="terms" className="flex justify-center bg-gray-100">
      <div className="container py-9 px-10">
        <h2 className="text-4xl border-b-4 inline-block px-2 py-1">Terms.</h2>
        <div className="py-3">
          <details className="bg-white mt-3 py-3 px-10 shadow rounded">
            <summary className="text-xl cursor-pointer">Terms of Service</summary>
            <div className="bg-yellow-100 px-5">This document is written in Korean for legal reasons. If the machine translation is wrong, follow the original Korean text first.</div>
            <TermsOfService />
          </details>
          <details className="bg-white mt-3 py-3 px-10 shadow rounded">
            <summary className="text-xl cursor-pointer">Privacy Policy</summary>
            <div className="bg-yellow-100 px-5">This document is written in Korean for legal reasons. If the machine translation is wrong, follow the original Korean text first.</div>
            <PrivacyPolicy />
          </details>
        </div>
      </div>
    </section>
  )
}
