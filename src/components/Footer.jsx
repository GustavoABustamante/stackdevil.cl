import React from 'react'
import styles from '../style'
import {logo, logov} from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
          <div className='flex-[1.5] flex flex-col sm:flex-row items-center justify-start mx-auto'>
            <img src={logo} alt="stackdevil" className='w-[266px] h-[124px] object-contain' />
            <p className={`${styles.paragraph}  mt-4 ss:mt-0 max-w-[310px] md:text-left text-center`}>
              Encuentra la solución perfecta para tus necesidades.
            </p>
          </div>
          <div className='flex-[1.5] w-full flex flex-row justify-around flex-wrap md:mt-0 mt-10'>
            {footerLinks.map((footerLink) => (
              <div key={footerLink.id} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                  {footerLink.title}
                </h4>
                <ul className='list-none mt-4'>
                  {footerLink.links.map((link, index) => (
                    <li key={link.id} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.length - 1 ? 'mb-4' : 'mb-0'}`}>
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
          <p className='font-poppins font-normal text-[18px] leading-[27px] text-white'>
            2022 StackDevil. Todos los derechos reservados.
          </p>

          <div className='flex flex-row md:mt-0 mt-6'>
            {
            socialMedia.map((social, index) => (
              <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
            ))
            }
          </div>
        </div>
    </section>
)

export default Footer