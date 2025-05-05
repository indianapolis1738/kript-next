import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <div className='max-w-4xl mx-auto block justify-evenly mt-20 text-center gap-10 mb-20'>
        <h2 className='text-[35px] font-bold text-[#003399]'>Not Found</h2>
        <p className='text-[16px] '>
          Sorry, the page you are looking for does not exist.
        </p><br /><br />
        <Link href="/" className='bg-[#003399] p-6 rounded-2xl text-white hover:bg-amber-50 hover:text-black'>Return Home</Link>
      </div>
    </div>
  )
}

export default NotFound
