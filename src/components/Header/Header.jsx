import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Header.scss';

import { useSelector } from 'react-redux';

import CartIcon from '../CartIcon/CartIcon';
import { GiWallet } from 'react-icons/gi';

const Header = (props) => {
    const walletValue = useSelector(state => state.counter.walletValue);

    return (
    <div className="header">
    <Link className="header__logo-container" to="/">
        <img src={Logo} alt="Logo" className="header__logo"/>
    </Link>
    <div className="header__options">
        <p className="header__wallet"><GiWallet className="header__wallet-icon"/><span>{walletValue}$</span></p>
        <Link className="header__options-single" to="/">HOME</Link>
        <Link className="header__options-single" to="/shop"><CartIcon /></Link>
    </div>
</div>
)};

export default Header;