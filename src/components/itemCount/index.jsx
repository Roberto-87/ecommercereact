import React from 'react'
import './styles.css'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context'

function ItemCount({id, product, decrease, increase, numberOfItem, stock}) {
  const cart= useContext(CartContext)


  const  [contador, setContador]=useState(0)
  
  const sumar=()=>{
    if(contador< stock){
    setContador(contador+1)
    }
  
   
  }
  const restar=()=>{
    if(contador >0){
    setContador(contador-1)
  }}

return (
    <div className='container_buttons_add'> 
        <a class="btn btn-secondary button_detail" onClick={restar}  disabled={numberOfItem===stock} role="button" aria-disabled="true" >-</a>
             <p>{contador}</p>
        <a class="btn btn-secondary button_detail" onClick={sumar} role="button" text={contador} aria-disabled="true">+</a>
    </div>
  )
}

export default ItemCount