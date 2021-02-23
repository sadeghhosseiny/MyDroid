import React from 'react';
import styles from './Apps.module.css';

const baseHost = "http://localhost:8080"

function Apps({ data }) {
    const { ImageUrl } = data;
    return (
        <React.Fragment>

            <div className={`col-md-2 ${styles.Apps}`}>
                <div className="card">
                    <div className={`img-container ${styles.ImageContainer}`}>
                        <img className={`card-img-top ${styles.image}`} src={baseHost + ImageUrl} alt="Image" />
                    </div>
                </div>
                {/* <img src={data.ImageUrl} alt="fuck" /> */}
            </div>
        </React.Fragment>

    )
}

export default Apps
