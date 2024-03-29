import React from 'react'
import Image from 'next/image'
import { mentor } from '@/components/mentor'
import Link from 'next/link'

const page = () => {
  return (
    <div className='p-4'>
        <div className="about-tutor">
            <div className="mt-6">
                <h3 className='font-light uppercase mb-4 text-slate-800'>About the course</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus. Commodo viverra maecenas accumsan lacus vel facilisis. Tincidunt dui ut ornare lectus sit amet. Mi tempus imperdiet nulla malesuada. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Aliquam faucibus purus in massa tempor. Eu augue ut lectus arcu bibendum at varius vel. At erat pellentesque adipiscing commodo elit at imperdiet dui. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Quis vel eros donec ac.</p>
            </div>
        </div>

        <div className="available-mentor">
            <div className="mt-6">
                <p className='mb-6 text-slate-800 uppercase'>Our available mentors</p>
                <div className='grid-cols-2 grid gap-6'>
                    {mentor.map((mentor) => (
                        <Link href="/product/mentor" >
                            <div className='flex items-center flex-col'>
                                <Image style={{width: "100px",}} src={mentor.img} alt='mentor-picture' width="180" height="120" />
                                <h5>{mentor.name}</h5>
                                <p>{mentor.language}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default page