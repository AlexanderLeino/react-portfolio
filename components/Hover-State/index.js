import React from 'react'
import Button from '../Button'

export const HoverState = ({isHover}) => {
    
  return (
    <>
        {
            isHover ?
            <div className='gradient absolute text-5xl flex items-end justify-center w-full bottom-0 h-full transition-all ease-out duration-500 space-x-2'>
                <button className='text-xl border-line border-2 p-2 bg-violet-600/40 border-white rounded mb-2'>View App</button>
                <button className='text-xl border-line border-2 p-2 bg-violet-600/40 border-white rounded mb-2'>View Code</button>
            </div>
            : null
        }
    </>
  )
}
