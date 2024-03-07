"use client"
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const AnimatedCursor = () => {
    const [mousePos, setMousePos] = useState({
        x:0,
        y:0
    })
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            setMousePos({
                x:e.clientX,
                y:e.clientY
            })
        })
    })
  return (
    <motion.div className={`hidden lg:h-[200px] lg:w-[200px] lg:bg-transparent lg:rounded-full lg:fixed lg:opacity-[0.7] z-50 lg:flex backdrop-blur-3xl items-center justify-center`} animate={{x:mousePos.x-100, y:mousePos.y-100}} transition={{type:"spring"}}><h1 className="text-2xl">+</h1></motion.div>
  )
}

export default AnimatedCursor