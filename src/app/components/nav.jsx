"use client"
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { animate, motion } from 'framer-motion';
import { CloseRounded } from '@mui/icons-material';

const Nav = () => {
    const [navToggle,setnavToggle] = useState("h-0");
    const togglefunc = () => {
        if(navToggle==="h-0"){
            setnavToggle("h-screen")
        }else{
            setnavToggle("h-0")
        }
    }
    
  return (
    <div>
        <motion.div className={`${navToggle} w-screen bg-white justify-center items-center text-black flex ease-linear overflow-hidden transition-all`}>
            <div className='z-50 w-full justify-start items-start h-full p-16 text-5xl gap-4 flex flex-col lg:text-8xl'>
                <span onClick={togglefunc}><CloseRounded className='h-[50px] w-[50px]'/></span>
                <h1 className='text-center w-full flex flex-col justify-center items-center'><a href="#home">home.</a></h1>
                <h1 className='text-center w-full flex flex-col justify-center items-center'><a href="#about">about.</a></h1>
                <h1 className='text-center w-full flex flex-col justify-center items-center'><a href="#stack">stack.</a></h1>
                <h1 className='text-center w-full flex flex-col justify-center items-center'><a href="#art">art.</a></h1>
                <h1 className='text-center w-full flex flex-col justify-center items-center'><a href="#collab">collab.</a></h1>
            </div>
        </motion.div>
        <div className="flex justify-between p-2 bg-transparent h-screen w-screen z-50 absolute">
                <motion.div className={`rounded-full flex justify-center items-center m-4 bg-white text-black h-[100px] w-[100px] overflow-hidden`}>
                    <button onClick={togglefunc}><MenuIcon/></button>
                </motion.div>
        </div>
    </div>
  )
}

export default Nav