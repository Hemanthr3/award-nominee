import { Button, Card } from '@mui/material'
import Image from 'mui-image'
import React from 'react'

const Nominee = ({nominee,selectedNominee,setSelectedNominee}) => {
  // console.log('nominee is',selectedNominee === nominee.id)
  return (
    <div className={`w-full md:w-[230px] h-[220px] ${selectedNominee !== nominee.id ? "bg-gray-400/30" : "bg-gray-400"} p-2 rounded-md flex flex-col items-center justify-around `}>
      <div>{nominee?.title}</div>
      
        <img src={nominee?.photoUrL} alt={nominee?.id} className="rounded-full h-[100px] w-[100px]" object-fit='fill'/>
      
      <Button variant='contained' onClick={()=>{
        setSelectedNominee(nominee?.id)
        
      }}>Select Nominee</Button>
    </div>
  )
}

export default Nominee