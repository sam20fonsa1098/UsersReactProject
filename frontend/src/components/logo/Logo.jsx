import React from 'react';
import {Link} from 'react-router-dom';

import './Logo.css'
import logo from '../../assets/logo.png'

export default props => {
    return (
        <aside className = "logo">
            <Link to = "/" className="logo">
                <img src = {logo} alt = "logo"/>
            </Link>
        </aside>
    );
}