import React from 'react'
import { ourServices } from '../constants'
import styles, { layout } from '../style'

const Card = ({icon, title, content, index}) => (
  <div className={`md:flex md:flex-row p-6 rounded-[20px] ${index !== ourServices.length - 1 ? 'mb-1' : 'mb-0'} feature-card`}>
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
    <section id='beneficios' className={`${layout.section} lg:text-left text-center`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          ¿Que ofrecemos? <br className='sm:block hidden'/>
          Acompañarte en cada paso
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 md:ml-0 sm:mx-auto`}>
          Para cada servicio que ofrecemos contamos con profesionales que te guiarán y acompañaran en cada paso.
        </p>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {ourServices.map((service, index) => (
          <Card key={service.id} {...service} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default services