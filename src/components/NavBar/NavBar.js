import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-blue-100 h-">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-2xl font-bold">Tera Quiz</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Topics</Link></li>
                        
                        <li><Link to='/statistics'>Statistics</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;