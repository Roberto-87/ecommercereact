import './styles.css'
import { useNavigate } from "react-router-dom";
import {getFirestore, collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from "react";
import ItemListContainer from '../../components/itemListContainer';
import ItemDetailContainer from '../../components/itemDetailContainer';

function Home() {

 const [product, setProduct]= useState()
  const [loading, setLoading]= useState()

  useEffect(()=>{
    setLoading(true)
    const db= getFirestore();

    const itemCollection= collection(db, 'products');
    getDocs(itemCollection).then((snapshot)=>{
       if(snapshot.size===0){
        console.log('No results')
       }     
    setProduct(snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()
       })))    
 
    })
     },[])

const navigate= useNavigate()  

   const onHandlerSelect=(product)=>{
    navigate(`/product/${product.id}`,{state: product})
  }

  return (
    <div className="App">
      <ItemListContainer grettings={"bienvenid@ a mi market place"}></ItemListContainer>   
       <ItemDetailContainer product={product} selectProduct={onHandlerSelect}></ItemDetailContainer>   

    </div>
     
  )        
  
}
export default Home;
