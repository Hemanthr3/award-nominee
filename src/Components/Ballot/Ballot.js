import React, { Suspense } from 'react';
import { useEffect,useState } from 'react';
import api from '../../Api/Api'
import Category from '../Category/Category';


const Ballot = () => {
  const [nomineeData, setNomineeData] = useState([])

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
   
    <div className='ballot w-full flex flex-col gap-4'>
     
    {nomineeData.length > 0 && nomineeData.map(((category,index) => {
      return (
        <Category category={category} key={category.id} />
      )
    }))}
    
    </div>
    
  )
}

export default Ballot;


function Loading() {
  return <h2>Loading...</h2>;
}