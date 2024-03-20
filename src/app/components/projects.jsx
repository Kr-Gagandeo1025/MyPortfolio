"use client"
import {motion} from "framer-motion"
import React, { useRef } from 'react'
import ProjectCard from "./projectCard";
import projectsJSON from "../../../public/jsonfiles/projectsJSON.json";

const Projects = () => {
  const projects = projectsJSON.projects;
  const scorllRef = useRef(null);
  return (
    <motion.div id="art" className="flex flex-col p-8 h-full " transition={{delay:0.2,type:"tween"}} initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} viewport={{root:scorllRef}}>
      <h1 className="text-8xl lg:text-9xl border-b-2 mt-10 text-right" ><span className="text-red-600">a</span>rt.</h1>
      <h1 className="w-full mt-1 text-l mb-4 lg:text-2xl text-right">I AM AN ARTIST</h1>
      <div className="flex justify-evenly w-full flex-wrap gap-[5px] ">
        {projects && projects.map((item,i)=>{
          return(
            <ProjectCard key={i} item={item}/>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Projects