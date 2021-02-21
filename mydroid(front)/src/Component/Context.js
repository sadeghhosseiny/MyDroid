import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const MyContext = React.createContext();

function Context(props) {

    const [posts, setPosts] = useState([]);

    const PostHandler = () => {
        axios.get("http://localhost:8080/app/get")
            .then(res => {
                setPosts([res.data]);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        PostHandler;
    }, [])

    return (
        <MyContext.Provider value={{ ...posts }}>
            {props.children}
        </MyContext.Provider>
    )
}

export { MyContext, Context };
