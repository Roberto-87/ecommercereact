import React from 'react'
import ItemDetail from '../itemDetail'
import './style.css'


function ItemDetailContainer({product}) {
   
    return (
        <div className='container_card' >
           <div className="card" >
        
            <img src={product?.image_product} className="card-img-top" alt={product?.name_product}/>
            <div className="card-body">
                <h5 className="card-title">{product?.name_product}</h5>
                <h6 className="card-text">{product?.category_product}</h6>                
                <p >{product?.price_product}</p>
                <a  ></a>

            </div>

           </div>
           

           </div>
           


        )
}


export default ItemDetailContainer