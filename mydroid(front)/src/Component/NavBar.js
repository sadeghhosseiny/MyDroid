import React, { useState } from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

function NavBar() {


    const UserId = localStorage.getItem("userId");

    const clearStorage = () => {
        // localStorage.clear();
        window.location.reload();
    }

    return (
        <nav className={`navbar navbar-expand navbar-dark bg-dark py-3 justify-content-between ${styles.NavBar}`}>
            <a className={`${styles.navbarBrand} navbar-brand`}>
                MD
            </a>

            <div className={`mr-auto d-flex ${styles.itemsNavbar}`} id="navbarNav">
                <ul className={`navbar-nav ml-4 ${styles.navUl} `}>
                    <Link to="/" >
                        <li className={`nav-item ${styles.navItem}`}>
                            <a className={`nav-link ${window.location.pathname == "/" && styles.activeLink}`} >Home</a>
                        </li>
                    </Link>
                    <Link to="/Games" >

                        <li className={`nav-item ${styles.navItem}`}>
                            <a className={`nav-link ${window.location.pathname == "/Games" && styles.activeLink}`} >Games</a>
                        </li>
                    </Link>
                    <Link to="/Apps" >

                        <li className={`nav-item ${styles.navItem}`} >
                            <a className={`nav-link ${window.location.pathname == "/Apps" && styles.activeLink}`} >Apps</a>
                        </li>
                    </Link>
                </ul>
                <div className="d-flex ml-auto mt-1">


                    {UserId && <span className="mx-4">

                        <Link to="/">
                            <p onClick={clearStorage}
                                className={`mt-1 mb-0 p-0 nav-item ${styles.navItem2}`}>
                                Log out
                        </p>
                        </Link>
                    </span>}

                    {UserId && <span >

                        <Link to="/UploadApp">
                            <p
                                className={`mt-1 mb-0 p-0 ${`nav-item ${styles.navItem2}`} 
                            ${window.location.pathname == "/UploadApp" && styles.activeLink}`}>
                                + Upload App
                        </p>
                        </Link>
                    </span>}
                </div>

                {!UserId && <span className="ml-auto">

                    <Link to="/sign in">
                        <p
                            className={`mt-2 mb-0 p-0 nav-item ${styles.navItem2}`} >
                            Log in
                        </p>
                    </Link>
                </span>}

            </div>
        </nav>
    )
}

export default NavBar
