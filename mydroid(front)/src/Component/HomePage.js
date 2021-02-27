import React, { useContext, useState } from 'react';
import Apps from './Apps';
import { MyContext } from './Context';
import styles from './HomePage.module.css';

// , { useEffect, useState }
//import axios from 'axios';
function HomePage() {
    //const [data, setData] = useState();

    const { apps } = useContext(MyContext);
    //const { games } = useContext(MyContext);


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

            <h1 className="text-capitalize m-3 pl-4 ml-5">the best apps</h1>

            <div className={`${styles.Container}`}>
                <div className={`row ${styles.Row}`}>

                    {console.log(apps)}

                    {apps ? apps.map(app => <Apps key={app.ID} data={app} />) : "  LOADING"}
                </div>
                <br />
            </div>
            <h1 className="text-capitalize m-3 pl-4 ml-5">the best games</h1>

            {/* <button className="btn btn-outline-warning m-5"
                        onClick={getApps}>Click it Bitch
                    </button> */}
            {/* {data ? data.map(da => <img src={da.ImageUrl} />) : "Pic, "}
                    {data ? data.map((post) => { return <li key={post.ID}>{post.ImageUrl}</li> }) : "Loading"} */}

        </React.Fragment>






    )
}

export default HomePage;
