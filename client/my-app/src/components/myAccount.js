import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Account = () => {
    return (
        <div>
            <h2>My account</h2>
            <Link to="/form">Add a product to exchange</Link>
            <Link to="/orders">My Orders</Link>
        </div>
    )
}

export default Account;