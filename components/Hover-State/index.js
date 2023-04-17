import React from 'react'
export const HoverState = ({isHover, code, view}) => {
    
  return (
    <>
        {
            isHover ?
            <div className='gradient absolute text-5xl flex items-end justify-center w-full bottom-2 h-full transition-all ease-out duration-500 space-x-2'>
                <button onClick={view} className='text-xl border-line border-2 p-2 bg-violet-600/40 border-white rounded mb-2'>View App</button>
                <button onClick={code} className='text-xl border-line border-2 p-2 bg-violet-600/40 border-white rounded mb-2'>View Code</button>
            </div>
            : null
        }
    </>
  )
}
