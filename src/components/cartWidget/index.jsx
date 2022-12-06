import React from 'react'
import './styles.css'

function CartWidget() {
  return (
    <div className='container_cartWidget'>
        <span className='cart'>🛒</span> 
        <span className='number_products'>0</span>           
    </div>
  )
}

export default CartWidget