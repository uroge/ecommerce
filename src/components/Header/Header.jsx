import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Header.scss';

import CartIcon from '../CartIcon/CartIcon';

const Header = (props) => (
    <div className="header">
    <Link className="header__logo-container" to="/">
        <img src={Logo} alt="Logo" className="header__logo"/>
    </Link>
    <div className="header__options">
        <Link className="header__options-single" to="/">HOME</Link>
        <Link className="header__options-single" to="/shop"><CartIcon /></Link>
    </div>
</div>
);

export default Header;