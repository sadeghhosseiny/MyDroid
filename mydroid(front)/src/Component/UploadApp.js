import React, { useState } from 'react';

function UploadApp() {

    const [addComment, setAddComment] = useState("");
    const [fileName, setFileName] = useState("Upload Boundary File");

    return (
        <React.Fragment>

            <form>
                <div className="form-group d-flex justify-content-center mt-5">
                    <label className="mx-2 pt-1" for="exampleInputEmail1">App name</label>
                    <input type="text" className="form-control w-25" id="exampleInputEmail1" placeholder="Name..." />
                </div>
            </form>
            <br />
            <form>
                <div className="form-group d-flex justify-content-center mt-2 ml-5">
                    <label className="mx-2 pt-1" for="exampleInputEmail1">ID</label>
                    <input type="text" className="form-control w-25" id="exampleInputEmail1" placeholder="ID..." />
                </div>
            </form>
            <br />
            <form>
                <div className="form-group d-flex justify-content-center mt-2 ml-5">
                    <textarea type="text" placeholder="Discribtions..."
                        onChange={(e) => setAddComment(e.target.value)}
                        className="ml-5 mt-4 w-25" />
                </div>

            </form>

            <form>
                <form.Group>
                    <form.File id="exampleformControlFile1" label="Example file input" />
                </form.Group>
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
