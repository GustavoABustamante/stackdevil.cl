import React from 'react'
import styles from '../style'
import { devil, herov } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col pb-6`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={devil} alt='' className='w-[32px] h-[32px]'/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>Súmate </span>
            al gran {" "}
            <span className='text-white'>avance tecnológico </span>
            para tu empresa
          </p>
        </div>

      <div className='flex flex-row justify-beetwen items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
          Abrimos <br className='sm:block hidden' />
          { " " }
          Las <span
          className='text-devil-red'
          >Puertas </span>
          <br className='sm:block hidden' />
          { " " }
        </h1>
        {/* REVISAR SI ESTO VA O NO <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div> */}
      </div>
      
      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
        Hacia El <span className='text-devil-red'>Futuro</span>
      </h1>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Nuestro equipo de expertos utiliza las mejores prácticas para el desarrollo de sus soluciones 100% personalizadas.
      </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={herov} alt="image hero" className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'></div>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
      </div>
      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
)

export default Hero