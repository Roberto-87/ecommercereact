import React from 'react'

export default function ItemDetail({ product}) {
  return (
    <div className='bg-dark' >
     
      <img src={product?.image_product} className="card-img-top" alt={product?.name_product}/>
      <h5 className="card-title">{product?.name_product}</h5>
      <p className="card-text">{product?.description_product}</p>
      <p>{product?.price_product}</p>
      <button>Comprar</button>
     </div>
  )
}

