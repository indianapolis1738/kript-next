'use client'

import { useMarket } from '@/hooks/fetchusdt'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

export default function Page() {
    const { market, loading } = useMarket();
    const [usdtAmount, setUsdtAmount] = useState<number>(1);

    if (loading) {
        return (
            <div className='flex justify-center items-center'>
                <div className="animate-pulse flex flex-col gap-4 w-full max-w-md">
                    <div className="h-8 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-6 bg-gray-300 rounded w-full"></div>
                    <div className="h-6 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-10 bg-gray-300 rounded w-full mt-4"></div>
                </div>
            </div>
        )
    }

    // if (error || !market?.ticker) {
    //     return (
    //         <div className='flex justify-center items-center'>
    //             <h1 className='text-xl text-red-500 font-semibold'>Failed to fetch market data.</h1>
    //         </div>
    //     )
    // }

    const last = market?.ticker?.last || '0';
    const lastPrice = parseFloat(last.toString());
    const nairaValue = usdtAmount * lastPrice;

    return (
        <div className=''>
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-center items-center gap-8">
                <Image
                    src='/dollar.png'
                    alt='coin'
                    width={120}
                    height={120}
                    className='bottom-2 motion-safe:animate-bounce absolute right-2 hidden lg:block'
                />
                {/* Left: Info */}
                <div className="w-full md:w-[80%] lg:w-1/2">
                    <h1 className='font-poppins font-bold break-words md:break-normal lg:break-words lg:text-start text-[35px] md:text-[48px] md:text-center lg:text-[54px] leading-[48px] md:leading-[100px] '>
                        Buy USDT  Instantly in Nigeria
                    </h1>
                    <p className='text-[16px] lg:text-start md:text-center md:text-[20px] font-normal mt-4'>
                        Looking for a fast and reliable way to buy USDT (Tether) in
                        Nigeria? With Kript, you can purchase USDT and other cryptocurrencies seamlessly
                        using Nigerian Naira — no stress, no delays.
                    </p> <br /><br />
                    <div className="flex lg:justify-normal md:justify-center">
                        <Link href='https://onelink.to/ff9jys' className='p-4 bg-[#003399] text-white rounded-[6px] hover:bg-white hover:text-[#003399] border-1 hover:border-[#003399]'>
                            Buy USDT on Kript
                        </Link>
                    </div>
                </div>
                <Image
                    src='/yuan.png'
                    alt='coin'
                    width={200}
                    height={200}
                    className='top-35 absolute hidden lg:block motion-safe:animate-slow-bounce'
                />
                {/* Right: Rate Checker */}
                <div className="bg-[#DFEffE] rounded-lg shadow-md w-full md:w-[80%] lg:w-1/2 p-6">

                    <div className="bg-gray-100 rounded-lg p-4 flex flex-col">
                        {/* Conversion Form */}
                        <div className="mt-6 flex flex-col gap-10">
                            <h2 className='font-bold text-[25px] md:text-[30px]'>Currency Converter</h2>
                            <div className="">
                                <label className="block font-bold py-2">Enter USDT Amount</label>
                                <input
                                    type="number"
                                    value={usdtAmount}
                                    onChange={(e) => setUsdtAmount(parseFloat(e.target.value.toString() || ''))}
                                    className='rounded-2xl border-[#003399] border p-4 w-full'
                                    placeholder="e.g. 5"
                                /> <br />
                                <div className="py-4">
                                    <p>1 USDT ~ {`₦${lastPrice.toLocaleString()}`}</p>
                                </div>
                            </div>
                            <div className="">
                                <label className="block font-bold py-2">Equivalent in Naira (₦)</label>
                                <input
                                    type="text"
                                    value={`₦${parseFloat(nairaValue.toFixed(2)).toLocaleString()}`}
                                    readOnly
                                    className='rounded-2xl border-gray-300 bg-gray-200 p-4 w-full cursor-not-allowed'
                                /> <br /><br />
                                <p className='text-[15px] text-red-400 mb-8'>
                                    Note : The exchange is the current price of Tether ( USDT) globally in your local currency
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Second Section */}
            <div className="bg-[#003399] p-4 mt-20 md:py-10 pb-20 md:pb-40">
                <h2 className="text-center text-[30px] md:text-[45px] text-white font-bold py-20">
                    How to Buy USDT on Kript
                </h2>
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-7xl mx-auto">
                    
                    <div className="bg-gradient-to-r from-[#dfeffe] to-[#cce7ff] p-8 rounded-lg shadow-xl w-full md:w-1/3 text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <div className="flex justify-center items-center mb-4">
                            <span className="bg-[#003399] text-white font-bold rounded-full w-14 h-14 flex justify-center items-center text-[22px] shadow-md">
                                1
                            </span>
                        </div>
                        <p className="text-[16px] text-gray-700 leading-relaxed">
                            Download the Kript app from the App Store or Google Play Store and create an account.
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-[#dfeffe] to-[#cce7ff] p-8 rounded-lg shadow-xl w-full md:w-1/3 text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <div className="flex justify-center items-center mb-4">
                            <span className="bg-[#003399] text-white font-bold rounded-full w-14 h-14 flex justify-center items-center text-[22px] shadow-md">
                                2
                            </span>
                        </div>
                        <p className="text-[16px] text-gray-700 leading-relaxed">
                            Fund your wallet using your preferred payment method, such as bank transfer or card.
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-[#dfeffe] to-[#cce7ff] p-8 rounded-lg shadow-xl w-full md:w-1/3 text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <div className="flex justify-center items-center mb-4">
                            <span className="bg-[#003399] text-white font-bold rounded-full w-14 h-14 flex justify-center items-center text-[22px] shadow-md">
                                3
                            </span>
                        </div>
                        <p className="text-[16px] text-gray-700 leading-relaxed">
                            Confirm your purchase, and get credited with USDT immediately.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 py-16 px-8 rounded-lg shadow-lg">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-[30px] md:text-[45px] font-extrabold text-gray-800 mb-6">
                        Discover the Power of USDT (Tether)
                    </h2>
                    <p className="text-[16px] md:text-[20px] text-gray-600 mb-12">
                        USDT isn&apos;t just a stable cryptocurrency—it&apos;s your gateway to secure, efficient, and versatile digital transactions.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-center items-center">
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex justify-center items-center mb-4 text-[#003399] text-[40px]">
                            <i className="ri-global-line"></i>
                        </div>
                        <h3 className="font-semibold text-[22px] text-gray-800 mb-4">Instant Global Transfers</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Send USDT to anyone, anywhere in the world, instantly and without the hassle of currency exchange rates or delays.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex justify-center items-center mb-4 text-[#003399] text-[40px]">
                            <i className="ri-shield-line"></i>
                        </div>
                        <h3 className="font-semibold text-[22px] text-gray-800 mb-4">Stability in Volatile Markets</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Pegged to the US Dollar, USDT offers a stable asset to safeguard your investments from unpredictable market swings.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex justify-center items-center mb-4 text-[#003399] text-[40px]">
                            <i className="ri-wallet-line"></i>
                        </div>
                        <h3 className="font-semibold text-[22px] text-gray-800 mb-4">Secure Digital Savings</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Store your funds in USDT as a reliable and secure digital alternative to traditional fiat currency.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex justify-center items-center mb-4 text-[#003399] text-[40px]">
                            <i className="ri-exchange-line"></i>
                        </div>
                        <h3 className="font-semibold text-[22px] text-gray-800 mb-4">Effortless Crypto Trading</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Trade USDT for other cryptocurrencies seamlessly across platforms, with speed and convenience.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex justify-center items-center mb-4 text-[#003399] text-[40px]">
                            <i className="ri-money-dollar-circle-line"></i>
                        </div>
                        <h3 className="font-semibold text-[22px] text-gray-800 mb-4">Cost-Effective Transactions</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Enjoy ultra-low transaction fees when sending or receiving USDT, making it a cost-efficient choice.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
