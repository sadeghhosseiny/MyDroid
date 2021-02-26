import styles from './Item.module.css';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';


function Item() {
    const match = useRouteMatch();
    const appId = match.params ? match.params.id : "Loading";
    console.log(appId)
    const baseUrl = "http://localhost:8080"

    const [item, setItem] = useState([])
    const [comment, setComment] = useState({})

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

    const showComments = () => {
        axios.get(`http://localhost:8080/app/comments/4`)
            .then(res => {
                const parseComment = JSON.parse(res.data.message)
                setComment(parseComment)
                //console.log(res.data);
                //console.log(parseComment.Content ? parseComment.Content : "");
            })
    }


    useEffect(() => {
        showComments();
    }, [])

    return (
        <div>
            {/* <h1>this is item</h1> */}
            <div className={`${styles.appContainer}`}>

                <h1 className={`font-weight-bold ${styles.appName}`}>{item.Name}</h1>
                <h3 className={`${styles.appPublisher}`}>{item.Publisher}</h3>
                <h4 className={`${styles.appDescription}`}>{item.Description}</h4>
                <div>

                    <img className={`m-5 ${styles.appImage}`} src={baseUrl + item.ImageUrl} alt="app" />
                </div>
            </div>
            <hr className="font-weight-bold bg-info w-75 ml-5" />
            <div>
                {comment ? comment.map(com => <li>{com.Content}</li>) : "fuck"}
                {console.log(comment)}
            </div>
            {/* <h1>{data.item.Name}</h1> */}
            {/* <p>{props.ID}</p> */}
        </div>
    )
}

export default Item
