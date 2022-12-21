import React from 'react'
import './styles.css'


function ItemCount({id, product, decrease, increase, numberOfItem, stock}) {

return (
    <div className='container_buttons_add'> 
        <a class="btn btn-secondary button_detail" onClick={()=>increase(id)} disabled={numberOfItem===stock} role="button" aria-disabled="true" >+</a>
        <input disabled className='input_add bg-light' type='text' value={numberOfItem} placeholder= {0} ></input>
        <a class="btn btn-secondary button_detail" onClick={()=>decrease(id)} role="button" aria-disabled="true">-</a>
    </div>
  )
}

export default ItemCount