import React from 'react';

function Apps({ data }) {
    //const { name } = data;
    return (
        <div>
            <p>{data.Name}</p>
            <img src={data.ImageUrl} alt="fuck" />
        </div>
    )
}

export default Apps
