import React from 'react'
import styles from '../style'
import { wsp } from '../assets'

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-white p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            {/* <span className='text-devil-red'>
              Get
            </span> */}
          </p>
          <img src={wsp} alt="Arrow" className='w-[70px] h-[70px] object-contain' />
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-devil-red'>
            <span className='text-devil-red'>Contáctanos</span>
          </span>
        </p>
      </div>
    </div>
)

export default GetStarted