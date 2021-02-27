import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MyContext = React.createContext();

export const ContextProvider = (props) => {

    const [bestApps, setBestApps] = useState();
    const [bestGames, setBestgames] = useState();

    useEffect(() => {

        axios.get(`http://localhost:8080/best/Apps`)
            .then(res => {
                const resBestApps = (res.data.data);
                setBestApps(resBestApps);
                console.log(res.data.data);
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
                const resBestGames = res.data.data;
                setBestgames(resBestGames);
            })
    }, [])

    return (
        <MyContext.Provider value={{
            bestApps,
            bestGames
            //detail: handleDetail()
        }}>
            {props.children}

        </MyContext.Provider>
    )
}

