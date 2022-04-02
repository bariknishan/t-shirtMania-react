import React, { createContext, useState } from 'react';
import './Grandapa.css';
import Uncle from '../Uncle/Uncle';
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty';


/// context api
/// call crate context with a dafaoult a vlue
/// set a variiable of ther context value 
// male sure you export the context to use it other places 
/// provide a value
/// to consume the context from chiled component
/// use context hooks and pass it to the children
  export   const RingContext= createContext('diamond');

const Grandpa = () => {
    const [house,setHouse]= useState(1);

    const ornaments= 'Gold Ring';
    const handleByHouse=()=>{
        const newHouseCount= house + 1;
        setHouse(newHouseCount)
    }

    return (
      <RingContext.Provider  value={[house,setHouse]}>


<div className='grandpa'>
        <h3>GrandPa</h3>
        <button onClick={handleByHouse}>Buy a House</button>
        <p> house:{house}</p>
           <div style={{display:'flex'}}>
           <Father  house={house} ></Father>
            <Uncle  house={house} ></Uncle>
            <Aunty  house={house} ></Aunty>
           </div>
        </div>
      </RingContext.Provider>
    );
};

export default Grandpa;