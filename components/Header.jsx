"use client"

import { usePathname } from 'next/navigation';
import React from 'react'
import { MobileMenuIconLight, NavRightIcon, SearchIcon } from './icons';


const Header = () => {

  const pathname = usePathname();

  const pathNames = pathname.split("/").filter((path) => path);

  return (
    <nav>
      <div className='flex items-center justify-between shadow-md shadow-slate-300 py-4 px-6'>
        <div className='flex items-center gap-2'>
          <MobileMenuIconLight className="w-24 h-24"/>
          {/* <p className='capitalize text-lg'>{pathNames} <span className='font-semibold'>/</span></p> */}
        </div>
        <div className='flex gap-2'>
          <SearchIcon className="w-36 h-36"/>
          <NavRightIcon />
        </div>
      </div>
    </nav>
  )
}

export default Header