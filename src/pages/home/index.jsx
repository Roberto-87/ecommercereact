import './styles.css'
import { useNavigate } from "react-router-dom";
import {getFirestore, collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from "react";
import ItemListContainer from '../../components/itemListContainer';
import FilterMenuItem from '../../components/itemDetailContainer';

function Home() {
  return (
    <div className="App">
      <FilterMenuItem></FilterMenuItem>
      <ItemListContainer grettings={"bienvenid@ a mi market place"}></ItemListContainer>   
    </div>
     
  )        
  
}
export default Home;
