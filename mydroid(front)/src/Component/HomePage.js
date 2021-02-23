import React, { useContext, useState } from 'react';
import Apps from './Apps';
import { MyContext } from './Context';
import styles from './HomePage.module.css';

// , { useEffect, useState }
//import axios from 'axios';
function HomePage() {
    const [data, setData] = useState();

    const { posts } = useContext(MyContext);
    const getApps = () => {
        setData(posts);
    }
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

            <h1 className="text-capitalize m-3 pl-4 ml-5">the new games</h1>

            <div className={`container ${styles.Container}`}>
                <div className={`row ${styles.Row}`}>

                    {posts ? posts.map(post => <Apps key={post.ID} data={post} />) : "LOADING"}
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
