import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <Link to="/"><p className='header-text'>BLOG</p></Link>
        </div>
    );
}

export default Header;
