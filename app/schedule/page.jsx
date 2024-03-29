import { schedule } from '@/components/schedule'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='p-4'>
        <div>
            <ul>
                {schedule.map((schedule) => (
                    <li className='flex items-center gap-4 my-7'>
                        <Image src={schedule.img} alt='metorimage' width={100} height={100}/>
                        <div>
                            <h2 className='font-bold text-black text-xl mb-3'>{schedule.name}</h2>
                            <p className='font-light text-slate-950'>Next Class: {" "}{schedule.nextClassTime}{", "} {schedule.nextClassDay}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default page