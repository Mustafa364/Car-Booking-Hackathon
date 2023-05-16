import React, { useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
