"use client"
import React , {useRef} from 'react'
import {motion} from "framer-motion"
import skillsJSON from "../../../public/jsonfiles/skillsJSON.json"
import Image from 'next/image'
const Skills = () => {
  const scorllRef = useRef(null);
  const skillSet = skillsJSON.programming;
  // console.log(skillSet);
  return (
    <motion.div className="flex flex-col p-10 h-screen border-b-2" transition={{delay:0.2,type:"tween"}} initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} viewport={{root:scorllRef}}>
        <h1 className="text-9xl border-b-2 mt-10" >Skills.</h1>
        <div className="">
          {skillSet && skillSet.map((item,i)=>{
            return(
              <div className="">
                <h1 key={i}>{item.name}</h1>
                <Image src={item.icon} height={50} width={50}/>
              </div>
            )
          })}
        </div>
    </motion.div>
  )
}

export default Skills