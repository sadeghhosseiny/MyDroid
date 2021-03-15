import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from './Context';
import styles from './Games.module.css';
import ReactPaginate from 'react-paginate';
import axios from 'axios';


function Games() {

    const { bestGames } = useContext(MyContext);

    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    //const [currentpage, setCurrentpage] = useState(0);

    const getDescription = () => {

        const data = bestGames ? bestGames : [];
        //const data = res.data.data;
        const Slice = data.slice(offset, offset + perPage);
        console.log("SLICE", Slice);
        const postData = Slice.map(pd =>
            <p key={pd.ID}>
                {pd.Description}
            </p>
        )
        setData(postData);
        setPageCount(Math.ceil(data.length / perPage));

    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const Offset = selectedPage * perPage;
        //setCurrentpage(selectedPage);
        setOffset(Offset);

    };

    useEffect(() => {
        getDescription();

    }, [offset, bestGames])

    // const el = null;
    // if (offset == 0) {
    //     previousLabel = null
    // }

    return (
        <div className="Games">
            {console.log('gam', bestGames)}
            {/* {console.log("perPage", perPage)}
            {console.log("offset", offset)}
            {console.log("data", data)}
            {console.log("dataLength", data.length)} */}
            <div className="d-flex justify-content-center">
                {data}
            </div>
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
    );
}

export default Games
