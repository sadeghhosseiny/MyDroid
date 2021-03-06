import React from 'react'
import under_construction from '../under-construction.jpg';
import styles from './Games.module.css';

function Games() {
    return (
        <div className={`d-flex justify-content-center my-3`}>
            <img src={under_construction} alt="pic" className={` ${styles.gamePage}`} />
        </div>
    )
}

export default Games
