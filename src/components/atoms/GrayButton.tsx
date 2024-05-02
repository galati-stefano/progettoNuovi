import React from 'react';





const GrayButton = ({ children },{classNamea}) => {
   return (
      <button className={`bg-[#E5F4F2] h-[60px] py-[16px] px-[50px] text-[#009379] flex justify-center rounded-2xl font-[600] text-[16px] items-center ${classNamea}`}>
      {children}
      </button>
   );
 };




export default GrayButton;