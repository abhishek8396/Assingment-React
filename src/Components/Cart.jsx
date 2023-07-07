import React, { useState } from 'react';
import './cart.css';
function Cart() {
  // State to store the cart items
  const [cartItems, setCartItems] = useState([]);

  const [itemsList] = useState([
    { id: 1, name: 'Item 1', price: 10.99 },
    { id: 2, name: 'Item 2', price: 15.99 },
    { id: 3, name: 'Item 3', price: 5.99 },
  ]);



  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCartItems);
  };

  // Function to calculate the subtotal of the cart items
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="shopping-cart">
      <h1>Product List</h1>
      
      {/* Item List */}
      <div className="items-list">
        {itemsList.map((item) => (
          <div className="item" key={item.id}>
            <p>{item.name}</p>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={() => addItemToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      
      {/* Cart Items */}
      <div className="cart-items">
        <h1>Your Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => removeItemFromCart(item)}>Remove</button>
            </div>
          ))
        )}
      </div>
      
      {/* Cart Summary */}
      <div className="cart-summary">
        <p>Total items: {cartItems.length}</p>
        <p>Subtotal: ${calculateSubtotal().toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Cart;
