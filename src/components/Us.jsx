import React from 'react'
import { founders } from '../constants'
import styles from '../style'
import UsCard from './UsCard'

const Us = () => (
    <section id='us' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative lg:text-left text-center`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full white__gradient'></div>
      <div className='w-full flex justify-beetwen items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={styles.heading2}>¿Quienes sómos? 
          <br className='sm:block hidden'/>
        </h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} lg:text-left max-w-[450px] md:ml-0 ss:mx-auto ss:text-center`}>
            Somos un equipo de desarrolladores apasionados, con el fin común de entregar soluciones potentes, escalables y personalizadas a nuestros clientes.
          </p>
        </div>
      </div>
      <div className='flex flex-wrap justify-center w-full feedback-container relative z-[1]'>
        {founders.map((card) => (
          <UsCard key={card.id} {...card}/>
        ))}
      </div>
    </section>
)

export default Us