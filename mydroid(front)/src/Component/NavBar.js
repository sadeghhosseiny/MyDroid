import React, { useState } from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

function NavBar() {

    const [activePage, setActivePage] = useState("HomePage");

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark py-3 justify-content-between">
            <a className={`${styles.navbarBrand} navbar-brand font-weight-bold`}>
                MD
            </a>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className={`mr-auto d-flex ${styles.itemsNavbar}`} id="navbarNav">
                <ul className={`navbar-nav ${styles.navUl} `}>
                    <Link to="/HomePage" >
                        <li className="nav-item " onClick={() => setActivePage("HomePage")}>
                            <a className={`nav-link ${activePage == "HomePage" && styles.activeLink}`} >Home</a>
                        </li>
                    </Link>
                    <Link to="#" >

                        <li className="nav-item" onClick={() => setActivePage("Games")}>
                            <a className={`nav-link ${activePage == "Games" && styles.activeLink}`} >Games</a>
                        </li>
                    </Link>
                    <Link to="#" >

                        <li className="nav-item" onClick={() => setActivePage("Apps")}>
                            <a className={`nav-link ${activePage == "Apps" && styles.activeLink}`} >Apps</a>
                        </li>
                    </Link>
                </ul>
                <span className="ml-auto">

                    <Link to="#">
                        <li className={`nav-item  ${styles.uploadItem}`} onClick={() => setActivePage("UploadApp")}>
                            <a className={`nav-link ${styles.alaki} ${activePage == "UploadApp" && styles.activeLink}`}>+ Upload App</a>
                        </li>
                    </Link>
                </span>
            </div>
        </nav>
    )
}

export default NavBar
