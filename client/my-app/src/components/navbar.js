import {Link, useNavigate} from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    let token;

    return (
        <div>
            {!token ? ( 
                <nav>
                    <Link to="/menu"></Link>
                    <Link to="/"></Link>
                    <Link to="/login"></Link>
                    <Link to="/register"></Link>
                </nav> ) : (
                    <nav>
                        <Link to="/menu"></Link>
                        <Link to="/mail"></Link>
                        <Link to="/"></Link>
                        <Link to="/account"></Link>
                        <Link to="/wishlist"></Link>
                        <Link to="/cart"></Link>
                        <Link>Log out</Link>
                    </nav> 
                )}
        </div>
    );
}

export default Navbar;