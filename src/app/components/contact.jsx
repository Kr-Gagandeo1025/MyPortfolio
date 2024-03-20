import { GitHub, Instagram, LinkedIn, Mail, X } from '@mui/icons-material'
import React from 'react'

const Contact = () => {
  return (
    <div id="collab" className="flex justify-evenly items-center flex-col lg:flex-row w-screen h-screen border-t-2">
        <div className="flex flex-col lg:h-[70%]">
            <div className='flex flex-col lg:ml-12 ml-14'>
                <span className='text-6xl lg:text-9xl'><span className="text-red-500">L</span>et's</span>
                <span className='text-6xl lg:text-9xl'>Connect.</span>
            </div>
            <span className="text-2xl lg:ml-12 mt-12 z-50 flex gap-4 items-center w-fit"><Mail/><a href="mailto:kumargagandeo9@gmail.com">kumargagandeo9@gmail.com</a></span>
            <div className="social_icons flex gap-4 ml-12 mt-12">
                <a href="https://x.com/k_gagandeo?t=9Zf1EbyiNAX7JPQxtXQCLg&s=09" className='z-50' target='blank'><X fontSize='large'/></a>
                <a href="https://www.instagram.com/kr_gagandeo?igsh=emtsNHhnaWM3MXdp" className='z-50' target='blank'><Instagram fontSize='large'/></a>
                <a href="https://www.linkedin.com/in/kumar-gagandeo-839a1a249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='z-50' target='blank'><LinkedIn fontSize='large'/></a>
                <a href="https://github.com/Kr-Gagandeo1025" className='z-50' target='blank'><GitHub fontSize='large'/></a>
            </div>
        </div>
        <div className='flex flex-col justify-between lg:justify-end lg:h-[70%]'>
            <h1 className='text-3xl lg:text-5xl'>Resume</h1>
            <p className="flex-wrap w-[300px]">See my work history and what I've achieved in a quick and easy resume.</p>
        </div>
        <div className="flex flex-col justify-between lg:gap-5 lg:h-[70%]">
            <div>
                <h1 className='text-3xl lg:text-5xl'>Work</h1>
                <p className="flex-wrap w-[300px]">Here's a curated selection showcasing my expertise and the achieved results.</p>
            </div>
            <div>
                <h1 className='text-3xl lg:text-5xl'>Skills</h1>
                <p className="flex-wrap w-[300px]">Check out the things I'm good at, from building websites to design and more.</p>
            </div>
            <div>
                <h1 className='text-3xl lg:text-5xl'>Instagram</h1>
                <p className="flex-wrap w-[300px]">Good memories, best times. My photo journal.</p>
            </div>
        </div>
        <div className="flex justify-between flex-col">
                <h1 className='text-3xl lg:text-5xl'>Experience</h1>
                <p className="flex-wrap w-[300px]">Check out things I'm good at, from building websites to design and more.</p>
        </div>
    </div>
  )
}

export default Contact