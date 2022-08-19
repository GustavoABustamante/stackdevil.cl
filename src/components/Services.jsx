import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const Card = ({icon, title, content, index}) => (
  <div className={`md:flex md:flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`lg:mb-0 mb-[20px] mx-auto w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-black-gradient`}>
      <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain'/>
    </div>
    <div className={`lg:text-left text-center flex-1 flex flex-col ml-3`}>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>
)

const services = () => {
  return (
    <section id='beneficios' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          ¿Que ofrecemos? <br className='sm:block hidden'/>
          Acompañarte en cada paso
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Para cada servicio que ofrecemos contamos con profesionales capaces, que te guiarán y acompañaran en cada paso.
        </p>
        <Button styles="mt-10 rounded-full"/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <Card key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default services