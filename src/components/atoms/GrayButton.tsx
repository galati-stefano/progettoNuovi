import React from 'react';
import { ReactNode } from 'react';



const GrayButton = (props : {children: ReactNode, classNamea?: string}) => {
   return (
      <button className={`bg-[#E5F4F2] h-[60px] py-[16px] px-[50px] text-[#009379] flex justify-center rounded-2xl font-[600] text-[16px] items-center ${props.classNamea}`}>
      {props.children}
      </button>
   );
 };




export default GrayButton;