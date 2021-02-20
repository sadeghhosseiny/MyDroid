import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {
    const [data, setData] = useState([]);

    const getApps = () => {
        axios.get("http://localhost:8080/app/get")
            .then(res => {
                setData({ data: res.data })
                console.log(data);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getApps();
    }, [])

    return (
        <div>
            <button className="btn btn-outline-warning"
                onClick={getApps}>Click it Bitch</button>
        </div>
    )
}

export default HomePage;
