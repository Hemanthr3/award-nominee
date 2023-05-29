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
      setTimeout(() => {
        setNomineeData(items.slice(0))
      }, 2000);
    } catch(e) {
       console.log(e);
    }
  }
  
  return (
   
    <div className='ballot'>
     <Suspense fallback={<Loading/>}>
    {nomineeData.length > 0 && nomineeData.map(((category,index) => {
      return (
        <Category category={category} key={category.id}/>
      )
    }))}
      </Suspense>
    </div>
    
  )
}

export default Ballot;


function Loading() {
  return <h2>Loading...</h2>;
}