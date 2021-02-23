import React, { useState, useEffect } from 'react';
import styles from './SignInPage.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SignInPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState("");

    // const fetchData = React.useCallback(() => {
    //     axios({
    //         "method": "POST",
    //         "url": "http://localhost:8080/login",
    //         "headers": {
    //             "content-type": "application/json"
    //         },
    //         data: {
    //             username,
    //             password
    //         }
    //     })
    //         .then((response) => {
    //             setResponseData(response.data)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, [])

    // React.useEffect(() => {
    //     fetchData()
    // }, [fetchData])


    const handleSignIn = () => {
        axios({
            "method": "POST",
            "url": "http://localhost:8080/user/login",
            "headers": {
                "Content-Type": "application/json",

            },

            data: {
                username: username,
                password: password
            }
        })
            .then(res => {
                console.log(res);
            })
            .catch(e => {
                console.log(e);

            })
    }


    useEffect(() => {
        handleSignIn
    }, [])


    const validateForm = () => {
        return username.length > 0 && password.length > 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    // const data = {
    //     username,
    //     password
    // }

    // const consoling = () => {
    //     console.log(username);
    //     console.log(password);
    // }

    return (
        // <div>
        <div className={`${styles.mainContainer}`}>
            <h1 className="text-center font-weight-bold">MyDroid</h1>

            <div className={`container ${styles.container} mt-3`}>
                <form onSubmit={handleSubmit}>

                    <div className={`${styles.content} my-5 mx-auto`}>
                        <input className={`input ${styles.input}`} type="text" placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)} />
                        <span className={`${styles.border}`}></span>
                    </div>
                    <div className={`${styles.content} my-5 mx-auto`}>
                        <input className={`input ${styles.input}`} type="text" placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)} />
                        <span className={`${styles.border}`}></span>
                    </div>
                    <div className="text-center mb-3">
                        <Link to="/HomePage">
                            <button disabled={!validateForm()}
                                onClick={handleSignIn}
                                className="btn btn-outline-info text-capitalize py-3 px-5">
                                sign in
                        </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default SignInPage;
