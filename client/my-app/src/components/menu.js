import { Link } from "react-router-dom";
import { React } from "react";
//import { slide as Menu } from 'react-burger-menu';

const MenuList = () => {
    return (
        <div>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact us</Link>
        </div>
    );
}
export default MenuList;