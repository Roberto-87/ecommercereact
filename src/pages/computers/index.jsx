import React from 'react'
import ItemDetailContainer from '../../components/itemDetailContainer'
import { useFetch } from '../../hooks/useFetch';
import { URL_BASE, URL_ENDPOINTS } from '../../constants/services';

function Computers({selectProduct}) {
    const {
        data: dataProduct,
        error: errorProduct,
        loading: loadingProduct,
      } = 
      useFetch(`${URL_BASE}${URL_ENDPOINTS.PRODUCTS}`);
  
 const filter_section= dataProduct.filter((product)=>product.category_product==='Computers')     

 return filter_section.map(product=>
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


 



export default Computers