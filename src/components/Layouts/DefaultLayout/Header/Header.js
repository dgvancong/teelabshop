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
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/shoping">Shop</a>
                </li>
                <li>
                    <a href="/product">Products</a>
                </li>
                <li>
                    <a href="Products">page</a>
                </li>
                <li>
                    <a href="Products">Sale</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/blog">Blog</a>
                </li>
            </ul>
            <div className="nav-icon">
                <a className="menu-icon" href="Products"><FaSearch/></a>
                <a className="menu-icon" href="/login"><FaUser /></a>
                <a className="menu-icon" href="ShoppingCart.html"><FaShoppingCart/></a>
                <a className="menu-icon" href="ShoppingCart.html"><FaBars/></a>
            </div>
        </header>
    );
};

export default Header;
