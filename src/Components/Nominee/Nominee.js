import React from 'react'

const Nominee = ({nominee}) => {
    console.log('nominee',nominee)
  return (
    <div className='text-2xl text-red-500'>{nominee?.title}</div>
  )
}

export default Nominee