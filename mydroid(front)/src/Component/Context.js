import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MyContext = React.createContext();

export const ContextProvider = (props) => {

    const [bestApps, setBestApps] = useState([]);
    const [bestGames, setBestgames] = useState([]);
    const [latestApps, setLatestApps] = useState([]);
    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {

        axios.get(`/api/best/Apps`)
            .then(res => {
                const resBestApps = (res.data.data);
                setBestApps(resBestApps);
                console.log(res.data.data);
            })
    }, [])


    useEffect(() => {

        axios.get(`/api/best/Games`)
            .then(res => {
                const resBestGames = res.data.data;
                setBestgames(resBestGames);
            })

    }, [])

    useEffect(() => {
        axios.get(`/api/latest/Apps`)
            .then(res => {
                const resLatestApps = res.data.data;
                setLatestApps(resLatestApps);
            })
    }, [])

    useEffect(() => {
        axios.get(`/api/latest/Games`)
            .then(res => {
                const resLatestGames = res.data.data;
                setLatestGames(resLatestGames);
            })
    }, [])

    return (
        <MyContext.Provider value={{
            bestApps,
            bestGames,
            latestApps,
            latestGames

        }}>
            {props.children}

        </MyContext.Provider>
    )
}

