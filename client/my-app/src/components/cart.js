import { React, useEffect, useState }from "react";
import Product from "../components/product.js";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import axios from "axios";
import "../components/cart.css";
 
const Cart = ({ addToCart, readCartItems }) => {
 let [cartItems, setCartItems] = useState([]);
 let token = localStorage.getItem("token");
  //let productId = cart;
  const shippingPrice = 0;

   readCartItems = () => {
    try {
      axios
      .get("http://localhost:8080/cart", {headers:{Authorization:`Bearer ${token}`}})
      .then((res) => setCartItems(res.data))
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    readCartItems();
  }, []);

  async function removeFromCart(productId) {
    if (window.confirm("Do you want to remove this product from your cart?")) {
      try {
          let res = await axios
          .delete(`http://localhost:8080/cart/${productId}`, {headers:{Authorization:`Bearer ${token}`}});
          alert(res.data.msg);
          readCartItems();
      } catch(err) {
          console.log("Cannot remove product from cart, ", err);
      }
    } else {
      return;
    }
  }
  return (
    <div className="cartProductContainer">
      <table className="cartProductTable">
      <h2 className="myCart">My Cart</h2>
       {cartItems.length === 0 && <div className="emptyCart">There is nothing here<Link className="cartLink" to="/">, continue shopping</Link></div>}
        {cartItems.map((cartItem) => (
          <tr className="cartProductCard" key={cartItem._id}>
            <tr className="cartProductCard">{cartItem._id}</tr>
              <button className="removeBtn" onClick={() => removeFromCart(cartItem)}>
                X
              </button>{' '}
              {/* <button onClick={() => addToCart(item)} className="add">
                +
              </button> */}
            </tr>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="shipping">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
              € {shippingPrice.toFixed(2)}
              </div>
            </div>
            <hr />
            <div className="checkoutContainer" >
              <button className="checkout" onClick={() => alert("Let's Checkout!")}>
                Checkout
              </button>
            </div>
          </>
        )}
      </table>
    </div>
  );
}

export default Cart;