import Link from 'next/link'
import React from 'react'
import { CiMail } from 'react-icons/ci'
import { IoIosChatbubbles } from 'react-icons/io'

const support = () => {
    return (
        <div>
            <div className="">
                <div className="max-w-5xl mx-auto px-4 py-20 md:bg-[url(/rocket.png)] bg-no-repeat bg-top-right bg-size-contain mt:mt-20">
                    <p className="mt-2 text-[35px] md:text-[40px] font-bold text-center">
                        We're here to help you
                    </p>
                    <p className='flex justify-center items-center text-center mt-4 text-[16px] md:text-[20px]'>
                        Get in touch with us for any questions, feedback, or support. <br />
                         Our dedicated team is ready to assist you with all your inquiries.
                    </p>
                    <div className="md:flex justify-between items-center mx-auto gap-16">
                        <Link href="mailto:support@kript.africa" className="bg-[#DFEFFE] block p-8 rounded-2xl mt-10 mx-auto w-[95%] md:w-1/2">
                            <div className='bg-[#003399] p-6 w-fit rounded-[100%] mb-8'>
                                <CiMail size={40} color='#DFEFFE' />
                            </div>
                            <p className="text-[16px] md:text-[20px]">
                                Reach out to our customer support 24/7 via <br /> <span className='text-[#003399]'>support@kript.africa</span>
                            </p>

                        </Link>
                        <Link href="https://localhost:3000/download" className="bg-[#DFEFFE] block p-8 rounded-2xl mt-10 mx-auto w-[95%] md:w-1/2">
                            <div className='bg-[#003399] p-6 w-fit rounded-[100%] mb-8'>
                                <IoIosChatbubbles size={40} color='#DFEFFE' />
                            </div>
                            <p className="text-[16px] md:text-[20px]">
                                Chat with us <br /> <span className='text-[#003399]'>Download the App Now</span>
                            </p>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default support
