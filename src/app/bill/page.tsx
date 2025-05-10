import React from 'react'
import { FaMoneyBills, FaUserGraduate } from 'react-icons/fa6'
import { Md4gPlusMobiledata } from 'react-icons/md'

const Bill = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-4xl w-full p-6 md:p-10">
                <div className="flex flex-col items-center mb-6">
                    {/* <img src="/bill-icon.png" alt="Bill Icon" className="h-16 w-16 mb-2" /> */}
                    <h1 className="text-[30px] md:text-[48px] lg:text-[64px] font-bold text-black text-center">
                        Pay Bills with Crypto, Instantly
                    </h1>
                </div>
                <p className="text-[16px] md:text-[20px] text-black text-center mb-6 break-normal max-w-3xl mx-auto">
                    No more switching apps or worrying about cashouts. Use your crypto directly to settle everyday bills with Kript.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-[#DFEFFE] rounded-lg p-6 border border-[#003399] flex flex-col items-center text-center relative">
                        {/* <img src="/utility.png" alt="Utilities" className="h-14 w-auto mb-3" /> */}
                        <FaMoneyBills size={39} color='#003399' /> <br />
                        <h3 className="font-semibold text-black text-lg mb-1">Utility Bills</h3>
                        <p className="text-black text-sm">
                            Pay electricity, water, and cable TV bills directly from your Kript wallet.
                        </p>
                        <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                            Coming Soon
                        </span>
                    </div>
                    <div className="bg-[#DFEFFE] rounded-lg p-6 border border-[#003399] flex flex-col items-center text-center relative">
                        {/* <img src="/airtime.png" alt="Airtime & Data" className="h-14 w-auto mb-3" /> */}
                        <Md4gPlusMobiledata size={39} color='#003399' /><br />

                        <h3 className="font-semibold text-black text-lg mb-1">Airtime & Data</h3>
                        <p className="text-black text-sm">
                            Instantly top up airtime or data for MTN, Glo, Airtel, and 9mobile—right from your crypto balance.
                        </p>
                        <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                            Coming Soon
                        </span>
                    </div>
                    <div className="bg-[#DFEFFE] rounded-lg p-6 border border-[#003399] flex flex-col items-center text-center relative">
                        {/* <img src="/education.png" alt="Education" className="h-14 w-auto mb-3" /> */}
                        <FaUserGraduate size={39} color='#003399' /> <br />
                        <h3 className="font-semibold text-black text-lg mb-1">Education & Exam Fees</h3>
                        <p className="text-black text-sm">
                            Settle WAEC, JAMB, or school fees using your crypto. Fast and reliable.
                        </p>
                        <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                            Coming Soon
                        </span>
                    </div>
                </div>

                <div className="bg-[#003399] text-white rounded-xl p-6 md:p-8 mb-10">
                    <h2 className="text-xl md:text-2xl font-bold text-center mb-4">Why Choose Kript for Bill Payments?</h2>
                    <ul className="list-disc list-inside text-sm md:text-base space-y-2">
                        <li>Pay directly in crypto—no need to convert manually</li>
                        <li>Low to zero transaction fees</li>
                        <li>Accessible 24/7 with fast processing</li>
                        <li>Track all payments in your history tab</li>
                        <li>Secure and verified transactions every time</li>
                    </ul>
                </div>

                <div className="text-center mb-8">
                    <h3 className="text-lg md:text-xl font-semibold text-black mb-2">
                        More than just bills
                    </h3>
                    <p className="text-black text-sm md:text-base max-w-xl mx-auto">
                        With Kript, you&apos;re not just paying bills — you&apos;re unlocking the full power of crypto in daily life. Shop, save, and spend with ease.
                    </p>
                </div>

                <div className="flex justify-center">
                    <a
                        href="https://onelink.to/ff9jys"
                        className="bg-[#003399] text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-[#002266] transition-all text-sm md:text-base flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        Get the Kript App
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Bill
