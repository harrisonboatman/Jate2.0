import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price, quantity } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    // <div className="card px-1 py-1">
    //   <Link to={`/products/${_id}`}>
    //     <img alt={name} src={`/images/${image}`} />
    //     <p>{name}</p>
    //   </Link>
    //   <div>
    //     <div>
    //       {quantity} {pluralize("item", quantity)} in stock
    //     </div>
    //     <span>${price}</span>
    //   </div>
    //   <button onClick={addToCart}>Add to cart</button>

    <div class=" mt-10 px-5 scale-75 flex hover:scale-80 hover:ease-in-out min-w-fit " >
        <div class="container bg-white max-w-sm rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">
        <Link to={`/products/${_id}`}>
          <img
            class="rounded-xl"
            src={`/images/${image}`} 
            alt={name}
          />
          </Link>
          <div class="flex justify-between items-center">
            <div>
              <h1 class="mt-5 text-2xl font-semibold">{name}</h1>
              <p class="mt-2"><span className="pr-1">$</span>{price}</p>
            </div>
            <div>
              <button onClick={addToCart} class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>    
  
 
  );
}

export default ProductItem;


// Need to find a way to use Map method in order to get cards in columns

{/* <div class="container mx-auto">
    <div class="grid grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product._id} class="bg-white shadow-md rounded-xl overflow-hidden">
          <Link to={`/products/${product._id}`}>
            <img
              class="w-full h-64 object-cover"
              src={`/images/${product.image}`} 
              alt={product.name}
            />
          </Link>
          <div class="p-4">
            <h1 class="text-lg font-semibold mb-2">{product.name}</h1>
            <p class="text-gray-600">${product.price}</p>
            <button onClick={addToCart} class="mt-4 text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </div> */}