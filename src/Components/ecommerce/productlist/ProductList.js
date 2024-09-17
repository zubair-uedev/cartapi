import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, loadProducts } from '../../../reduxf/Slices/ProductSlice';
import SingleProduct from '../singleproduct/SingleProduct';
import './ProductList.css'
function ProductList() {
    const dispatch = useDispatch()
    const products = useSelector(state =>state.productReducer.products)
    useEffect(()=>{
        dispatch(fetchData())
        // fetchData();
    },[])
    // async function fetchData() {
    //     const response = await fetch('https://api.escuelajs.co/api/v1/products');    
    //     const data = await response.json();
    //     dispatch(loadProducts(data))
        
    // }
    return (
        <div className='ProductList'>
            {products.map(item => <SingleProduct key={item.id} product={item}/>)}
        </div>
    )
}

export default ProductList
