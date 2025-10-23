import React from "react";

const BreakpointTest = () => {
  return (
    <div className="p-6 space-y-4">
      <div className="h-32 bg-red-500 xs:bg-yellow-500 sm:bg-green-500 md:bg-blue-500 lg:bg-purple-500 xl:bg-pink-500 2xl:bg-orange-500 flex items-center justify-center text-white font-bold">
        Resize me! 🌈
      </div>
      <p>
        Default: Red  
        <br />  
        XS ≥ 480px: Yellow  
        <br />  
        SM ≥ 640px: Green  
        <br />  
        MD ≥ 768px: Blue  
        <br />  
        LG ≥ 1024px: Purple  
        <br />  
        XL ≥ 1280px: Pink  
        <br />  
        2XL ≥ 1536px: Orange
      </p>
    </div>
  );
};

export default BreakpointTest;
