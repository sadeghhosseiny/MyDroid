import React, { useState } from 'react';
import styles from './UploadApp.module.css';

function UploadApp() {

    const [addComment, setAddComment] = useState("");

    const uploadImage = async (e) => {
        console.log(e.target.files[0]);
        const file = e.target.files[0];
        const base64Image = await convertToBase64(file);
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

    return (
        <React.Fragment>
            <form>

                <form>
                    <div className="form-group d-flex justify-content-center mt-5">
                        <label className="mx-2 pt-1" for="AppName">App name</label>
                        <input type="text" className="form-control w-25" id="AppName" placeholder="Name..." />
                    </div>
                </form>
                <br />
                <form>
                    <div className="form-group d-flex justify-content-center mt-2 ml-5">
                        <label className="mx-2 pt-1" for="ID">ID</label>
                        <input type="text" className={`form-control ${styles.inputID}`} id="ID" placeholder="ID..." />
                    </div>
                </form>
                <br />
                <form>
                    <div className="form-group d-flex justify-content-center mt-2 ml-3">
                        <label className="mt-4" for="DiscribtionsBox">Discribtions</label>
                        <textarea type="text" id="DiscribtionsBox" placeholder="Write your Discribtions..."
                            onChange={(e) => setAddComment(e.target.value)}
                            className="ml-2 mt-4 w-25" />
                    </div>

                </form>

                <form>
                    <div className="form-group d-flex justify-content-center ml-5 pt-3 pl-3">
                        <label for="Image" className="mr-3 mt-2">Upload your image</label>
                        <input className={`${styles.browseImage}`} type="file" id="Image" onChange={(e) => uploadImage(e)} />
                    </div>
                </form>
            </form>
            {/* <div>
                <select class="mdb-select md-form" searchable="Search here..">
                    <option value="" disabled selected>Choose your country</option>
                    <option value="1">USA</option>
                    <option value="2">Germany</option>
                    <option value="3">France</option>
                    <option value="3">Poland</option>
                    <option value="3">Japan</option>
                </select>

            </div> */}
        </React.Fragment>
    )
}

export default UploadApp
