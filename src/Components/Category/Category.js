import React from "react";
import Nominee from "../Nominee/Nominee";
import { Suspense } from "react";

const Category = ({ category }) => {
  return (
    <>
      <div className="">{category?.title}</div>
      {category?.items?.length > 0 && category?.items.map((nominee,index) => {
        return (
            <Nominee nominee={nominee} key={nominee.id}/>
            )
      })}
    </>
  );
};

export default Category;
