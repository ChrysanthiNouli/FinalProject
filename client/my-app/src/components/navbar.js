import {Link, useNavigate} from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { FaBars, FaHeart, FaRegEnvelope, FaShoppingCart, FaUser } from 'react-icons/fa';

function Navbar() {
    const navigate = useNavigate();
    let token;
    let decoded;

    try {
        token = localStorage.getItem("token");
        if (token) {
            decoded = jwtDecode(token);
          }
    } catch (err) {
        console.log(err);
    }

    function handleLogout() {
        if (token) {
            localStorage.removeItem("token");
            navigate("/login");
            window.location.reload()
        } else {
            return;
        }
    }

    return (
        <div>
            {!token ? ( 
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div>
                    <Link to="/menu"><FaBars /> </Link>
                    <Link to="/">exCHANGE </Link>
                    <Link to="/login">Login </Link>
                    <Link to="/register">Register</Link>
                    </div>
                </nav> ) : (
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div>
                        <Link to="/menu"><FaBars /> </Link>
                        <Link to="/mail"><FaRegEnvelope /></Link>
                        <Link to="/">exCHANGE </Link>
                        <Link to="/account"><FaUser />{decoded.username}</Link>
                        <Link to="/wishlist"><FaHeart /></Link>
                        <Link to="/cart"><FaShoppingCart /></Link>
                        <Link onClick={handleLogout}>Log out</Link>
                        </div>
                    </nav> 
                )}
        </div>
    );
}

export default Navbar;