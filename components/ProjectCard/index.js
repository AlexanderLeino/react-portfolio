import React from "react";
import Image from "next/image";
import { useState } from "react";
import { HoverState } from "../Hover-State";
import { useEffect } from "react";
const ProjectCard = ({ img, name, description, technologies, onClick }) => {
  const [isHover, setIsHover] = useState(false)
  useEffect(() => {
    console.log(isHover)
  }, [isHover])
  return (
    <>
      
      <div className="overflow-hidden rounded-lg link" onClick={onClick}>
        <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto ">
    
            <Image
              alt={name}
              className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300 "
              src={img}
            />
          <HoverState isHover={isHover}/>
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
