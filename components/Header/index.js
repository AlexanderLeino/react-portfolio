import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, {  } from "react";
import Button from "../Button";
import {BsSunFill,  BsMoonStars} from 'react-icons/bs'

const Header = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div
        className={`mt-10 hidden flex-row items-center justify-end sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        
          <div className="flex">
            <Button type={"nav"} onClick={() => router.push("/")}>Home</Button>
           
            <Button type={"nav"}>Projects</Button>
            
              <Button
                type={"nav"}
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            

            <Button type={"nav"} onClick={() => window.open("https://calendly.com/alexander-leino/30min")}>
              Contact
            </Button>

              <Button
                type={"nav"}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "light" ? <BsMoonStars color="black" fontSize={"25px"}/> : <BsSunFill color='white' fontSize={"30px"}/>}
                
              </Button>
          </div>
        
      </div>
    </>
  );
};

export default Header;
