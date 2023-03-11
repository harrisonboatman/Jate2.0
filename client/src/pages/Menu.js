import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Menu = () => {
  return (
    <div className="">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Menu;
