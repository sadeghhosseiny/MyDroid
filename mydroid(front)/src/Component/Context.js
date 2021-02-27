import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MyContext = React.createContext();

export const ContextProvider = (props) => {

    const [bestApps, setBestApps] = useState();
    const [detail, setDetail] = useState([]);

    //const apikey = "23cd336deec298ae53f2";
    useEffect(() => {

        axios.get(`http://localhost:8080/best/Apps`)
            .then(res => {
                const result = JSON.parse(res.data.data);
                setBestApps(result)
                setDetail(result)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    // const ex = () => {
    //     useEffect(() => {
    //         let eachItem = detail.find(item => item.ID === ID);
    //         console.log(eachItem);
    //         return eachItem;
    //     }, [])
    // }

    useEffect(() => {
        axios.get(`http://localhost:8080/best/Games
        `)
            .then(res => {
                console.log(res.data)
            })
    }, [])

    return (
        <MyContext.Provider value={{
            bestApps,

            //detail: handleDetail()
        }}>
            {props.children}

        </MyContext.Provider>
    )
}

