import React from 'react'
import { useState } from 'react'
import { close, logo, logov, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex py-6 justify-beetwen items-center navbar'>
      <img src={logov} alt="stackdevil" className="ss:hidden h-[72px]"/>
      <img src={logo} alt="stackdevil" className="hidden ss:block h-[148px]"/>
      
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor pointer text-[16px] ${index === navLinks-length - 1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>

          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w-[44px] h-[44px] object-contain' onClick={() => setToggle((prev) => !prev)}/>
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-10 min-w-[92%] rounded-xl sidebar`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor pointer text-[30px] leading-[60px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>

                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar