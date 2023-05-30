import React from 'react'

const Modal = () => {
  return (
    <div className='w-full flex justify-center items-center h-[220px] md:w-[600px] md:h-[400px]  rounded-md bg-slate-100 fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <span className='text-2xl'>Selections are updated. Thank You!</span>
    </div>
  )
}

export default Modal