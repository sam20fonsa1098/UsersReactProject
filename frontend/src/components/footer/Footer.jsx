import React from 'react';

import './Footer.css';

export default props => {
    return (
        <footer className = "footer">
            <span>
                Developed with <i className = "fa fa-heart text-danger"></i>
                by <strong>Cod<span className = "text-danger">3</span>r</strong>
            </span>
        </footer>
    );
}