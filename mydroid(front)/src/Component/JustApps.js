import React from 'react';
import under_construction from '../under-construction.jpg';
import styles from './JustApps.module.css';


function JustApps() {
    return (
        <div className="d-flex justify-content-center my-3">
            <img src={under_construction} alt="pic" className={`${styles.justAppsPage}`} />
        </div>
    )
}

export default JustApps
