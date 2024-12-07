import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <header className='flex items-center w-full sticky top-0 bg-slate-50 h-16'>
        <nav className='flex justify-between items-center px-5  w-full'>
          {/* Logo */}
          <span className='text-xl font-bold'>
            My Files
          </span>


          {/* ==== user Details ======= */}
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-400 text-black">
            s
          </div>
        </nav>
    </header>
  )
}