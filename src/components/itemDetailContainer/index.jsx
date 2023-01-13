import React, {useContext} from 'react'
import './style.css'


function ItemDetailContainer({productos, selectProduct, name}) {
  
  return ( 
     <div className='container_card container-fluid' >
               <div className="card" onClick={()=>selectProduct(productos)}>
           <img src={productos?.image} className="card-img-top" alt={name}/>
             <div className="card-body">
                    <h2 className="card-title">{name}</h2> 
                    <h6 className="card-text">{productos?.category}</h6>                
                   <p className='card-price'>USD{productos?.price}</p>
               </div>
   
              </div>
                          
          </div>                   
                 
                    
                 
                 
              )  }
                
             

export default ItemDetailContainer