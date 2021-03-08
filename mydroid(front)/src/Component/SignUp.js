import React, { useEffect, useState } from 'react';
import styles from './SignUp.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SignUp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [isClicked, setIsClicked] = useState(false);

    const handleSignUp = () => {
        axios({
            "method": "POST",
            "url": "http://localhost:8080/user/signup",
            "headers": {
                "Content-Type": "application/json"
            },

            data: {
                username: username,
                password: password
            }

        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const validateForm = () => {
        return username.length > 0 && password.length > 0;
    }


    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        // <div classNames={`${styles.Div}`}>

        <div className={`${styles.mainContainer}`}>
            <h1 className="text-center font-weight-bold">MyDroid</h1>

            <div className={`container ${styles.container} mt-3`}>
                <form onSubmit={handleSubmit}>

                    <div className={`${styles.content} my-5 mx-auto`}>
                        <input className={`input ${styles.input}`} type="text" placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)} />

                        <span className={`${styles.border}`} />
                    </div>
                    <div className={`${styles.content} my-5 mx-auto`}>
                        <input className={`input ${styles.input}`} type="text" placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)} />

                        <span className={`${styles.border}`}></span>
                    </div>
                    <div className="text-center mb-3">
                        <Link to="/sign in">
                            <button onClick={handleSignUp} disabled={!validateForm()}
                                className="btn btn-outline-info text-capitalize py-3 px-5">
                                sign up
                        </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
        // </div>
    )

}

export default SignUp
