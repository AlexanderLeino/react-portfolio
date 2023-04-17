import React from "react";
import Image from "next/image";
import { useState } from "react";
import { HoverState } from "../Hover-State";
import { useEffect } from "react";
const ProjectCard = ({ img, name, description, technologies, view, code }) => {
  const [isHover, setIsHover] = useState(false)
  useEffect(() => {
    console.log(isHover)
  }, [isHover])
  return (
    <>
      
      <div className="overflow-hidden rounded-lg link">
        <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="relative rounded-lg overflow-hidden h-48 mob:h-auto ">
    
            <Image
              alt={name}
              className="h-full w-full object-cover"
              src={img}
            />
          <HoverState view={view} code={code} isHover={isHover}/>
        </div>
        <h1 className="mt-5 text-3xl font-medium">{name}</h1>
        <h2 className="text-xl opacity-50">{description}</h2>

        <div className="flex">
          {technologies.map((value) => {
            return (
              <div className="p-3 m-1  border-solid rounded-lg card text-white">
                {value}
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ProjectCard;
