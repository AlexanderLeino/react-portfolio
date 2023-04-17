import Image from "next/image";
import Header from "../components/Header";
import {ProjectData} from '../data/projectData'
import Socials from "../components/Socials";
import ProjectCard from "../components/ProjectCard";
import profilePic from '../assets/profile-picture.jpg'
import { HoverState } from "../components/Hover-State";
import Footer from "../components/Footer";
import Head from "next/head";
// Local Data
import data from "../data/portfolio.json";


export default function Home() {
  return (
  <>
    <div>
      <HoverState />
      <Head>
        <title>Alexander Leino's Portfolio</title>
      </Head>

      <div className="gradient-circle"></div>
      

      <div className="container mx-auto mb-10">
      <Header />
        <div className="laptop:mt-20 mt-10">
        <div>
          <div className="mt-5 flex space-x-20 items-center">
            
            <Image src={profilePic} width={"275"} height={"275"} style={{borderRadius: '50%'}}/>
            <div>
              <h1  
                className="text-5xl"
              >
              Alexander Leino
              </h1>
              <div>
                React Developer with nine months of professional experience looking for their next opportunity
              </div>
              <Socials />
            </div>

        </div>
            <h1
            
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
            </h1>
          </div>

         
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="text-5xl text-bold">Projects</h1>

          <div className="mt-5 laptop:mt-5 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {ProjectData?.map((project) => {
             return <ProjectCard
                key={project.id}
                img={project.image}
                name={project.title}
                technologies={project.technologies}
                description={project.description}
                view={() => window.open(project.deploy)}
                code={() => window.open(project.code)}
              />
            })}
          </div>
        </div>

        <div className="mt-10 laptop:mt-40 laptop:p-0">
          <h1 className=" text-7xl text-bold">About Me.</h1>
          <p className=" mt-2 text-xl laptop:text-3xl w-full">
          I am a non-traditional Web Developer with 9 months of professional developer experience. I come from a background in finance and after leaving my role as a loan officer I decided to enroll in Trilogy's coding boot camp. Since then I have fallen in love with programming, because of the endless possibilities and solutions that one can create with just a computer. 
          </p>
        </div>
       
      </div>
      <div className="gradient-circle-bottom"></div>
    </div>
      
  </>
  );
}
