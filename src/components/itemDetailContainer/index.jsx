import React, {useContext} from 'react'
import './style.css'
import ItemCount from '../itemCount'
import { CartContext } from '../../router'


function ItemDetailContainer({product, selectProduct}) {

  return product.map(product=>            
    <div className='container_card container-fluid' >
               <div className="card" onClick={()=>selectProduct(product)}>
             <img src={product?.image_product} className="card-img-top" alt={product?.name_product}/>
               <div className="card-body">
                   <h2 className="card-title">{product?.name_product}</h2> 
                   <h6 className="card-text">{product?.category_product}</h6>                
                   <p className='card-price'>USD{product?.price_product}</p>
               </div>
   
              </div>
                          
              </div>                      
                 
                 )    
                 
                 
                }
                
             

export default ItemDetailContainer