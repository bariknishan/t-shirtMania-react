import React from 'react';
import './Tshirt.css';

const Tshirt = ({handleAddToCart,tShirt}) => {


    const{ name,price,picture}=tShirt;


    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3> name:{name}</h3>
            <h3>price:${price}</h3>
            <button  onClick={()=>handleAddToCart(tShirt)}>Add To Cart</button>
        </div>
    );
};

export default Tshirt;