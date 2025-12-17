import Link from 'next/link'
import React from 'react'
import amb from '../../../public/ambassador/image.png'
import phone from '../../../public/ambassador/phone.png'

const page = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto py-2 px-4 gap-8 mt-10">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className='font-poppins font-semibold text-[38px] md:text-[48px] lg:text-[60px]'>
                        Welcome to <span className='text-[#003399]'>Kript&apos;s</span> Alpha Ambassador Program
                    </h1>
                    <p className='leading-[48px] '>Turn your campus influence into lifetime passive income and win exciting monthly rewards with Kript.</p>
                    <button>
                        <Link
                            href="https://forms.gle/f3zRkwDHqBZVKVNx7"
                            target="_blank"
                            className="bg-[#003399] text-white px-6 py-3 rounded-md mt-4 hover:bg-[#002366] transition-colors duration-300 flex items-center"
                        >
                            Apply Now
                            <span className="ml-2">→</span>
                        </Link>
                    </button>
                </div>
                <div className="hidden lg:block lg:w-1/2">
                    <img src={amb.src} alt="Ambassador Program" className="w-full h-auto mt-6 md:mt-0" />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto py-12 px-4 mt-0">
                <div className="w-full lg:w-1/2 pl-0 md:p-24">
                    <img 
                        src={phone.src} 
                        alt="Ambassador Phone" 
                        className="w-full h-auto transform rotate-12" 
                    />
                </div>
                <div className="w-full lg:w-1/2 md:p-4">
                    <h2 className='font-poppins font-semibold text-center lg:text-left text-[24px] md:text-[36px] lg:text-[40px] mb-4'>
                        Become Part of Kript&apos;s Visionary Journey
                    </h2>
                    <p className='leading-[32px] text-[16px] md:text-[18px]'>
                        Are you a driven university student ready to thrive in a fast-moving, dynamic, and social tech environment? <br /> <br />

                        Do you want to turn your campus influence into real impact and sustainable income? <br /> <br />

                        Are you intentional about building professional credibility through hands-on experience with a fast-growing fintech company? <br /> <br />

                        If this sounds like you, then Kript’s Alpha Ambassador Program is for you. <br /> <br />
                    </p>
                </div>
            </div>
            <div className="text-center max-w-7xl mx-auto mb-48 px-4">
                {/* <hr className="border-t border-gray-300 my-8 mx-auto max-w-6xl" /> */}
                <h2 className='font-poppins font-semibold text-[24px] md:text-[36px] lg:text-[40px] mb-6'>
                    What are we looking for in an Ambassador?
                </h2>
                <br />
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-[#003399]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <h3 className="font-semibold text-xl mb-3 text-gray-800">Campus Connector</h3>
                        <p className="text-gray-600 text-center">Be an active student with a strong presence and wide network on campus.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-[#003399]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="font-semibold text-xl mb-3 text-gray-800">Passionate Innovator</h3>
                        <p className="text-gray-600 text-center">Have a passion for fintech, technology, and driving innovation.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-[#003399]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0v10m-8 0V7m0 10h8" />
                        </svg>
                        <h3 className="font-semibold text-xl mb-3 text-gray-800">Reliable Leader</h3>
                        <p className="text-gray-600 text-center">Show commitment, creativity, and the ability to lead events and campaigns.</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#DFEFFE] w-full py-48">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className='font-poppins font-semibold text-[24px] md:text-[36px] lg:text-[40px] mb-4 text-center'>
                        Why Join Kript&apos;s Alpha Ambassador Program?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4m4-4h4m-16 0h4" />
                            </svg>
                            <h3 className="font-semibold text-xl mb-3 text-gray-800">Lifetime Passive Income</h3>
                            <p className="text-gray-600 text-center">Earn lifetime passive income through referral commissions.</p>
                        </div>
                        <div className="bg-[#003399] text-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="font-semibold text-xl mb-3">Hands-On Experience</h3>
                            <p className="text-center">Gain hands-on experience in marketing, event planning, and community building.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0v10m-8 0V7m0 10h8" />
                            </svg>
                            <h3 className="font-semibold text-xl mb-3 text-gray-800">Professional Growth</h3>
                            <p className="text-gray-600 text-center">Build your professional network with industry experts and like-minded peers.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center md:col-span-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m-7 4h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <h3 className="font-semibold text-xl mb-3 text-gray-800">Exclusive Rewards</h3>
                            <p className="text-gray-600 text-center">Receive exclusive Kript merchandise and rewards.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <h3 className="font-semibold text-xl mb-3 text-gray-800">Resume Enhancement</h3>
                            <p className="text-gray-600 text-center">Enhance your resume with real-world fintech experience.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[url(/waves.png)] max-w-7xl mx-auto p-28 px-4 text-center bg-[#003399] text-white rounded-lg mb-48 mt-20">
                {/* <hr className="border-t border-gray-300 my-8 mx-auto max-w-6xl" /> */}
                <h2 className='font-poppins font-semibold text-[24px] md:text-[36px] lg:text-[40px] mb-6 text-center'>
                    Ready to Elevate Your Campus Influence with Kript?
                </h2>
                <div className="text-center">
                    <button>
                        <Link
                            href="https://forms.gle/f3zRkwDHqBZVKVNx7"
                            target="_blank"
                            className="bg-white text-[#003399] px-6 py-3 rounded-md mt-4 hover:bg-[#002366] hover:text-white transition-colors duration-300 flex items-center mx-auto"
                        >
                            Apply Now
                            <span className="ml-2">→</span>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default page
