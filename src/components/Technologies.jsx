import React from 'react'
import styles from '../style'
import { IconContext } from "react-icons";
import { FaCloud, FaAws,  FaAngular, FaReact, FaVuejs, FaBootstrap, FaSass, FaNode, FaPython, FaDatabase } from "react-icons/fa";
import { DiPostgresql, DiGoogleCloudPlatform } from "react-icons/di";
import { CgScreen } from "react-icons/cg";
import { RiServerFill } from "react-icons/ri";
import { SiDotnet, SiMicrosoftsqlserver, SiMongodb, SiMicrosoftazure } from "react-icons/si";

const Technologies = () => (
  <section className='mt-6 mb-16 px-4 flex flex-col justify-center'>

    <div className='pb-10 text-center'>
      <h4 className={`${styles.paragraph} lg:max-w-[470px] mt-5 mx-auto`}>
        Asocia tu marca con las mejores tecnologías
      </h4>
    </div>

    <div className='flex flex-row justify-center md:justify-around' >
      <div data-ref='Cloud' className={`flex justify-start h-auto w-auto feedback-card p-6 rounded-lg my-5 min-w-[300px] max-w-[300px]`}>
        <IconContext.Provider value={{ color: "white", size: "3em", className: "transition  hover:scale-125 ml-3" }}>
          <div> <FaCloud className='mr-5' /></div>
          <div className='flex justify-between w-full' >
            <FaAws />
            <SiMicrosoftazure />
            <DiGoogleCloudPlatform />
          </div>
        </IconContext.Provider>
      </div></div>
    <div className='flex flex-col w-full md:flex-row md:justify-around items-center lg:px-16' >
      <div data-ref='front' className={`flex justify-start h-auto w-auto feedback-card p-6 rounded-lg my-5 min-w-[300px] max-w-[300px]`}>
        <IconContext.Provider value={{ color: "white", size: "3em", className: "transition  hover:scale-125 ml-3" }}>
          <div><CgScreen className='mr-5' /></div>
          <div className='flex justify-between w-full' >
            <FaAngular />
            <FaReact />
            <FaVuejs />
          </div>
        </IconContext.Provider>
      </div>

      <div data-ref='back' className={`flex flex-row justify-start h-auto w-auto feedback-card p-6 rounded-lg my-5 min-w-[300px] max-w-[300px]`}>
        <IconContext.Provider value={{ color: "white", size: "3em", className: "transition  hover:scale-125 ml-3 " }}>
          <div><RiServerFill className='mr-5' /></div>
          <div className='flex justify-between w-full' >
            <SiDotnet />
            <FaPython />
            <FaNode />
          </div>
        </IconContext.Provider>
      </div>

      <div data-ref='BD' className={`flex justify-start h-auto w-auto feedback-card p-6 rounded-lg my-5 min-w-[300px] max-w-[300px]`}>
        <IconContext.Provider value={{ color: "white", size: "3em", className: "transition  hover:scale-125 ml-3" }}>
          <div><FaDatabase className='mr-5' /></div>
          <div className='flex justify-between w-full' >
            <SiMicrosoftsqlserver />
            <SiMongodb />
            <DiPostgresql />
          </div>

        </IconContext.Provider>
      </div>

    </div>
  </section>
)

export default Technologies