import React from 'react';
import styles from './NavBar.module.css';

function NavBar() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark py-3">
            <a className={`${styles.navbarBrand} navbar-brand font-weight-bold`}>
                MD
            </a>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className={`${styles.itemsNavbar}`} id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Games</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Apps</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
