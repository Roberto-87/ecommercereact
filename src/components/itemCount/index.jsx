import React from 'react'
import './styles.css'
import { useState } from 'react'


function ItemCount({id, product, decrease, increase, numberOfItem, stock}) {

  const  [contador, setContador]=useState(0)

  const sumar=()=>{
    setContador(contador+1)
  }
  const restar=()=>{
    setContador(contador-1)
  }

return (
    <div className='container_buttons_add'> 
        <a class="btn btn-secondary button_detail" onClick={sumar}  disabled={numberOfItem===stock} role="button" aria-disabled="true" >+</a>
        

        <input disabled className='input_add bg-light' type='text' value={numberOfItem} placeholder= {0} ></input>

        <a class="btn btn-secondary button_detail" onClick={restar} role="button" text={contador} aria-disabled="true">-</a>
        <p>contador{contador}</p>
    </div>
  )
}

export default ItemCount