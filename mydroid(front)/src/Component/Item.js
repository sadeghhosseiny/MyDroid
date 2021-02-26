import { get } from 'jquery';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom'
import { MyContext } from './Context';
import axios from 'axios';

function Item() {
    const match = useRouteMatch();
    const appId = match.params ? match.params.id : "";
    console.log(appId)
    const baseUrl = "http://localhost:8080"

    const [item, setItem] = useState([])


    useEffect(() => {
        fetchItem();

    }, [])

    const fetchItem = () => {
        axios.get(`http://localhost:8080/app/get/${appId}`)
            .then(res => {
                setItem(res.data.message);
                console.log(res.data.message.ImageUrl)
                //const result = JSON.parse(res.data.data);
                //console.log(data);
                console.log(res.data.message)
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>this is item</h1>
            <h1>{item.Name}</h1>
            <img src={baseUrl + item.ImageUrl} alt="fuck" />
            {/* <h1>{data.item.Name}</h1> */}
            {/* <p>{props.ID}</p> */}
        </div>
    )
}

export default Item
