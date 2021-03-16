import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from './Context';
import styles from './Games.module.css';
import ReactPaginate from 'react-paginate';


function Games() {

    const { bestGames } = useContext(MyContext);
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    //const [currentpage, setCurrentpage] = useState(0);

    const getDescription = () => {
        const baseUrl = "http://localhost:8080";
        const data = bestGames ? bestGames : [];
        //const data = res.data.data;
        const Slice = data.slice(offset, offset + perPage);
        console.log("SLICE", Slice);
        const postData = Slice.map(pd =>
            <div key={pd.ID}>
                <div className={`${styles.imageDiv}`}>

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
        //setCurrentpage(selectedPage);
        setOffset(Offset);

    };

    useEffect(() => {
        getDescription();

    }, [offset, bestGames])


    return (
        <div className="Games">
            {console.log('gam', bestGames)}

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

export default Games
