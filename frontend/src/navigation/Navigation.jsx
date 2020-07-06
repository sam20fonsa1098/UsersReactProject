import React from 'react';
import {Link} from 'react-router-dom';

import './Navigation.css';

export default props => {
    return (
        <aside className = "Navigation">
            <nav className="menu">
                <Link to="/">
                    <i className = "fa fa-home"></i> Begin
                </Link>
                <Link to="/users">
                    <i className = "fa fa-users"></i> Users
                </Link>
            </nav>
        </aside>
    );
}