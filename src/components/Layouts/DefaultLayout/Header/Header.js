import React from 'react';
import '../../../../assets/Styles/Layouts/Header.scss';
import Logo from '../../../../assets/Images/logo_menu_scroll.webp';
import { FaSearch } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <a href="Index.html" className="logo">
                <img src={Logo} alt="" />
            </a>
            <ul className="navmenu">
                <li><a href="Index.html">Home</a></li>
                <li><a href="Shop.html">Shop</a></li>
                <li><a href="Products.html">Products</a></li>
                <li><a href="Products">page</a></li>
                <li><a href="Products">Sale</a></li>
                <li><a href="Blog.html">Blog</a></li>
                <li><a href="About.html">About</a></li>
                <li><a href="Contact.html">Contact</a></li>
            </ul>
            <div className="nav-icon">
                <a className="menu-icon" href="Products"><FaSearch/></a>
                <a className="menu-icon" href="Login.html"><FaUser /></a>
                <a className="menu-icon" href="ShoppingCart.html"><FaShoppingCart/></a>
                <a className="menu-icon" href="ShoppingCart.html"><FaBars/></a>
            </div>
        </header>
    );
};

export default Header;
