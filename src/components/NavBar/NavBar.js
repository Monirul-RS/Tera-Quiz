import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const NavBar = () => {
    const [isSideMenuOpen, setisSideMenuOpen] = useState(false)

    const showSideMenu = () => {
        (isSideMenuOpen) ? setisSideMenuOpen(false) : setisSideMenuOpen(true)
    }

    return (

        <div>
            <div className=" w-full h-16 lg:px-14 bg-sky-100 text-blue-600 flex flex-row justify-between items-center">
                <div className="brand-logo text-3xl font-bold px-2">Tera Quiz</div>
                <ul className="hidden menu-list lg:flex lg:flex-row text-xs font-bold">
                    <li className="menu-list-item px-2 text-xl"><Link to='/'>Topics</Link></li>
                    <li className="menu-list-item px-2 text-xl"><Link to='/statistics'>Statistics</Link></li>
                    <li className="menu-list-item px-2 text-xl"><Link to='blog'>Blog</Link></li>
                </ul>

                    <button onClick={() => { showSideMenu() }} className="lg:hidden menu-button">
                        {(isSideMenuOpen) ? <XMarkIcon onClick={() => setisSideMenuOpen(!true)} className="w-8 h-8 px-2" ></XMarkIcon> : <Bars3Icon onClick={() => setisSideMenuOpen(!true)} className="w-8 h-8 px-2"></Bars3Icon>}
                    </button>
                
                {(isSideMenuOpen) ? SideMenu() : ''}
            </div>
        </div>
    )


}

function SideMenu() {
    return (
        <div className="fixed w-1/2 sm:w-1/4 lg:hidden bg-sky-100 top-16 right-0">
            <ul className="menu-list flex flex-col text-xs font-bold">
                <li className="menu-list-item py-2 text-xl hover:bg-white hover:text-blue-600"><Link to='/'>Topics</Link></li>
                <li className="menu-list-item py-2 text-xl hover:bg-white hover:text-blue-600"><Link to='/statistics'>Statistics</Link></li>
                <li className="menu-list-item py-2 text-xl hover:bg-white hover:text-blue-600"><Link to='/blog'>Blog</Link></li>
            </ul>
        </div>
    )
};


export default NavBar;