import React, { useState } from 'react';
import styles from './SignUp.module.css';

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [IsValid, setIsValid] = useState(false);

    // const handleSignIn = () => {

    // }

    const validateForm = () => {
        return username.length > 0 && password.length > 0;
    }

    const checkField = () => {
        if (username.length > 0) {
            setIsValid(true);
        }
        else {
            setIsValid(false);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (

        <div className={`${styles.mainContainer}`}>
            <h1 className="text-center font-weight-bold">MyDroid</h1>

            <div className={`container ${styles.container} mt-3`}>
                <form onSubmit={handleSubmit}>

                    <div className={`${styles.content} my-5 mx-auto`}>
                        <input class={`input ${styles.input}`} type="text" placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)} />
                        <span className={`${styles.alaki}`}> {IsValid ? "" : "!"}</span>
                        <span className={`${styles.border}`}>

                        </span>
                    </div>
                    <div className={`${styles.content} my-5 mx-auto`}>
                        <input className={`input ${styles.input}`} type="text" placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)} />

                        <span className={`${styles.border}`}></span>
                    </div>
                    <div className="text-center mb-3">
                        <button onClick={checkField}
                            className="btn btn-outline-info text-capitalize py-3 px-5">
                            sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default SignUp