
import { useState } from 'react';
import useTshirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
    const[tShirts,setTshirts]= useTshirts()
    const[cart, setCart]=useState([]);


    const handleAddToCart=(selectedItem)=>{
        const exists= cart.find(tShirt=>tShirt._id === selectedItem._id);
        if (!exists){
            console.log(selectedItem)
            const newCart=[...cart,selectedItem];
            setCart(newCart);
        }
       else{
           alert("item already added");
       }
    }

const handleRemoveFromCart=(selectedItem)=>{
const restItem= cart.filter(tShirt=> tShirt._id !==selectedItem._id);
setCart(restItem);
}
    
    return (
        <div className='home-container'>

         <div className="t-shirt-container">
             {/* <h3>{tshirts.length}</h3> */}
{
    tShirts.map(tShirt=><Tshirt
    
    key={tShirt._id}
    tShirt={tShirt}
    handleAddToCart={handleAddToCart}

    ></Tshirt>)
}


         </div>
         <div className="cart-container">
                <Cart
                
                handleRemoveFromCart={handleRemoveFromCart}
                cart={cart}></Cart>
         </div>
         
        </div>
    );
};

export default Home;