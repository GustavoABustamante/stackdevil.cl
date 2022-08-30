import React from 'react'
import { card, contact } from '../assets'
import styles, { layout } from '../style'
import { contacts } from '../constants'

const Contact = () => (
  <section className={layout.section}>
    <div className={`${layout.sectionInfo} lg:text-left text-center`}>
      <h2 className={styles.heading2}>
        ¿Necesitas atención
        <br className='sm:block hidden' />
        {" "}
        Personalizada?
      </h2>
      <p className={`${styles.paragraph} lg:max-w-[470px] max-w-full lg:ml-0 us:mx-auto`}>
      ¿Tienes problemas informáticos? 
      <br/>
      ¡Haz clic aquí y contáctanos!
      </p>
      <div className='flex us:flex-col xs:flex-row flex-wrap lg:justify-start items-center justify-center  w-[100%] sm:mt-10 mt-6'>
        {contacts.map((contact, index) => (
          <a target="_blank" href={contact.link} key={contact.id} className={`
          ${index === contacts.length - 1 ? 'mr-0' : 'xs:mr-3'}
          mb-3 flex items-center w-[144px] h-[60px] cursor-pointer bg-black rounded-lg text-white drop-shadow-lg hover:scale-110 ease-in-out duration-300`}>
            <img src={contact.icon} alt="" className='w-[55px] h-[32px] object-contain cursor-pointer' />
            <div>
              <p className={`font-poppins font-normal text-white text-[12px] leading-[8px] max-w-[470px]`}>Contáctanos </p>
              <span className='font-semibold'>{contact.value}</span>
            </div>
            {/* <a href={`#`}>
              {nav.title}
            </a> */}

          </a>

        ))}
      </div>
    </div>
    <div className={layout.sectionImg}>
      <img src={contact} alt="" className='w-[180%] h-[100%]' />
    </div>
  </section>
)

export default Contact