"use client"
import React, { useRef } from 'react'
import Image from 'next/image';
import {motion} from "framer-motion";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const Hero = () => {

    const scorllRef = useRef(null);

    const downloadResume = () => {
        console.log("resume was downloaded");
    }

  return (<div className='flex flex-col justify-center items-center'>
      <motion.div className="h-screen p-10 flex flex-col items-center justify-center" >
        <motion.h1 className="text-6xl opacity-0 w-full text-center lg:text-[250px] lg:w-auto lg:text-left translate-y-36 " animate={{y:-50, opacity:1}} transition={{ type:"spring" }}><span className="text-red-600">k</span><motion.span animate={{opacity:1}} transition={{delay:0.5}} className="opacity-0">umar</motion.span> <br/> <span className="text-red-600">g</span><motion.span animate={{opacity:1}} transition={{delay:0.5}} className="opacity-0">agandeo.</motion.span></motion.h1>
        <motion.h2 className="mt-1 lg:mt-14 opacity-0 w-full text-center lg:text-left lg:w-auto" animate={{ x:0, opacity:1,}} transition={{delay:0.7}}>fullstack | web 3.0</motion.h2>
        <motion.button className="relative inline-flex mt-20 h-18 lg:h-20 w-40 lg:w-80 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 opacity-0" animate={{ x:0, opacity:1,}} transition={{delay:0.8}}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-xl font-medium text-white backdrop-blur-3xl">
        <DownloadForOfflineIcon className="mr-2"/>resume
        </span>
        </motion.button>
      </motion.div >
      <motion.div className="flex flex-col p-10 max-h-screen " transition={{delay:0.2,type:"tween"}}initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} viewport={{root:scorllRef}}>
          <h1 className="text-8xl border-b-2 mt-10 text-right lg:text-9xl" ><span className="text-red-600">i</span>ntro.</h1>
          <h1 className="w-full mt-1 text-l mb-4 lg:text-2xl text-right">WEB DEV | FULLSTACK | WEB 3.0</h1>
          <div className="flex flex-col p-2 gap-10 justify-end items-center lg:flex-row h-full lg:w-2/3">
              <Image src={"/profile-pic.jpg"} height={500} width={500} className="rounded-2xl h-54 w-48 lg:h-[650px] lg:w-[650px]"/>
              <p className="text-xl lg:text-6xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nam esse id Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet ea dolorem voluptates voluptatum magnam omnis nemo 
              </p>
          </div>
      </motion.div>
  
  </div>
  )
}

export default Hero