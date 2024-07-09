import Image from 'next/image'
import React from 'react'

export const Profile = () => {
    return (
        <div className='relative w-fit h-full overflow-hidden flex justify-center pt-10 items-center'>
            <Image src="/assets/Raja.png" alt="Raja" width={1000} height={1000} className="w-fit h-[125%] mt-[5%] object-cover" />
            <Image src="/assets/profile-bg.png" alt='profile-bg' className='w-full h-full object-contain absolute -z-[2] top-0 left-0' width={1000} height={1000}/>
        </div>
    )
}
