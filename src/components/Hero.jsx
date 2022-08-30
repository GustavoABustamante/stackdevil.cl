import React from 'react'
import styles from '../style'
import { devil, herov } from '../assets'

const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col pb-6 lg:text-left text-center`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='md:ml-0 sm:mx-auto flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
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
          Te guiamos <br className='sm:block hidden' />
          { " " }
          Hacia el <span
          className='text-devil-red'
          >Futuro </span>
        </h1>
      </div>

      <p className={`${styles.paragraph} lg:max-w-[470px] max-w-full mt-5`}>
        Nuestro equipo de profesionales utiliza las mejores prácticas para el desarrollo de soluciones personalizadas.
      </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={herov} alt="image hero" className='w-[90%] relative z-[5]' />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'></div>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
      </div>
    </section>
)

export default Hero