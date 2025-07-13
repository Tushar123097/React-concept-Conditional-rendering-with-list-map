import React, { useState } from "react";
import { useEffect } from "react";

function Useeffectt(){
    // there are more than three varitaion in useeffect
    //first one is simply emply that will run on every rendering

    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(1);

    //variation : 1
    // useEffect(() => {
    //     alert("i will run on every rendering!")
    // })

    //variation : 2
    //in which snippet is empty thats why it will running one time when rendering
    // useEffect(() => {
    //     alert("i will run only once on rendering")
    // },[])

    //varitaion : 3
    //passing more than one snippet inside the array
    useEffect(() => {
        alert("i will runnig on every rendering not like first one")
    },[count, total])

    function handleapp(){
        setCount(count + 1)
    }
    function handledec(){
        setCount(count - 1)
    }
    return(
        <div className="flex flex-col items-center gap-4 mt-10">
           <p className="text-2xl font-semibold">Count: {count}</p>
           
           <button 
           onClick={handleapp}
           className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200"
           >Increase</button>
           <button
           onClick={handledec}
           className="bg-violet-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded transition duration-200"
           >
            Decrease
           </button>

           <div>
             <p className="text-2xl font-semibold">Count: {total}</p>
           <button 
           onClick={handleapp}
           className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200"
           >Increase</button>
           <button
           onClick={handledec}
           className="bg-violet-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded transition duration-200"
           >
            Decrease
           </button>
           </div>
        </div>

    );
}
export default Useeffectt;