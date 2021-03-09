import styles from './Item.module.css';
import React, { useEffect, useState, useCallback } from 'react';
import { Redirect, useHistory, useRouteMatch } from 'react-router-dom';
import axios from 'axios';


function Item() {
    const match = useRouteMatch();
    let history = useHistory();
    const userId = localStorage.getItem("userId");
    const appId = match.params ? match.params.id : "Loading";
    //console.log(appId)
    const baseUrl = "http://localhost:8080"

    const [item, setItem] = useState([])
    const [comment, setComment] = useState([])
    const [addComment, setAddComment] = useState("")
    const [getComment, setGetComment] = useState([]);
    const [s, setS] = useState("hd");
    const [ss, setSS] = useState([]);
    const [name, setName] = useState([]);

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
                console.log("rrrrrrrrrrrr", parseComment);
                setComment(parseComment)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const downloadApp = () => {
        //window.location.href(`http://localhost:8080/app/download/${appId}`);
    }

    // useEffect(() => {
    //     downloadApp();
    // }, [])

    const showName = () => {

        comment.forEach(com => {
            setS(com.App);
            //setS(com.App);
            //console.log("s",s);
            ss.push(com.App);

            setName(com.App);

        })
        console.log("s", s);
    }

    useEffect(() => {
        showName();
    }, [showName])

    const resetForm = () => {
        var event = document.getElementById("frm");
        event.reset();

    }

    const handleUserComment = () => {
        setGetComment([...getComment, addComment])
    }


    useEffect(() => {
        showComments();
    }, [])


    const handleComment = (e) => {
        e.preventDefault();

    }

    const handleSendComment = (e) => {

        axios({
            "method": "POST",
            "url": "http://localhost:8080/app/comments",
            "headers": {
                "Content-Type": "application/json",
            },
            "withCredentials": true,

            data: {

                //"sender": parseInt(userId, 10),
                "app": parseInt(appId, 10),
                "content": addComment
            }
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })

    }

    const checkTextArea = () => {
        return addComment.length > 0;
    }



    return (
        <div className={`${styles.Div}`}>
            {/* {console.log(GC())} */}
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
                {userId && <div className="ml-5 pl-5">
                    <a href={`http://localhost:8080/app/download/${appId}`}>
                        <button className="ml-5 btn p-2 btn-outline-success font-weight-bold" onClick={downloadApp}>Download</button>
                    </a>
                </div>}
                <hr className={`font-weight-bold bg-info ml-5 ${styles.line}`} />
                <div>
                    <h1 className="ml-5">Comments</h1>
                </div>
                <div>
                    <div className={`ml-5 my-2 ${styles.commentDiv}`}>
                        {comment ? comment.map((com, i) =>
                            <li key={"com" + i} className={`px-2 my-2 py-2 ${styles.lCom}`}>

                                <p>{ss[i]}</p>

                                {com.Content}
                            </li>)
                            : ""}
                    </div>
                    <div className={`ml-5 my-2 ${styles.userComment}`}>

                        {getComment ? getComment.map((gCom, i) =>
                            <p key={"gCom" + i} className={`py-2 my-2 px-2 ${styles.pCom}`}>
                                <p>You</p>
                                {gCom}
                            </p>) : ""}

                    </div>
                </div>

                {userId && <form id="frm" onSubmit={handleComment}>
                    <div>

                        <textarea type="text" placeholder="Add Your Comment"
                            onChange={(e) => setAddComment(e.target.value)}
                            className="ml-5 mt-4 w-50" />
                    </div>
                    <div >

                        <button onClick={() => {
                            handleSendComment();
                            handleUserComment();
                            showName();
                            resetForm();

                        }} className="ml-5 mt-2 btn btn-outline-secondary" disabled={!checkTextArea()}>
                            add comment

                    </button>
                    </div>
                </form>}
            </div>
        </div>
    )
}

export default Item
