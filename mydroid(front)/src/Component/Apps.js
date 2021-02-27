import React from 'react';
import styles from './Apps.module.css';
import { Link } from 'react-router-dom';
import Item from './Item';


const baseHost = "http://localhost:8080";


function Apps({ bestDataApp, bestDataGame, latestApp }) {

    return (
        <React.Fragment>

            {bestDataApp && <div className={`col-4 col-md-2 my-2 ${styles.Apps}`}>
                <div className={`card mx-auto my-auto ${styles.Card}`}>
                    <div className={`img-container ${styles.ImageContainer}`}>
                        <Link to={`/item/${bestDataApp.ID}`}>
                            <img className={`card-img-top ${styles.image}`}
                                src={baseHost + bestDataApp.ImageUrl} alt="Image" />
                            <div className={`${styles.over}`}>

                            </div>
                        </Link>
                    </div>
                    <div className={`card-footer ${styles.cardFooter}`}>
                        <p className="font-weight-bold mb-0">
                            {bestDataApp.Name}
                        </p>
                        <p className="text-secondary mb-0">
                            {bestDataApp.Category}
                        </p>
                    </div>
                </div>

            </div>}

            {bestDataGame && <div className={`col-4 col-md-2 my-2 ${styles.Apps}`}>
                <div className={`card mx-auto my-auto ${styles.Card}`}>
                    <div className={`img-container ${styles.ImageContainer}`}>
                        <Link to={`/item/${bestDataGame.ID}`}>
                            <img className={`card-img-top ${styles.image}`}
                                src={baseHost + bestDataGames.ImageUrl} alt="Image" />
                            <div className={`${styles.over}`}>
                                {console.log(bestDataGame.ImageUrl)}
                            </div>
                        </Link>
                    </div>
                    <div className={`card-footer ${styles.cardFooter}`}>
                        <p className="font-weight-bold mb-0">
                            {bestDataGames.Name}
                        </p>
                        <p className="text-secondary mb-0">
                            {bestDataGame.Category}
                        </p>
                    </div>
                </div>
            </div>}


            {latestApp && <div className={`col-4 col-md-2 my-2 ${styles.Apps}`}>
                <div className={`card mx-auto my-auto ${styles.Card}`}>
                    <div className={`img-container ${styles.ImageContainer}`}>
                        <Link to={`/item/${bestDataGame.ID}`}>
                            <img className={`card-img-top ${styles.image}`}
                                src={baseHost + latestApp.ImageUrl} alt="Image" />
                            <div className={`${styles.over}`}>

                            </div>
                        </Link>
                    </div>
                    <div className={`card-footer ${styles.cardFooter}`}>
                        <p className="font-weight-bold mb-0">
                            {latestApp.Name}
                        </p>
                        <p className="text-secondary mb-0">
                            {latestApp.Category}
                        </p>
                    </div>
                </div>
            </div>}

        </React.Fragment>

    )
}

export default Apps
