import React from 'react'
import './SingleProduct.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTocart, removeFromCart } from '../../../reduxf/Slices/cartSlice';
function SingleProduct({product}) {
    
    const disPatch = useDispatch();
    const cart = useSelector(state => state.cartReducer.cart);
   const curItem = cart.find(item => item.id == product.id);
    const curQunatity = curItem ? curItem.quantity : 0;


    return (
        <div className='SingleProduct'>
            <img className='productImg' src={product.images[0]} alt={product.title} />

            <div className="productInfo">
            <h2 className='productTitle'>{product.title}</h2>
            <p className='ProductPrice'>{product.price}</p>
            </div>
           <div className="cartInfo">
            <button className='button' onClick={()=>disPatch(removeFromCart(product.id))}>-</button>
            <h4>{curQunatity}</h4>
            <button className='button' onClick={()=>disPatch(addTocart(product.id))}>+</button>
           </div>
        </div>
    )
}

export default SingleProduct
