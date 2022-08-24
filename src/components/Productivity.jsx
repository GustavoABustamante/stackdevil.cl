import React from 'react'
import { producitivity } from '../assets'
import styles, {layout} from '../style'

const productivity = () => (
  <section id='benefits' className={`${layout.sectionReverse} lg:text-left text-center`}>
    <div className={layout.sectionImgReverse}>
      <img src={producitivity} alt='' className='w-[80%] h-[80%] relative z-[5]' />
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'></div>
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'></div>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}`}>
        Mejora tu <br className='sm:block hidden'/>
        productividad
      </h2>
      <p className={`${styles.paragraph} lg:max-w-[470px] mt-5 md:ml-0 sm:mx-auto `}>
        Con nosotros podrás llevar tus procesos al mundo digital y aumentar la productividad de tu empresa.
      </p>
    </div>
  </section>
)

export default productivity