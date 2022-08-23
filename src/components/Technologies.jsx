import React from 'react'
import styles from '../style'
import { IconContext } from "react-icons";
import { FaJs, FaAngular, FaReact, FaVuejs, FaBootstrap, FaSass, FaNode, FaPython, FaRust, FaRedhat, FaDocker } from "react-icons/fa";
import { DiPostgresql, DiMysql, DiWindows } from "react-icons/di";

const Technologies = () => (
    <section className='mt-6 mb-16 px-4'>
      <div className='pb-10 text-center'>
        <h4 className={`${styles.paragraph} lg:max-w-[470px] mt-5 mx-auto`}>
          Asocia tu marca con las mejores tecnologías
        </h4>
      </div>
      <div className={`${styles.flexCenter} justify-between w-full`}>
        <IconContext.Provider value={{ color: "white", size: "3em"  }}>
          <DiWindows />
          <FaJs />
          <FaAngular />
          <FaReact />
          <FaVuejs />
          <FaBootstrap />
          <FaSass />
          <FaPython />
          <FaNode />
          <FaRust />
          <FaDocker/>
          <FaRedhat />
          <DiMysql />
          <DiPostgresql />
        </IconContext.Provider>
      </div>
    </section>
)

export default Technologies