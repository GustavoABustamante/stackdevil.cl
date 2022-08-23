import React from 'react'
import { IconContext } from "react-icons";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const UsCard = ({content, name, title}) => (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 cursor-pointer feedback-card'>
        <div className='flex flex-row lg:text-left md:text-center'>
            <IconContext.Provider value={{ color: "#7C878E", size: "2em"  }} className={`flex flex-col w-[48px] h-[48px]`}>
                <div>
                    <FaQuoteLeft />
                    <FaQuoteRight />
                </div>
            </IconContext.Provider>
            <div className='flex flex-col ml-4'>
                <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white lg:ml-0 ss:mx-auto'>{name}</h4>
                <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>{title}</p>
            </div>
        </div>
        <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-5'>
            {content}
        </p>
    </div>
)

export default UsCard