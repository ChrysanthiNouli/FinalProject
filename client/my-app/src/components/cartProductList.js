import Cart from "../components/cart.js";
import Product from "../components/product.js";

function CartProductList ({ cartItems, readCartItems }) {
    return (
        <div>
            <Cart cartItems={cartItems} readCartItems={readCartItems}/>
            {/* <Product products={products} readProducts={readProducts}/> */}
        </div>
    )
}

export default CartProductList;