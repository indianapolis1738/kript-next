'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaBitcoin } from 'react-icons/fa'

const FAQ = () => {
  const [open, setOpen] = useState([true, false, false])

  const toggle = (idx: number) => {
    setOpen(open.map((v, i) => (i === idx ? !v : v)))
  }

  return (
    <div className="max-w-6xl mx-auto mt-16 mb-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-[#003399] mb-6 text-center">Frequently Asked Questions</h2>
      <div className=" rounded-xl shadow p-6 border border-[#DFEFFE]">
        {/* Q1 */}
        <div>
          <button
            className="w-full text-left flex justify-between items-center py-3 focus:outline-none"
            onClick={() => toggle(0)}
          >
            <span className="font-semibold text-[#003399]">How long will it take to buy crypto?</span>
            <span className="text-[#003399]">{open[0] ? '-' : '+'}</span>
          </button>
          {open[0] && (
            <p className="text-[#003399] mb-2 ml-2">
              With Instant Buy/Sell, your order goes through in a few seconds. We&apos;re reliable like that!
            </p>
          )}
        </div>
        <hr className="my-2 border-[#DFEFFE]" />
        {/* Q2 */}
        <div>
          <button
            className="w-full text-left flex justify-between items-center py-3 focus:outline-none"
            onClick={() => toggle(1)}
          >
            <span className="font-semibold text-[#003399]">Are my funds safe?</span>
            <span className="text-[#003399]">{open[1] ? '-' : '+'}</span>
          </button>
          {open[1] && (
            <p className="text-[#003399] mb-2 ml-2">
              Yes! We use industry-leading security protocols to keep your funds safe at all times.
            </p>
          )}
        </div>
        <hr className="my-2 border-[#DFEFFE]" />
        {/* Q3 */}
        <div>
          <button
            className="w-full text-left flex justify-between items-center py-3 focus:outline-none"
            onClick={() => toggle(2)}
          >
            <span className="font-semibold text-[#003399]">Can I use my local currency to buy crypto?</span>
            <span className="text-[#003399]">{open[2] ? '-' : '+'}</span>
          </button>
          {open[2] && (
            <p className="text-[#003399] mb-2 ml-2">
              Absolutely! We support multiple local currencies for your convenience.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

const swap = () => {
  return (
    <div className="min-h-screen flex flex-col gap-12">

      {/* Why Kript Section */}
      <div className="max-w-5xl mx-auto  px-4 py-10">
        <div className="hidden md:block top-2 animate-bounce right-2 mt-5 absolute">
          <img src="/eth.svg" alt="eth" />
        </div>
        <h2 className="text-[30px] md:text-[48px] lg:text-[64px] font-bold  mb-6 text-center">
          Buy & Sell crypto <br />Instantly
        </h2>
        <p className="text-center mb-10 md:max-w-[50%] mx-auto">
          Depending on where you are, the stress of buying crypto could drive you nuts. We&apos;re here to change that.
        </p>
        <div className="relative">
          <div className="bottom-2 motion-safe:animate-bounce absolute left-2 hidden md:block">
            <img src="/yuan.png" alt="yuan" />
          </div>
          <Image
            src="/iphoneh.png"
            alt="Example Alt Text"
            width={500}
            height={300}
            className='md:flex justify-center items-center w-auto h-auto mx-auto hidden'
          />
          <div className='top-2 motion-safe:animate-spin absolute right-2'>
            <FaBitcoin size={39} />
          </div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-[#DFEFFE]">
            <img src="/speed.png" alt="Fast Transactions" className="h-12 mb-3" />
            <h3 className="font-semibold text-[#003399] mb-2">Fast Transactions</h3>
            <p className="text-[#003399] text-center text-[15px]">
              No long steps here, just straightforward ways to trade crypto.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-[#DFEFFE]">
            <img src="/security.png" alt="Safe and Secure" className="h-12 mb-3" />
            <h3 className="font-semibold text-[#003399] mb-2">Safe and Secure</h3>
            <p className="text-[#003399] text-center text-[15px]">
              You can rest easy knowing that your crypto is safe with us anytime!
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-[#DFEFFE]">
            <img src="/sell.png" alt="Tons of Options" className="h-12 mb-3" />
            <h3 className="font-semibold text-[#003399] mb-2">Tons of Options</h3>
            <p className="text-[#003399] text-center text-[15px]">
              We list new cryptocurrencies regularly so that you can buy them easily.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-[#DFEFFE]">
            <img src="/support1.png" alt="24/7 Support" className="h-12 mb-3" />
            <h3 className="font-semibold text-[#003399] mb-2">24/7 Support</h3>
            <p className="text-[#003399] text-center text-[15px]">
              Even if the sky is falling or our favorite show is on, we&apos;re always here to help.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:h-auto bg-[#003399] py-10">
        <div className="md:flex block justify-between items-start w-full md:w-[90%] px-[1.5rem] md:px-2 mx-auto lg:w-[80%] max-w-7xl">
          <div className="md:w-2/4 mb-8">
            <h1 className="md:text-[32px] text-[24px] font-bold text-white mb-4">
              Swap between 20+ assets instantly
            </h1>
            <p className="text-[16px] text-[#DFEFFE] mb-6 w-[90%]">
              With Kript, you can swap between 20+ cryptocurrencies securely and at lightning speed. Enjoy low fees, real-time rates, and a seamless experience. Connect your wallet and start swapping today!
            </p>
            <Link
              href="https://onelink.to/ff9jys"
              className="inline-block p-3 mt-2 rounded-md text-white bg-[#003399] border-2 border-[#DFEFFE] hover:bg-[#002266] transition"
            >
              Get Started
            </Link>
          </div>
          <div className="md:w-1/4 mb-8 flex flex-col items-center">
            <img src='/speed.png' alt="Speed" className="h-16 mb-2" />
            <h2 className="md:text-[20px] font-semibold text-[#DFEFFE]">Speed</h2>
            <p className="text-[#DFEFFE] text-center mt-2">
              Enjoy speed and ease with Kript&apos;s digital wallet, swap between assets without hassle.
            </p>
          </div>
          <div className="md:w-1/4 mb-8 flex flex-col items-center">
            <img src='/support1.png' alt="Support" className="h-16 mb-2" />
            <h2 className="md:text-[20px] font-semibold text-[#DFEFFE]">User Centric</h2>
            <p className="text-[#DFEFFE] text-center mt-2">
              Enjoy 24/7 human support, anytime anywhere.
            </p>
          </div>
        </div>
      </div>


      {/* FAQ Section */}
      <FAQ />
    </div>
  )
}

export default swap
