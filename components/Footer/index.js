import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
      
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-7xl laptop:text-7xl laptopl:text-7xl text-bold">
              LET&apos;S Connect
            </h1>
           
            <a href="https://calendly.com/alexander-leino/30min">
              <Button type="primary">Schedule a call</Button>
            </a>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-base text-bold mt-2 laptop:mt-10 p-2 laptop:p-0 text-center">
        Made With ❤ by{" "}
        <Link href="http://www.chetanverma.com">
          <a className="underline underline-offset-1">Alexander Leino</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
