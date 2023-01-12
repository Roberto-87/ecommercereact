import React, {useContext} from 'react'
import './style.css'


function ItemDetailContainer({product, selectProduct}) {
  
  return ( 
   product.map(product=>            
     <div className='container_card container-fluid' >
               <div className="card" onClick={()=>selectProduct(product)}>
           <img src={product?.image} className="card-img-top" alt={product?.name}/>
             <div className="card-body">
                    <h2 className="card-title">{product?.name}</h2> 
                    <h6 className="card-text">{product?.category}</h6>                
                   <p className='card-price'>USD{product?.price}</p>
               </div>
   
              </div>
                          
          </div>                   
                 
                    
                 
                 
              ))  }
                
             

export default ItemDetailContainer