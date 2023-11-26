import React from "react";
 
const Cart = (functionalities) => {
  const { cartItems, addToCart, removeFromCart } = functionalities;
  const shippingPrice = 0;
  return (
    <>
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div className="row">
            <div className="col-2">{item}</div>
            <div className="col-2">
              <button onClick={() => removeFromCart(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => addToCart(item)} className="add">
                +
              </button>
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert("Let's Checkout!")}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;