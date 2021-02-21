import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {
    const [data, setData] = useState([]);

    const getApps = () => {
        axios.get("http://localhost:8080/app/get")
            .then(res => {
                setData([res.data])
                //console.log(data);
                console.log(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    // useEffect(() => {
    //     getApps();
    // }, [])

    return (
        <div>
            <h1 className="text-capitalize m-3">the new games</h1>
            <div className="col-lg-2">

            </div>
            <button className="btn btn-outline-warning m-5"
                onClick={getApps}>Click it Bitch
                </button>

            <div>
                {data.map(d =>
                    <li key={d.id}>{d.data}</li>
                )}
                {/* {JSON.stringify(data)} */}
            </div>
        </div>
    )
}

export default HomePage;
