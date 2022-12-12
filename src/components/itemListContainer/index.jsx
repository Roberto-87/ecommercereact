import React from 'react'
import './styles.css'

function ItemListContainer({grettings}) {
  return (
    <div className='container_grettings'>
    <h1 className='grettings'>{grettings}</h1>
    </div>
  )
}

export default ItemListContainer