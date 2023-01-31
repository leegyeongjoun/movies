import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.scss'

const Navigation = () => {
    return (
        <div className='nav'>
            <ul>
                {/* 현재 페이지 / */}
                <li><Link to='/'>Home</Link></li>
                {/* 이동할 페이지 */}
                <li><Link to='/about'>About</Link></li>
            </ul>
        </div>
    );
};

export default Navigation;