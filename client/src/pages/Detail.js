import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';
import background from '../assets/bg-crop.png';
import gsap from 'gsap';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });

  };

  const myRef = useRef(null);

    useEffect(() => {
        let fromVar = gsap.from(myRef.current, {
            opacity: 0,
            duration: 2,
            y: 40,
            immediateRender: false,
        });
        return () => {
            fromVar.kill();
        };
    }, []);

    const webDev = useRef(null);


  return (
    <>
      {currentProduct && cart ? (
        <div className="container-detail w-full h h-screen">
          <img src={background} className="w-full h-screen" />
          <div className="absolute w-full h-[100vh] inset-0 bg-black opacity-50"></div>
          <div ref={myRef} class="absolute top-0 w-full h-full flex flex-col justify-center text-black text-center">
            <h1 className='text-8xl text-green-600 h-[20vh] text-center font-serif font-bold'>
              Entre´ Display
            </h1>
          <Link to="/menu">← Back to Products</Link>
          <Cart />
          
          
      <div class=" flex justify-center items-center">
      <img className=' h-[50vh] w-auto object-cover pl-32'
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          /> 
          <ul className='items-center w-[50vw] h-[45vh] mx-12 px-20 text-white backdrop-sepia-0 bg-white/30'>

          <li class=" py-4 text-6xl font-bold text-green-500">{currentProduct.name}</li>

          <li class="text-2xl py-9">{currentProduct.description}</li>

          <li class="text-3xl py-8">
            <strong>Price: </strong>${currentProduct.price}{' '}
           </li> 
           
           <div class="flex justify-center items-center mb-2">
           <button class="mx-2 text-black text-lg font-semibold bg-green-400 py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 " onClick={addToCart}>Add to Cart</button>
            <button class="mx-2 text-black cursor-pointer text-lg font-semibold bg-red-400 py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 "
              disabled={!cart.find((p) => p._id === currentProduct._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
            </div>
            </ul>
            </div>
            </div>
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      {/* <Cart /> */}
    </>
  );
}

export default Detail;
