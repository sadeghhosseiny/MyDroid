import React, { useContext, useEffect, useState } from 'react'
import under_construction from '../under-construction.jpg';
import { MyContext } from './Context';
import styles from './Games.module.css';


const renderData = (bestGames) => {
    return (
        <ul>
            {bestGames ? bestGames.map((com, i) => {

                return <li key={"com" + i}>{com.Description}</li>;

            }) : ""}


        </ul>
    )
}

function Games() {

    const { bestGames } = useContext(MyContext);
    //const tempBestGames = bestGames ? bestGames : "";
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(1);
    const [pageNumberLimit, setPageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    const [data, setData] = useState([]);

    const getDescription = () => {
        bestGames ? bestGames.forEach(item => {
            console.log("Name", item.Name)
            setData(prevArr => [...prevArr, item.Description])
        }) : ""
    }


    useEffect(() => {
        getDescription();

    }, [])

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    }

    const pages = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const renderPageNumber = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {

            return (
                <li key={number} id={number} onClick={handleClick}>
                    {number}
                </li>
            )
        }
        else {
            return null;
        }
    }
    )

    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1)
        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    }

    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1)
        if ((currentPage - 1) % pageNumberLimit == 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = bestGames ? bestGames.slice(indexOfFirstItem, indexOfLastItem) : "";



    return (
        <div className="text-center">
            {console.log("fffffffffffffff", data.length)}
            {/* <img src={under_construction} alt="pic" className={` ${ styles.gamePage }`} /> */}
            {console.log(bestGames)}
            <div>
                {renderData(currentItems)}
            </div>
            <div>
                <div>
                    <button className="btn btn-dark" onClick={handlePrevBtn}>Previous</button>
                </div>
                {renderPageNumber}
                <div>
                    <button className="btn btn-primary" onClick={handleNextBtn}>Next</button>
                </div>
            </div>
        </div>

    )
}

export default Games
