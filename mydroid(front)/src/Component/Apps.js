import React from 'react';
import styles from './Apps.module.css';
import { Link } from 'react-router-dom';
import Item from './Item';


const baseHost = "http://localhost:8080";


function Apps({ data }) {

    const { Name, ImageUrl, Category } = data;
    return (
        <React.Fragment>

            <div className={`col-4 col-md-2 my-2 ${styles.Apps}`}>
                <div className={`card mx-auto my-auto ${styles.Card}`}>
                    <div className={`img-container ${styles.ImageContainer}`}>
                        <Link to={`/item/${data.ID}`}>
                            <img className={`card-img-top ${styles.image}`}
                                src={baseHost + ImageUrl} alt="Image" />
                            <div className={`${styles.over}`}>

                            </div>
                        </Link>
                    </div>
                    <div className={`card-footer ${styles.cardFooter}`}>
                        <p className="font-weight-bold mb-0">
                            {Name}
                        </p>
                        <p className="text-secondary mb-0">
                            {Category}
                        </p>
                    </div>
                </div>

                {/* <img src={data.ImageUrl} alt="fuck" /> */}
            </div>
        </React.Fragment>

    )
}

export default Apps
