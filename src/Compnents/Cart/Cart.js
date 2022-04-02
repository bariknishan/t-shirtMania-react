import React from 'react';

import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {

    /// conditional rendering option
    /// element variable
    /// ternary operator 
    /// && operator
    let command;
    if (cart.length === 0) {
        command = <p>Please add at least one item</p>

    }
    else if (cart.length === 1) {
        command = <p>Please add more..</p>
    }
    else {
        command = <p><small color='blue'> Thanks for adding item</small></p>
    }

    return (
        <div className='cart-area'>
            <h2>SelectedItem:{cart.length}</h2>

            {
                cart.map(tShirt => <p>{tShirt.name}

                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>

                </p>)
            }
              {cart.length===0 || <p className='orange'>Yes!you are Buying</p>} 
            {cart.length=== 3 && <div className='orange'>
                
                <p>Three Items for specail persons</p>
                </div>}
            {command}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Clear All</button>}
        </div>
    );
};

export default Cart;