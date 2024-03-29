"use client"

import React, { useState } from 'react'
import { 
    Radio, 
    RadioGroup,
    FormControl, 
    FormControlLabel,
    FormLabel 
} from '@mui/material'
import Link from 'next/link'

const page = () => {
const [proceed, setProceed] = useState(1)

  return (
    <div className='p-4'>
        <div>
            <div className='mt-6'>
                <h3 className='font-light uppercase mb-2'>About the course</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus. Commodo viverra maecenas accumsan lacus vel facilisis. Tincidunt dui ut ornare lectus sit amet. Mi tempus imperdiet nulla malesuada. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Aliquam faucibus purus in massa tempor. Eu augue ut lectus arcu bibendum at varius vel. At erat pellentesque adipiscing commodo elit at imperdiet dui. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Quis vel eros donec ac.</p>
            </div>
            <div className='mt-6'>
                <h3 className='font-light uppercase mb-2'>Syllabus</h3>
                <div className='flex items-center gap-2'>
                    <ul>
                        <li>Week 1: <span>Intro to product design</span></li>
                        <li>Week 2: <span>Intro to product design tools and principles.</span></li>
                        <li>Week 3: <span>Intro to product design tools and principles.</span></li>
                    </ul>
                </div>
            </div>
            <Link href="/product/continue">
                <button className='uppercase p-3 bg-[#009A84] mt-4 w-full text-white rounded'>take course</button>
            </Link>
        </div>

       
    </div>
  )
}

export default page