import React, { useState, useEffect, useContext } from 'react';
import styles from './SignInPage.module.css';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';


function SignInPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [text, setText] = useState("");
    let history = useHistory();
    const [isValid, setValid] = useState(false);


    const handleSignIn = () => {
        axios({
            "method": "POST",
            "url": "http://localhost:8080/user/login",
            "headers": {
                "Content-Type": "application/json",
                //"Origin": "localhost:3000"
            },
            "withCredentials": true,

            data: {
                username: username,
                password: password
            }
        })
            .then(res => {
                console.log(res.data.result);
                if (res.data.result ? res.data.result === "success" : "") {

                    let USER_ID = res.data.message.user_id;
                    // // userCTX.setUser(USER_ID);
                    // // setUserId(USER_ID);
                    localStorage.setItem("userId", USER_ID);
                    setValid(true);
                    history.push(`/`);

                }
                else {
                    setText("username or password does not match");
                }
            })
            .catch(e => {
                console.log(e);

            })


    }


    const validateForm = () => {
        return username.length > 0 && password.length > 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

    }


    return (
        <div className={`${styles.mainDiv}`}>

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
                            {/* <Link to="/" > */}
                            {handleSignIn && !isValid && <p className="text-danger">{text}</p>}
                            <button disabled={!validateForm()}
                                onClick={handleSignIn ? handleSignIn : ""}
                                className="btn btn-outline-info text-capitalize py-3 px-5">
                                log in
                        </button>
                            {/* </Link> */}
                        </div>
                        <hr className="bg-dark" />
                        <p className="font-weight-bold text-center">
                            Not in mydroid yet ?
                            <Link to="/sign up">
                                <nbsp /> Sign up
                            </Link>

                        </p>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default SignInPage;
