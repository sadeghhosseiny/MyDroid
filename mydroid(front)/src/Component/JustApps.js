import React, { useState, useEffect, useContext } from 'react';
import styles from './JustApps.module.css';
import { MyContext } from './Context';
import ReactPaginate from 'react-paginate';

function JustApps() {
    const { bestApps } = useContext(MyContext);
    const [offset, setOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [perPage] = useState(1);
    const [data, setData] = useState([]);

    const getApps = () => {
        const baseUrl = "/api";
        const data = bestApps ? bestApps : [];
        console.log("data", data)
        const Slice = data.slice(offset, offset + perPage);
        console.log(Slice)
        const postData = Slice.map(pd =>
            <div key={pd.ID}>
                <div className={`d-flex justify-content-center ${styles.imageDiv}`}>

                    <img className={`my-4 ${styles.image}`} src={baseUrl + pd.ImageUrl} alt="photo Of App" />
                </div>
                <div className="d-flex justify-content-center">
                    <p className={`font-weight-bold ${styles.gameName}`}>{pd.Name}</p>
                </div>
                <div className={`d-flex justify-content-center ${styles.pubDiv}`}>
                    <p className={`text-dark font-weight-bold`}>From</p>
                </div>
                <div className={`d-flex justify-content-center`}>

                    <p className={`${styles.pub}`}>{pd.Publisher}</p>
                </div>
                <div className="d-flex justify-content-center">
                    <p className={`text-secondary font-weight-bold ${styles.description}`}>{pd.Description}</p>
                </div>
                <div className="ml-3">
                    <hr className="d-flex justify-content-center bg-info w-100" />
                </div>
            </div>

        )
        setData(postData);
        setPageCount(Math.ceil(data.length / perPage));
    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const Offset = selectedPage * perPage;
        setOffset(Offset);
    }

    useEffect(() => {
        getApps();
    }, [offset, bestApps])

    console.log("bestapps", bestApps);
    return (
        <div className="Games">

            <div className="d-flex justify-content-center">
                {data}
            </div>
            <div className="mt-3 mb-5">

                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    disabledClassName={`${offset == 0 ? styles.prev : offset == pageCount - 1 ? styles.next : ""}`}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={`pagination ${styles.pagination}`}
                    subContainerClassName={"pages pagination"}
                    activeClassName={`active ${styles.active}`} />
            </div>
        </div>
    );
}

export default JustApps
