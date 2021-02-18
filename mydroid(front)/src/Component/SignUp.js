import React, { useState } from 'react';
import styles from './SignUp.module.css';

function SignUp() {
    return (
        <div className={`${styles.mainContainer}`}>
            <div className="container d-flex">
                <form>
                    <input className="my-3 mx-3" />
                    <input className="my-3" />
                </form>
            </div>
        </div>
    )
}

export default SignUp