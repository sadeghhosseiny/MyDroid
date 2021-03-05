import styles from './Item.module.css';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';


function Item() {
    const match = useRouteMatch();
    const userId = localStorage.getItem("userId");
    const appId = match.params ? match.params.id : "Loading";
    console.log(appId)
    const baseUrl = "http://localhost:8080"

    const [item, setItem] = useState([])
    const [comment, setComment] = useState()
    const [addComment, setAddComment] = useState("")
    const [getComment, setGetComment] = useState("");

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
        axios.get(`http://localhost:8080/app/comments/${appId}`)
            .then(res => {
                const parseComment = (res.data.message);
                console.log(parseComment);
                setComment(parseComment)
            })
            .catch(err => {
                console.log(err);
            })
    }

    // const reset = () => {
    //     return setGetComment("");
    // }
    const resetForm = () => {
        var event = document.getElementById("frm");
        event.reset();

    }


    useEffect(() => {
        showComments();
    }, [])


    const handleComment = (e) => {
        e.preventDefault();
        //setA(e.target.value)

    }

    const handleSendComment = (e) => {
        // let ai = appId;
        // console.log(ai);
        axios({
            "method": "POST",
            "url": "http://localhost:8080/app/comments",
            "headers": {
                "Content-Type": "application/json",
            },

            data: {

                "sender": parseInt(userId, 10),
                "app": parseInt(appId, 10),
                "content": addComment
            }
        })
            .then(res => {
                console.log(res);
            })
    }

    useEffect(() => {
        handleSendComment;
    }, [])

    return (
        <div className={`${styles.Div}`}>

            <div className={`${styles.mainDiv}`}>
                {/* <h1>this is item</h1> */}
                <div className={`${styles.appContainer}`}>

                    <h1 className={`font-weight-bold ${styles.appName}`}>{item.Name}</h1>
                    <h3 className={`${styles.appPublisher}`}>{item.Publisher}</h3>
                    <h4 className={`${styles.appDescription} text-secondary`}>{item.Description}</h4>
                    <div>

                        <img className={`m-5 ${styles.appImage}`} src={baseUrl + item.ImageUrl} alt="app" />
                    </div>
                </div>
                <hr className={`font-weight-bold bg-info ml-5 ${styles.line}`} />
                <div>
                    <h1 className="ml-5">Comments</h1>
                </div>
                <div>
                    <div className={`ml-5 my-2 ${styles.commentDiv}`}>
                        {comment ? comment.map((com, i) => <li key={"com" + i} className="px-2 py-2">{com.Content}</li>) : "commentpalce"}
                    </div>
                    {getComment && <div className={`ml-5 my-2 ${styles.userComment}`}>
                        {/* <p>Your comment</p> */}
                        <p className={`py-2 my-2 px-2 `}>{getComment}</p>
                    </div>}

                </div>

                <form id="frm" onSubmit={handleComment}>
                    <div>

                        <textarea type="text" placeholder="Add Your Comment"
                            onChange={(e) => setAddComment(e.target.value)}
                            className="ml-5 mt-4 w-50" />
                    </div>
                    <div >

                        <button onClick={() => {
                            handleSendComment();
                            setGetComment(addComment);
                            resetForm();
                        }} className="ml-5 mt-2 btn btn-outline-success">
                            add comment
                    </button>

                    </div>
                </form>
                {/* <h1>{data.item.Name}</h1> */}
                {/* <p>{props.ID}</p> */}
            </div>
        </div>
    )
}

export default Item
