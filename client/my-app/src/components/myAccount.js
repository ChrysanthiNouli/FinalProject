import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/myAccount.css";

const Account = () => {
    return (
        <div className="accountBackground">
            <table className="linkList">
            <th><h2 className="accountTitle">My account</h2></th>
            <tr className="tr"><Link className="accountLink" to="/form">Add a product to exchange</Link></tr>
            <tr className="tr"><Link className="accountLink" to="/orders">My Orders</Link></tr>
            </table>
        </div>
    )
}

export default Account;