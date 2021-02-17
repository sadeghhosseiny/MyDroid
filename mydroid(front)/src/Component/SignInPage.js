import React, { useState, useEffect } from 'react';
import styles from './SignInPage.module.css';
import axios from 'axios';

function SignInPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const fetchData = React.useCallback(() => {
        axios({
            "method": "POST",
            "url": "http://localhost:8080/login",
            "headers": {
                "content-type": "application/json"
            },
            data: {
                username,
                password
            }
        })
            .then((response) => {
                setResponseData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    React.useEffect(() => {
        fetchData()
    }, [fetchData])


    // const handleSignIn = (e) => {
    //     useEffect(() => {
    //         axios({
    //             method: "POST",
    //             url: 'http://localhost:8080/login',
    //             headers: {
    //                 'Content-Type': 'application/json',

    //             },
    //         })
    //             .then(res => {
    //                 console.log(res);
    //             }).catch(err => {
    //                 console.log(err);
    //                 console.log("fuck this shit");
    //             })
    //     }, [])
    // }

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

            <div class={`container ${styles.container} mt-3`}>
                <form onSubmit={handleSubmit}>

                    <div class={`${styles.content} my-5 mx-auto`}>
                        <input class={`input ${styles.input}`} type="text" placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)} />
                        <span class={`${styles.border}`}></span>
                    </div>
                    <div class={`${styles.content} my-5 mx-auto`}>
                        <input class={`input ${styles.input}`} type="text" placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)} />
                        <span class={`${styles.border}`}></span>
                    </div>
                    <div className="text-center mb-3">
                        <button disabled={!validateForm()}
                            onClick={fetchData}
                            className="btn btn-outline-info text-capitalize py-3 px-5">
                            sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default SignInPage;
