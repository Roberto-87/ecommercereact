import React from 'react'
import './styles.css'
import { Link, useLocation, useParams } from 'react-router-dom'
import ItemCount from '../../components/itemCount';
import { useState } from 'react';
import Cart from '../cart';
import { CartContext } from '../../context';
import { useContext } from 'react';


export default function ItemDetail() {  
  const{state}= useLocation();
  const item= [state]
  const [cart, setCart]= useState([])
  const {onDecrease, onIncrease, getItemQuantity}= useContext(CartContext)

  const onHandlerCart=()=>{
    console.log('se agregó el producto al carrito')
  }

  return (
    <div className='container_card_detail container ' >
       <div className='card-detail ' >
          <div className='d-flex justify-content-center'>  
       
       <img src={state?.image} className="card-img-top col col-lg-6" alt={state?.name}/>
        <div className="card-body-detail">
          <div className='container container_text'>
      <Link to={'/'} className="back_home">←</Link>
            <h5 className="card-title-detail"><strong>{state?.name}</strong></h5>
            <h6 className="card-text-detail">{state?.description} </h6>
            <h6 className="card-text-detail">Category: {state?.category}</h6>  
            </div>
            <div className='container_price-detail d-flex'>              
            <p className='card-text-detail'> USD{state?.price}</p> 
            <ItemCount id={state.id} stock={state.stock}> 0</ItemCount>  
            </div>
            <div className='container_button_add'>
            <button className='button' onClick={onHandlerCart}>Add to cart</button>
            </div>
            {/* <div className='container_button_add'>
            <button className='button'>Buy Now</button>
            </div> */}
            <p className='card-text-detail_stock'>Stock: {state.stock}</p>
                </div>
             </div>
        </div>
       </div>        
 
    )
}

