import {Link, useNavigate} from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { FaBars, FaHeart, FaRegEnvelope, FaShoppingCart, FaUser } from 'react-icons/fa';
import Navbar from 'react-bootstrap/Nav';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "../navbar.css";

function NavbarFunction() {
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
        <div className="navbarContainer">
            {!token ? ( 
                <Navbar className="nav">
                    <div className="linkContainer">
                    <div className="left">
                            <Link className="Link" to="/menu"><FaBars /> </Link>
                    </div>
                    <div className="center">
                            <Link className="Link" to="/">exCHANGE </Link>
                    </div>
                    <div className="right">
                            <Link className="Link"to="/login">Login </Link>
                            <Link className="Link" to="/register">Register</Link>
                    </div>
                    </div>
                </Navbar> ) : (
                    <Navbar className="nav">
                        <div className="linkContainer">

                        <div className="left">   
                        <span className="burgerMenu"><Link className="Link" to="/menu"><FaBars /> </Link></span>
                        {/* <Link to="/mail"><FaRegEnvelope /></Link> */}
                        </div>

                        <div className="center">
                        <span ><Link className="Link" to="/">exCHANGE </Link></span>
                        </div>
                        
                        <div className="right">
                        <span className=""><Link className="Link" to="/account"><FaUser />{decoded.username}</Link></span>
                        {/* <Link to="/wishlist"><FaHeart /></Link> */}
                        <span className=""><Link  className="Link" to="/cart"><FaShoppingCart /></Link></span>
                        <span className="logout"><Link className="Link" onClick={handleLogout}>Log out</Link></span>
                        </div>

                        </div>
                    </Navbar> 
                )}
        </div>
    );
}

export default NavbarFunction;