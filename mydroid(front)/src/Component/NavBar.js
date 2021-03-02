import React, { useState } from 'react';
import styles from './NavBar.module.css';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {

    const [activePage, setActivePage] = useState("");

    return (
        <nav className={`navbar navbar-expand navbar-dark bg-dark py-3 justify-content-between ${styles.NavBar}`}>
            <a className={`${styles.navbarBrand} navbar-brand font-weight-bold`}>
                MD
            </a>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className={`mr-auto d-flex ${styles.itemsNavbar}`} id="navbarNav">
                <ul className={`navbar-nav ${styles.navUl} `}>
                    <NavLink to="/HomePage" >
                        <li className="nav-item " onClick={() => setActivePage("HomePage")}>
                            <a className={`nav-link ${activePage == "HomePage" && styles.activeLink}`} >Home</a>
                        </li>
                    </NavLink>
                    <NavLink to="#" >

                        <li className="nav-item" onClick={() => setActivePage("Games")}>
                            <a className={`nav-link ${activePage == "Games" && styles.activeLink}`} >Games</a>
                        </li>
                    </NavLink>
                    <NavLink to="#" >

                        <li className="nav-item" onClick={() => setActivePage("Apps")}>
                            <a className={`nav-link ${activePage == "Apps" && styles.activeLink}`} >Apps</a>
                        </li>
                    </NavLink>
                </ul>
                <span className="ml-auto">

                    <Link to="/UploadApp">
                        <p onClick={() => setActivePage("UploadApp")}
                            className={`mt-1 mb-0 p-0 text-info ${activePage == "UploadApp" && styles.activeLink}`}>
                            + Upload App
                        </p>
                    </Link>
                </span>
            </div>
        </nav>
    )
}

export default NavBar
