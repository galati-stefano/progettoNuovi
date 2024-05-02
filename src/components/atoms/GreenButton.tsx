import React from 'react';





const GreenButton = ({ children }) => {
   return (
      <button className="bg-[#009379] h-[60px] py-[16px] px-[50px] text-white flex justify-center rounded-2xl font-[600] text-[16px] items-center">
      {children}
      </button>
   );
 };




export default GreenButton;