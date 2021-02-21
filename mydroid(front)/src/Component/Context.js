import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MyContext = React.createContext();

export const ContextProvider = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:8080/app/get")
            .then(res => {
                setPosts([res.data]);
                console.log(res.data);
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

