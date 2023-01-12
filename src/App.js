import React from "react";
import { useFetch } from "./hooks/useFetch";

import Navbar from "./components/navbar";
import { useState, useContext } from "react";
import Sidebar from "./components/sidebar";
import "./App.css";
import Navigation from "./router";
import { Link, useNavigate } from "react-router-dom";
import { CartProvider, CartContext } from "./context";
import { Cart, User } from "./pages";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);

  const onHandlerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <CartProvider>
        <Navbar
          onHandlerClick={onHandlerClick}
          numberOfItems={cart.length}
          // user={dataUser[0]}
          // product={dataProduct}
        >
          {" "}
        </Navbar>
        <Sidebar onClose={onHandlerClick} isOpen={isOpen}>
          <Link to="/cart" className="tu_compra">
            Tu compra
          </Link>
        </Sidebar>
        <Navigation></Navigation>
      </CartProvider>
    </div>
  );
}

export default App;
