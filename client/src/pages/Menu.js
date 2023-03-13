import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import '../../src/index.css'

const Menu = () => {
  return (
    <div>
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Menu;
