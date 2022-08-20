import React from 'react'

const button = ({ styles }) => {
  return (
    <button type='button' className={`py-4 px-6 bg-devil-red font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]
    ${styles}`}>
      button
    </button>
  )
}

export default button