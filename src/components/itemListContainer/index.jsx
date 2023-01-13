import {useState, useEffect} from 'react'
import './styles.css'
import { useParams, useNavigate } from 'react-router-dom'
import {  getFirestore, collection, getDocs, query, where, limit, addDoc, doc} from 'firebase/firestore';
import ItemDetailContainer from '../itemDetailContainer';

function ItemListContainer({grettings}) {

  const {categoryId} = useParams()
  const [loading, setLoading]= useState()
  const [product, setProduct]= useState()
  

  useEffect(() => {
    const queryDb= getFirestore()
    const queryCollection= collection(queryDb, 'products');
    getDocs(queryCollection)
    .then(res=> setProduct(res.docs.map(product=> ({id:product.id,...product.data()}))))


    const getData = async () => {
        setLoading(true)
        const db = getFirestore();
        const queryRef = query(db, "products")
        
        const response = await getDocs(queryRef);
        const productos = response.docs.map((doc) => {
          setProduct( {
            ...doc.data(),
            id: doc.id,
          });
         
         });
  
        return productos
      };
      getData();
  }, [categoryId])
   

   const navigate= useNavigate()   
   const onHandlerSelect=(product)=>{
   navigate(`/product/${product.id}`,{state: product})
   }


  return (
    <div className='container_grettings'>
     <ItemDetailContainer productos={product}   selectProduct={onHandlerSelect}></ItemDetailContainer>
    </div>

  )
}

export default ItemListContainer

//<ItemDetailContainer product={product} selectProduct={onHandlerSelect}></ItemDetailContainer>   
/* 
const queryRef = !categoriaId
          ? collection(db, "products"): queryRef(         collection(db, "products")
          );

        const response = await getDocs(queryRef);
        const productos = response.docs.map((doc) => {
          const newProduct = {
            ...doc.data(),
            id: doc.id,
          };
     
          
          return newProduct;
        });
        setTimeout(() => {
          setProduct(productos);
          setLoading(false)
        }, 2000)
      };
      getData();
    }, [categoriaId]) */
  