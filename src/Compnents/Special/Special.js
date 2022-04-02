import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {


    const [house,setHouse]=useContext(RingContext) ///// grandpa theke
    return (
        <div>
            <h2>special person</h2>
            <p><small>Gift:{house}</small></p>
            {/* <p><small>House:{house}</small></p> */}
            <button onClick={()=>setHouse(house +1)}> Add House</button>
        </div>
    );
};

export default Special;