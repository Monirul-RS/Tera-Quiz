import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className="navbar  bg-sky-100 ">
                <div className="flex-1 pl-12">
                    <a className="btn btn-ghost normal-case text-3xl font-bold">Tera Quiz</a>
                </div>
                <div className="flex-none pr-12">
                    <ul className="menu menu-horizontal p-0 text-2xl">
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