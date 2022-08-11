import React from 'react';
import {useDispatch, useSelector} from 'react-redux';


function Cart(){
    const cart = useSelector((state)=>state.cart)
    return (
        <div>
            Cart
        </div>
    );
}

export default Cart;