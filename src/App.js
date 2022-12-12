import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import ItemListContainer from "./components/itemListContainer";
import { URL_BASE, URL_ENDPOINTS } from "./constants/services";
import { useFetch } from "./hooks/useFetch";
import ItemDetailContainer from "./components/itemDetailContainer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    data: dataUser,
    error: errorUser,
    loading: loadingUser,
  } = useFetch(`${URL_BASE}${URL_ENDPOINTS.USERS}`);

  const {
    data: dataProduct,
    error: errorProduct,
    loading: errorLoading,
  } = useFetch(`${URL_BASE}${URL_ENDPOINTS.PRODUCTS}`);

  const onHandlerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Navbar onHandlerClick={onHandlerClick} user={dataUser[0]} />
      <ItemListContainer
        grettings={"bienvenid@ a mi market place"}
      ></ItemListContainer>
      <ItemDetailContainer product={dataProduct[0]}></ItemDetailContainer>
      <Sidebar onClose={onHandlerClick} isOpen={isOpen}>
        <h2>Tu compra</h2>
      </Sidebar>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
