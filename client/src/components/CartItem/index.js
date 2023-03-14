import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div className="flex ">
      <div className='flex justify-center items-center'>
        <img
        
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div className='text-xl mt-5'>{item.name}, ${item.price}</div>
        <div>
          <span className='text-xl'>Qty:</span>
          <input className='text-xl text-center'
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
          className='cursor-pointer'
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
            
          >
            🗑️
          </span>
        </div>
        <div className='bg-green-700 h-[1px] mb-5'></div>
      </div>
    </div>
  );
}

export default CartItem;
