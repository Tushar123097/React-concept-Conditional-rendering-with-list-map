import React from 'react'

function Studentlist(){
    //List rendering with map
    const data = ["Dr.Strange", "Venom"];
    return(
        <div>
            <ul className='font-bold text-amber-200'>
            {data.map((idx, list) => (
                <li key={list}>{idx}</li>
            ))}
            </ul>
        </div>
    )
}
export default Studentlist;