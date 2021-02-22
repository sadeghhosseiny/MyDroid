import React, { useContext } from 'react';
import Apps from './Apps';
import { MyContext } from './Context';
// , { useEffect, useState }
//import axios from 'axios';

function HomePage() {
    // const [data, setData] = useState([]);
    const { posts } = useContext(MyContext);

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

        <div>
            <h1 className="text-capitalize m-3">the new games</h1>
            <div className="col-lg-2">
                {console.log(posts)}
            </div>
            {posts ? posts.map(post => <Apps key={post.ID} data={post} />) : ""}
            {/* <button className="btn btn-outline-warning m-5"
                    onClick={getApps}>Click it Bitch
                </button> */}

        </div>
    )
}

export default HomePage;
