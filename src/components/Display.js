import React from 'react';

const Display = ({images}) => {

    return (
        <div className='display-container'>{
            images.map(img => {
                return <div className='apod-image-container'><h2>{img.title}</h2><p>{img.explanation}</p><img src={img.hdurl} alt={img.title} /><p>©{img.copyright}</p></div>
            })
        }</div>
    )
}

export default Display;