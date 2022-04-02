import React from 'react';
import Bon from '../Bon/Bon';
import Vai from '../Vai/Vai';
import Myself from '../Myself/Myself';
import './Father.css'

const Father = ({ house }) => {
    return (
        <div>
            <h2>Hello Father</h2>
            <p>house:{house}</p>

           <div className='father'>
           <Myself house={house}  ></Myself>
            <Vai house={house} ></Vai>
            <Bon house={house} ></Bon>
           </div>
        </div>
    );
};

export default Father;