"use client"
import React , {useRef} from 'react'
import {motion} from "framer-motion"
import skillsJSON from "../../../public/jsonfiles/skillsJSON.json"
import Image from 'next/image'
const Skills = () => {
  const scorllRef = useRef(null);
  const skillSet = skillsJSON.programming;
  const techSkills = skillsJSON.technical;
  // console.log(skillSet);
  return (
    <motion.div id="stack" className="flex flex-col p-8 h-full " transition={{delay:0.2,type:"tween"}} initial={{scale:0.5,opacity:0}} whileInView={{opacity:1,scale:1}} viewport={{root:scorllRef}}>
        <h1 className="text-8xl lg:text-9xl border-b-2 mt-10" ><span className="text-red-600">s</span>tack.</h1>
        <h1 className="w-full mt-1 text-l mb-4 lg:text-2xl text-left">MY STACK IS FULL</h1>
        <div className="mt-10 mb-12 flex justify-end">
          <div className="w-1/2 lg:w-1/3">
            {skillSet && skillSet.map((item,i)=>{
              return(
                <motion.div key={i} className="flex gap-1 items-center w-full" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:(0.25+(0.02*i))}}>
                  <Image src={item.icon} height={50} width={50} className="bg-white rounded-md m-1 h-5 w-5 lg:h-12 lg:w-12" alt={item.name}/>
                  <h1 className="text-l lg:text-3xl">{item.name}</h1>
                </motion.div>
              )
            })}
          </div>
          <div className="flex flex-wrap w-1/2 lg:w-1/3">
            {techSkills && techSkills.map((item,i)=>{
              return(
                <motion.div key={i} className="flex gap-1 items-center w-full lg:flex-grow lg:basis-3/6" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:(0.25+(0.02*i))}}>
                  <Image src={item.icon} height={50} width={50} className="bg-white rounded-md m-1 h-5 w-5 lg:h-14 lg:w-14" alt={item.name}/>
                  <h1 className="text-l lg:text-3xl">{item.name}</h1>
                </motion.div>
              )
            })}
          </div>
        </div>
    </motion.div>
  )
}

export default Skills