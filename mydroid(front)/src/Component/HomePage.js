import React, { useContext, useState } from 'react';
import Apps from './Apps';
import { MyContext } from './Context';
import styles from './HomePage.module.css';

// , { useEffect, useState }
//import axios from 'axios';
function HomePage() {

    const { bestApps } = useContext(MyContext);

    const { bestGames } = useContext(MyContext);

    const { latestApps } = useContext(MyContext);

    const { latestGames } = useContext(MyContext);

    // const getApps = () => {
    //     setData(posts);
    // }
    // const getApps = () => {
    //     axios.get("http://localhost:8080/app/get")
    //         .then(res => {
    //             setData([res.data])
    //             //console.log(data);
    //             console.log(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

    // useEffect(() => {
    //     getApps;
    // }, [])

    return (

        <React.Fragment>
            {console.log(window.location.href)}
            {console.log(window.location.pathname)}
            <div className={`${styles.MainDiv}`}>

                <h1 className={`text-capitalize mt-3 ml-5 ${styles.categoryTitle}`}>the best apps</h1>
                <hr className={`bg-info ml-5 mr-5 ${styles.BappsLine}`} />
                <div className={`container mx-0 px-0 ${styles.Container}`}>
                    <div className={`row ${styles.Row}`}>

                        {console.log(bestApps)}

                        {bestApps ? bestApps.map(app => <Apps key={app.ID} bestDataApp={app} />) : " LOADING"}

                    </div>
                    <br />
                </div>

                <h1 className={`text-capitalize m-3 ml-5 ${styles.categoryTitle}`}>the best games</h1>
                <hr className={`bg-info ml-5 mr-5 ${styles.BgamesLine}`} />
                <div className={`${styles.Container}`}>
                    <div className={`row ${styles.Row}`}>

                        {bestGames ? bestGames.map(game => <Apps key={game.ID} bestDataGame={game} />) : " LOADING"}
                    </div>
                    <br />
                </div>

                <h1 className={`text-capitalize m-3 ml-5 ${styles.categoryTitle}`}>the latest apps</h1>
                <hr className={`bg-info ml-5 mr-5 ${styles.LappsLine}`} />
                <div className={`${styles.Container}`}>
                    <div className={`row ${styles.Row}`}>

                        {latestApps ? latestApps.map(lapp => <Apps key={lapp.ID} latestApp={lapp} />) : " LOADING"}
                    </div>
                    <br />
                </div>

                <h1 className={`text-capitalize m-3 ml-5 ${styles.categoryTitle}`}>the latest games</h1>
                <hr className={`bg-info ml-5 mr-5 ${styles.LgamesLine}`} />
                <div className={`${styles.Container}`}>
                    <div className={`row ${styles.Row}`}>

                        {latestGames ? latestGames.map(lgame => <Apps key={lgame.ID} latestGame={lgame} />) : " LOADING"}
                    </div>
                    <br />
                </div>

                {/* <button className="btn btn-outline-warning m-5"
                        onClick={getApps}>Click it Bitch
                    </button> */}
                {/* {data ? data.map(da => <img src={da.ImageUrl} />) : "Pic, "}
                    {data ? data.map((post) => { return <li key={post.ID}>{post.ImageUrl}</li> }) : "Loading"} */}

            </div>
        </React.Fragment>
    )
}

export default HomePage;
