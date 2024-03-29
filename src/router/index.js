import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, ItemDetail, Cart, User, Computers } from "../pages";
import Categories from "../pages/categories";

function Navigation() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="product/:id" element={<ItemDetail />}></Route>
      <Route exact path="/cart" element={<Cart />}></Route>
      <Route exact path="/user" element={<User />}></Route>
      <Route
        exact
        path="categories/:category_product"
        element={<Categories />}
      ></Route>
    </Routes>
  );
}

export default Navigation;
