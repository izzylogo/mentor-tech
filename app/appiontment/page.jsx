import { appiontment } from '@/components/appiontment'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='p-4'>
        <div>
            {appiontment.map((appiont) => (
                <div className='flex items-center gap-4 my-4'>
                    <Image className='w-[120px]' src={appiont.profilePic} alt='profile-pic' width={100} height={100}/>
                    <div>
                        <p className='my-2 text-slate-950 font-medium text-lg'>{appiont.appiont}</p>
                        <button className='uppercase font-thin text-slate-700 rounded w-full border-2 border-slate-800 p-2'>View proposal</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default page