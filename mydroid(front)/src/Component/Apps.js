import React from 'react';
import styles from './Apps.module.css';

const baseHost = "http://localhost:8080"

function Apps({ data }) {
    const { Name, ImageUrl } = data;
    return (
        <React.Fragment>

            <div className={`col-4 col-md-2 my-2 ${styles.Apps}`}>
                <div className={`card mx-auto my-auto ${styles.Card}`}>
                    <div className={`img-container ${styles.ImageContainer}`}>
                        <img className={`card-img-top ${styles.image}`} src={baseHost + ImageUrl} alt="Image" />
                    </div>
                    <div className={`card-footer`}>{Name}</div>
                </div>
                {/* <img src={data.ImageUrl} alt="fuck" /> */}
            </div>
        </React.Fragment>

    )
}

export default Apps
