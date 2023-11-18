import Cart from "../components/cart.js";

function CartProductList ({ cart,  }) {
    return (
        <div>
            <Cart Cart={Cart} />
        </div>
    )
}

export default CartProductList;