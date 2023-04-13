import Image from "next/image";
import Header from "../components/Header";
import {ProjectData} from '../data/projectData'
import Socials from "../components/Socials";
import ProjectCard from "../components/ProjectCard";
import profilePic from '../assets/profile-picture.jpg'

import Footer from "../components/Footer";
import Head from "next/head";


// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  return (
    <div>

      <Head>
        <title>Alexander Leino's Portfolio</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

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
                onClick={() => window.open(project.url)}
              />
            })}
          </div>
        </div>

        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
