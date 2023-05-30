import { Button } from '@mui/material';
import React, { Suspense } from 'react';
import { useEffect,useState } from 'react';
import api from '../../Api/Api'
import Category from '../Category/Category';
import Modal from '../Modal/Modal';


const Ballot = () => {
  const [nomineeData, setNomineeData] = useState([])
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
   fetchBallotData()
    
  }, [])

  const fetchBallotData = async() => {
    
       try{
        
      const response = await api.getBallotData();
      const {items} = response
      // setTimeout(() => {
        setNomineeData(items.slice(0))
      // }, 2000);
    } catch(e) {
       console.log(e);
    }
  }
  
  return (
   
    <div className='ballot w-full flex flex-col gap-4 pb-6 '>
     
    {nomineeData.length > 0 && nomineeData.map(((category,index) => {
      return (
        <Category category={category} key={category.id} />
      )
    }))}
    <Button variant='contained' className='mt-4' onClick={()=>{
      // window.location.reload()
      setOpenModal(true)
      setTimeout(()=>{window.location.reload()},2000)
    }}>Submit</Button>
    {openModal && 
    <Modal />
    }
    
    </div>
    
  )
}

export default Ballot;


function Loading() {
  return <h2>Loading...</h2>;
}