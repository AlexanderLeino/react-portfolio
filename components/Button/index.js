import React from "react";
import { useTheme } from "next-themes";

const Button = ({ children, type, onClick, classes }) => {

  const { theme } = useTheme();
  console.log(theme)
  if (type === "nav") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`text-xl  p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg 
         dark:hover:bg-slate-600 dark:text-white bg-none  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link } ${classes}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base p-1  border-solid border-2 border-white laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 
      dark:hover:bg-slate-600 dark:text-white
      hover:bg-slate-100
      } hover:scale-105 active:scale-100  tablet:first:ml-0  ${classes} link`}
    >
      {children}
    </button>
  );
};

export default Button;
