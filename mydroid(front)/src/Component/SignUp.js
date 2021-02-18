import React, { useState } from 'react';
import styles from './SignUp.module.css';

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (

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
                            onClick={handleSignIn}
                            className="btn btn-outline-info text-capitalize py-3 px-5">
                            sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default SignUp