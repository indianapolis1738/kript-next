import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div>
            <div className="bg-[url(/waves.png)]">
                <div className="max-w-7xl mx-auto px-4 py-10 md:bg-[url(/rocket.png)] bg-no-repeat bg-top-right bg-size-contain ">
                    <h1 className="text-[20px] md:text-[25px] text-[#003399] font-bold text-center">About Us</h1>
                    <p className="mt-2 text-[35px] md:text-[40px] font-bold text-center">
                        Embracing Simplicity and Accessibility
                    </p>
                    <p className='flex justify-center items-center text-center mt-4 text-[16px] md:text-[20px]'>
                        At the heart of Kript Africa&apos;s mission lies a dedication to making cryptocurrency accessible to all. Recognising the diverse needs and backgrounds of our users, we have developed a  user-friendly platform that empowers individuals, regardless of their level of expertise, to participate in the digital economy with confidence.
                    </p>
                </div>
                <div className="max-w-7xl mx-auto mb-30">
                    <Image
                        src="/fast.png"
                        alt="About Us"
                        width={1000}
                        height={500}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[25px] md:text-[40px] font-bold text-center mt-10">
                Our Vision and Mission at a glance
                </h2>
                <div className="flex justify-center items-center flex-col md:flex-row mt-30 gap-10">
                    <div className="w-98% md:w-1/2">
                    <Image
                        src="/ceci.png"
                        alt="Vision"
                        width={1000}
                        height={500}
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                    </div>
                    <div className="w-98% md:w-1/2 p-2 md:p-0 flex flex-col justify-start items-center">
                        <p className='text-[25px] md:text-[35px] font-bold text-[#003399]'>
                        To provide user friendly experience for users
                        </p>
                        <p className='flex justify-center items-center mt-4 text-[16px] md:text-[20px]'>
                        Kript is a cutting-edge cryptocurrency trading platform that seamlessly combines innovation with accessibility.
                        Whether you&apos;re a seasoned crypto enthusiast or a newcomer to the digital asset space, Kript offers a user-friendly experience for buying, selling, and holding a diverse range of cryptocurrencies.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center flex-col md:flex-row-reverse mt-10 md:mt-30 mb-30 gap-10">
                    <div className="w-98% md:w-1/2">
                    <Image
                        src="/solution.png"
                        alt="Vision"
                        width={1000}
                        height={500}
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                    </div>
                    <div className="w-98% md:w-1/2 p-2 md:p-0 flex flex-col justify-start items-center">
                        <p className='text-[25px] md:text-[35px] font-bold text-[#003399]'>
                        Seamless Crypto Trading Experience
                        </p>
                        <p className='flex justify-center items-center mt-4 text-[16px] md:text-[20px]'>
                        Kript is a modern cryptocurrency platform built to simplify trading and enhance accessibility. Designed for both crypto veterans and newcomers, Kript delivers an easy-to-use interface for buying, selling, and managing a diverse selection of digital assets effortlessly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
