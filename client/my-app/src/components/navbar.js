import {Link, useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";

function Navbar() {
    const navigate = useNavigate();
    let token;
    let decoded;

    try {
        token = localStorage.getItem("token");
        decoded = jwtDecode(token);
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
                <nav>
                    <div>
                    <Link to="/menu">Menu </Link>
                    <Link to="/">exCHANGE </Link>
                    <Link to="/login">Login </Link>
                    <Link to="/register">Register</Link>
                    </div>
                </nav> ) : (
                    <nav>
                        <div>
                        <Link to="/menu">Menu </Link>
                        <Link to="/mail">Messages </Link>
                        <Link to="/">exCHANGE </Link>
                        <Link to="/account">Account </Link>
                        <Link to="/wishlist">Wishlist </Link>
                        <Link to="/cart">Cart </Link>
                        <Link onClick={handleLogout}>Log out</Link>
                        </div>
                    </nav> 
                )}
        </div>
    );
}

export default Navbar;