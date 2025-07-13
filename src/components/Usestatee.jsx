import React from "react";
import { useState } from "react";

function useStatee(){
    //count is variable
    //setcount is function 
    //usestate(0) is intailize with zero
   const [count, setCount] = useState(0);
    
   function increase(){
   setCount(count + 1)
   }
   function decrease(){
   setCount(count - 1)
   }
   
    return (
        <div className="flex flex-col items-center gap-4 mt-10">
            <p className="text-2xl font-semibold">Count : {count}</p>
           <button 
           onClick={increase}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
           >
            Increase</button>
           <button 
           onClick={decrease}
           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200"
           >
            Decrease </button>

        </div>

    );
}
export default useStatee;