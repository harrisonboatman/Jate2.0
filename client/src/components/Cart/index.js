import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useMutation } from '@apollo/client';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART, UPDATE_PRODUCTS } from '../../utils/actions';
import './style.css';


// stripePromise returns a promise with the stripe object as soon as the Stripe package loads
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
let cartQuant;
const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  // We check to see if there is a data object that exists, if so this means that a checkout session was returned from the backend
  // Then we should redirect to the checkout with a reference to our session id
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  // If the cart's length or if the dispatch function is updated, check to see if the cart is empty.
  // If so, invoke the getCart method and populate the cart with the existing from the session
  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
      console.log(item.purchaseQuantity)
      const cartQuant = item.purchaseQuantity
    });
    return sum.toFixed(2);
  }

  // When the submit checkout method is invoked, loop through each item in the cart
  // Add each item id to the productIds array and then invoke the getCheckout query passing an object containing the id for all our products
  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="trash">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="cart-no">{state.cart.length}</span>
        </span>
      </div>
    );
  }

  console.log(state.cart.length);

  return (
    
    <div className="cart">
      <div className="close text-right" onClick={toggleCart}>
        [close]
      </div>
      <div className='bg-white rounded-2xl w-full'>
      <h2 className='text-center text-white font-bold my-7 bg-green-700 rounded-lg'>Shopping Cart</h2>
      </div>
      {state.cart.length ? (
        <div className='text-center'>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex justify-center items-center ">
            <div className='font-bold text-xl'>Total: ${calculateTotal()}

            {/* Check to see if the user is logged in. If so render a button to check out */}
            {Auth.loggedIn() ? (
              <button className='text-white bg-green-400 ring-2 ring-green-500 hover:bg-green-600 p-3 rounded-xl ml-5 duration-300' onClick={submitCheckout}>Checkout</button>
            ) : (
              <span className='text-red-600'>(log in to check out)</span>
            )}
            </div>
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything<br></br> to your cart yet!
        </h3>
      )}
    </div>
  );
};

export default Cart;
