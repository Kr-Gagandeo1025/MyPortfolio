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
        <motion.h1 className="text-5xl opacity-0 w-full text-center lg:text-9xl lg:w-auto lg:text-left " animate={{scale:1.2, opacity:1}} transition={{ type:"spring" }}>Kumar <br/> Gagandeo.</motion.h1>
        <motion.h2 className="mt-14 opacity-0 w-full text-center lg:text-left lg:w-auto" animate={{ x:-50, opacity:1,}} transition={{delay:0.5}}>fullstack | web 3.0</motion.h2>
            <motion.button className="mt-14 p-4 text-xl outline-none border-2 w-0 opacity-0 ease-in-out" whileHover={{ scale: 1.1 }} whileTap={{scale:0.9}} animate={{width:"75%",opacity:1}} transition={{type:"spring"}} onClick={downloadResume}> <DownloadForOfflineIcon className="mr-2"/>Resume</motion.button>
      </motion.div >
      <motion.div className="flex flex-col p-10 min-h-screen border-b-2" transition={{delay:0.2,type:"tween"}}initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} viewport={{root:scorllRef}}>
          <h1 className="text-9xl border-b-2 mt-10" >Intro.</h1>
          <h1 className="w-full mt-1 text-l mb-4 lg:text-2xl">WEB DEV | FULLSTACK | WEB 3.0</h1>
          <div className="flex flex-col p-2 gap-10 justify-center items-center lg:flex-row h-full">
              <Image src={"/profile-pic.jpg"} height={200} width={200} className="rounded-full" sizes="(max-width: 350px)"/>
              <p className="text-xl lg:text-6xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nam esse id Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet ea dolorem voluptates voluptatum magnam omnis nemo 
              </p>
          </div>
      </motion.div>
  
  </div>
  )
}

export default Hero