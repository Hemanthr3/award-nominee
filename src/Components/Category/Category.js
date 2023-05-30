import React, { useState } from "react";
import Nominee from "../Nominee/Nominee";

const Category = ({ category }) => {
    const [selectedNominee, setSelectedNominee] = useState('')
    console.log('selected nominee is',selectedNominee)

  return (
    <div className="flex flex-col gap-4 md:gap-8 mt-4 ">
      <div className="bg-gray-400 p-2  ">{category?.title}</div>
      <div className="flex flex-col gap-4 md:gap-8 sm:grid sm:grid-cols-3 md:grid md:grid-cols-4 text-center ">
      {category?.items?.length > 0 && category?.items.map((nominee,index) => {
        return (
            <Nominee nominee={nominee} key={nominee.id} setSelectedNominee={setSelectedNominee} selectedNominee={selectedNominee}/>    
            )
      })}
      </div>
    </div>
  );
};

export default Category;
