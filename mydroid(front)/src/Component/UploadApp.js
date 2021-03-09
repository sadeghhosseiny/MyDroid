import React, { useContext, useEffect, useState } from 'react';
import styles from './UploadApp.module.css';
import axios from 'axios';
// import { userID } from './SignInPage';
// import { userContext } from './UserContext';

function UploadApp() {

    // const user = useContext(userContext);
    const userId = localStorage.getItem("userId");
    const [appName, setAppName] = useState("");
    const [addDescription, setAddDescription] = useState("");
    const [category, setCategory] = useState([]);
    const [image, setImage] = useState("");
    const [categoryID, setCategoryID] = useState("");
    const [errorText, setErrorText] = useState("");
    //const [cat, setCat] = useState([]);

    const getCategory = () => {
        axios.get(`http://localhost:8080/category/all`)
            .then(res => {
                console.log(res.data.message);
                setCategory(res.data.message);
                console.log("fffffffffffffff", res.data.message);
            })

    }

    useEffect(() => {
        getCategory();
    }, [])

    const chooseCategory = (e) => {

        category.forEach(item => {
            if (e.target.value === item.Name) {
                setCategoryID(item.ID)
            }
        })
    }


    const sendApp = () => {
        let b64image = image.substr(image.indexOf(',') + 1);

        axios({
            "method": "POST",
            "url": "http://localhost:8080/app/upload",
            "headers": {
                "Content-Type": "application/json"
            },
            "withCredentials": true,
            data: {
                "name": appName,
                "description": addDescription,
                // "publisher_id": userId,
                "category_id": categoryID,
                "image": b64image,
            },

        })
            .then(res => {
                if ("image" === null) {
                    console.log("image is empty");
                }
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const checkInputs = () => {
        if ((appName && addDescription && categoryID && image) === "") {
            setErrorText("fill all the inputs");
        }
        else {
            sendApp();
        }
    }

    const uploadImage = async (e) => {
        console.log(e.target.files[0]);
        const file = e.target.files[0];
        const base64Image = await convertToBase64(file);
        setImage(base64Image);
        //return base64Image;
        console.log(base64Image);
    }

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = (() => {
                resolve(fileReader.result);
            })
            fileReader.onerror = ((err) => {
                reject(err);
            })
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <React.Fragment>
            {/* {console.log(userId)} */}
            <form onSubmit={handleSubmit}>
                <form>
                    <div className="form-group d-flex justify-content-center mt-5">
                        <label className="mx-2 pt-1" for="AppName">App name</label>
                        <input type="text" className="form-control w-25" id="AppName" placeholder="Name..."
                            onChange={(e) => setAppName(e.target.value)} />
                    </div>
                </form>
                <br />

                <br />
                <form>
                    <div className="form-group d-flex justify-content-center mt-2 ml-3 mb-4">
                        <label className="mt-4" for="DiscribtionsBox">Discribtions</label>
                        <textarea type="text" id="DiscribtionsBox" placeholder="Write your Discribtions..."
                            onChange={(e) => setAddDescription(e.target.value)}
                            className="ml-2 mt-4 w-25" />
                    </div>

                </form>

                <form>
                    <div className="form-group d-flex justify-content-center ml-2 pt-3 pl-3">
                        <label for="Image" className="mr-3 mt-2">Upload your image</label>
                        <input className={`${styles.browseImage}`} type="file" id="Image" onChange={(e) => uploadImage(e)} />
                    </div>
                </form>

                <div className="form-group d-flex justify-content-center mt-5">
                    <label for="categoryBox" className="pt-1">Select a category</label>
                    <select id="categoryBox" className="form-control w-25 ml-3"
                        data-role="select-dropdown" data-profile="minimal"
                        onChange={chooseCategory} >
                        <option value="" disabled selected>Choose your category</option>
                        {category.map((ctg, i) => <option key={"cat" + i}>{ctg.Name}</option>)}
                    </select>
                </div>
                <div className="text-center mt-5 ml-5">
                    {checkInputs && <p>{errorText}</p>}
                    <button className="btn btn-outline-secondary px-4 py-2"
                        onClick={() => {

                            checkInputs();
                        }} >
                        Upload
                    </button>
                </div>

            </form>
        </React.Fragment>
    )
}

export default UploadApp
