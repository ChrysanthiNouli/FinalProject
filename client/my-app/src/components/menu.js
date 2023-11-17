import axios from "axios";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact us</Link>
        </div>
    );
}

export default Menu;