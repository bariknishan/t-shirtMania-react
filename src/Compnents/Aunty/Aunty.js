import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {

    const [house,setHouse]= useContext(RingContext);
    const handleHouseCount = () =>{
     const    newHouseCount= house + 1;
        setHouse(newHouseCount);
    }

    return (
        <div>
            <h2>Hello Aunty</h2>
            <p>house{house}</p> 
           <button onClick={handleHouseCount}> Add A House</button>
        </div>
    );
};

export default Aunty;