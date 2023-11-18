import axios from "axios";
import { useEffect, useState } from "react";

const Cart = () => {
    const [cart, setCart] = useState();

    if (cart) {
        return (
            <div>
                
            </div>
        );
    }
    return (
        <div>
            <h2>My cart</h2>
        </div>
    )
}

export default Cart;