import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MyContext = React.createContext();

export const ContextProvider = (props) => {

    const [posts, setPosts] = useState();

    useEffect(() => {

        axios.get("http://localhost:8080/app/get")
            .then(res => {
                const result = JSON.parse(res.data.data);
                setPosts(result)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    return (
        <MyContext.Provider value={{ posts }}>
            {props.children}

        </MyContext.Provider>
    )
}

