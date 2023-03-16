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
            <h1 className='entre-title lg:text-8xl md:text-6xl sm:text-5xl text-green-600 h-[20vh] text-center font-serif font-bold'>
              Entre´ Display
            </h1>
            <div className=' products-link absolute text-green-500 ring-white lg:ring-2 md:ring-1 sm:ring-0lg:p-[10px] md:p-[7px] sm:p-[3px] lg:text-lg md:text-base sm:text-sm'>
          <Link to="/menu">← Back to Products</Link>
          <Cart />
          </div>
          
      <div class=" flex md:justify-center md:flex-row sm:flex-col items-center ">
      <img className=' lg:h-[50vh] md:h-[40vh] sm:h-[15vh] w-auto object-cover lg:pl-32'
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          /> 
          <ul className='items-center lg:w-[50vw] md:w-[40vw] h-[45vh] mx-12 px-20 text-white backdrop-sepia-0 bg-white/30'>

          <li class=" lg:py-4 md:p-0 sm:p-0 lg:text-6xl md:text-4xl sm:text-xl font-bold text-green-500">{currentProduct.name}</li>

          <li class="lg:text-2xl md:text-xl sm:text-base lg:py-9 md:py-4 sm:py-0">{currentProduct.description}</li>

          <li class="lg:text-3xl md:text-2xl sm:text-lg lg:py-8 md:py-3 sm:py-0">
            <strong>Price: </strong>${currentProduct.price}{' '}
           </li> 
           
           <div class="flex justify-center items-center mb-2">
           <button class="mx-2 text-black lg:text-lg md:text-base font-semibold bg-green-400 lg:py-3 lg:px-4 md:py-2 md:px-3 sm:py-1 sm:px-2 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 " onClick={addToCart}>Add to Cart</button>
            <button class="mx-2 text-black cursor-pointer lg:text-lg md:text-base font-semibold bg-red-400 lg:py-3 lg:px-4 md:py-2 md:px-3 sm:py-1 sm:px-2 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 "
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
    </>
  );
}

export default Detail;
