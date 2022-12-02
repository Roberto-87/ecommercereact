import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onHandlerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Navbar onHandlerClick={onHandlerClick} />
      <Sidebar onClose={onHandlerClick} isOpen={isOpen}>
        <h2>Tu compra</h2>
      </Sidebar>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
