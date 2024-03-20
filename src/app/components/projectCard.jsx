"use client"
import { GitHub, LinkRounded } from '@mui/icons-material'
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react'


const ProjectCard = ({item}) => {
  const scorllRef = useRef(null);
  return (
    <motion.div className='p-4 flex flex-col rounded-lg bg-slate-900 max-w-[90vw] lg:max-w-[33%] mb-6' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.5}} viewport={{root:scorllRef}}>
      <div className='flex'>
        <div className='z-10 w-[600px] h-[200px] lg:h-[300px] bg-cover p-2 mb-5 rounded-xl transition-all ease-in-out relative flex'>
          <Image src={item.img} height={200} width={600} alt={item.name} className="rounded-xl lg:h-[300px]"/>
        </div>
      </div>
      <div>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl'>{item.name}</h1>
          <div className="icons flex gap-2 justify-between items-center">
            {item.website && <a href={item.website} className='z-50' target='blank'><button className='p-2 bg-slate-400 rounded-full'><LinkRounded/></button></a>}
            {item.github && <a href={item.github} className='z-50' target='blank'><button className='p-2 bg-slate-400 rounded-full'><GitHub/></button></a>}
          </div>
        </div>
        <div className='mt-2'>
          <p>{item.desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard