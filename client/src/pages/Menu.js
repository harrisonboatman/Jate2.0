import React, { useEffect, useRef } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import '../../src/index.css'
import { gsap } from "gsap";

function Menu() {

  const myRef = useRef(null);
  useEffect(() => {
    let fromVar = gsap.from(myRef.current, {
      opacity: 0,
      duration: 2,
      x: -190,
      rotate: 180,
      immediateRender: false,
    });
    return () => {
      fromVar.kill();
    };
  }, []);

  return (
    <div>
      <div ref={myRef} className="">
        <div className="menu lg:text-[7rem] md:text-[4rem] sm:text-[2rem] absolute text-green-500 w-1/3 text-center mt-28 ml-10 tracking-wider font-serif">MENU</div>
        <div className="menu-2 lg:text-[7rem] md:text-[4rem] sm:text-[2rem] absolute w-1/3 mt-28 ml-10">MENU</div>
        <div className="menu-3 lg:text-[7rem] md:text-[4rem] sm:text-[2rem] absolute w-1/3 mt-28 ml-10">MENU</div>
      </div>

      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Menu;
