import React from 'react';
import axios from 'axios';

function HomePage() {
    const getApps = () => {
        axios({
            "method": "GET",
            "url": "http://localhost:8080/app/get?page=0 & per_page=10",
            "headers": {
                "Content-Type": "application/json"
            }

        })
            .then(res => {
                console.log(res);
            })
    }
    return (
        <div>
            <button className="btn btn-outline-warning">Click it Bitch</button>
        </div>
    )
}

export default HomePage;
