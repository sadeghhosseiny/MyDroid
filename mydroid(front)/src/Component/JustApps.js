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
        const data = bestApps ? bestApps : [];
        console.log("data", data)
        const Slice = data.slice(offset, offset + perPage);
        console.log(Slice)
        const postData = Slice.map(pd => {
            return (
                <div key={pd.ID}>
                    <p>{pd.Description}</p>
                </div>
            )
        })
        setData(postData);
        setPageCount(Math.ceil(data.length / perPage));
    }

    const handleClick = (e) => {
        const selectedPage = e.selected;
        const Offset = selectedPage * perPage;
        setOffset(Offset);
    }

    useEffect(() => {
        getApps();
    }, [offset, bestApps])

    console.log("bestapps", bestApps);
    return (
        <div>
            {data}
            {console.log("MAIN", data)}

            <div>
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    disabledClassName={`${offset == 0 ? styles.prev : offset == pageCount - 1 ? styles.next : ""}`}
                    pageCount={pageCount}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    onPageChange={handleClick}
                    containerClassName={`${styles.pagination}`}
                    activeClassName={`active ${styles.active}`}
                />
            </div>
        </div>
    )
}

export default JustApps
