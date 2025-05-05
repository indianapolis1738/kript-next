import React from 'react'
import { FcAlarmClock } from 'react-icons/fc'

const Recurring = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:py-16">
      <div className=" max-w-5xl w-full p-2">
        <h1 className="text-[30px] md:text-[48px] lg:text-[64px] font-bold text-black text-center mb-6">
          Automate Your Crypto Journey
        </h1>
        <p className="text-lg md:text-xl text-gray-800 text-center mb-4">
          With Kript’s Recurring Payments, you never have to miss a buying opportunity again. Buy your favorite coin automatically—on your terms.
        </p>
        <p className="text-md text-gray-700 text-center mb-8">
          Just set how often you want to make a purchase and ensure your wallet is funded. Kript handles the rest—no stress, no guesswork.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-[#F0F6FF] hover:bg-[#e6f0ff] transition rounded-xl p-6 border border-[#99B3FF] shadow-sm flex flex-col items-center text-center">
            {/* <img src="/calendar.png" alt="Automated Scheduling" className="h-14 mb-4" /> */}
            <FcAlarmClock size={39} /> <br />
            <h3 className="text-xl font-semibold text-[#003399] mb-2">Set It & Forget It</h3>
            <p className="text-sm text-gray-700">
              Choose a coin, amount, and frequency—daily, weekly, or monthly—and let Kript automate the rest.
            </p>
          </div>
          <div className="bg-[#F0F6FF] hover:bg-[#e6f0ff] transition rounded-xl p-6 border border-[#99B3FF] shadow-sm flex flex-col items-center text-center">
            <img src="/security.png" alt="Secure Transactions" className="h-14 mb-4" />
            <h3 className="text-xl font-semibold text-[#003399] mb-2">Secure & Reliable</h3>
            <p className="text-sm text-gray-700">
              Your recurring purchases are protected by Kript’s industry-grade security and reliability.
            </p>
          </div>
        </div>

        <ul className="flex flex-col justify-start items-center align-middle text-sm md:text-base text-gray-800 text-start space-y-3 mb-10">
          <li>✅ Ideal for dollar-cost averaging your investments</li>
          <li>✅ Avoid the stress of market timing and FOMO</li>
          <li>✅ Full control—pause, resume, or cancel anytime</li>
          <li>✅ Timely alerts before every scheduled buy</li>
        </ul>

        <div className="flex justify-center mb-10">
          <a
            href="https://onelink.to/ff9jys"
            className="bg-[#003399] text-white p-4 rounded-4xl border-gray-50 border">
            Start Automating on Kript
          </a>
        </div>
      </div>
    </div>
  )
}

export default Recurring
