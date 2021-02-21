import React, { useContext } from 'react';
import { MyContext } from './Context';
// , { useEffect, useState }
//import axios from 'axios';

function HomePage() {
    // const [data, setData] = useState([]);
    const Consumer = useContext(MyContext);
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

            </div>
            <Consumer>
                {/* <button className="btn btn-outline-warning m-5"
                    onClick={getApps}>Click it Bitch
                </button> */}

                {
                    value => {
                        return (
                            value.data.map(d => <li key={d.ID}>{d.data}</li>)
                        )
                    }
                }
            </Consumer>
        </div>
    )
}

export default HomePage;
