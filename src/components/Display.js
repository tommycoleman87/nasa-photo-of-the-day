import React from 'react';

const Display = ({images}) => {

    return (
        <div>{
            images.map(img => {
                return <div><h2>{img.explanation}</h2><img src={img.hdurl} alt={img.title} /></div>
            })
        }</div>
    )
}

export default Display;