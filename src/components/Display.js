import React from 'react';

const Display = ({images}) => {
    if(!images) {
        return<h1>Loading</h1>
    };
    return (
        <div className='display-container'>{
            images.map(img => {
                if(img.media_type === 'video') {
                return <div className='apod-image-container'><h2>{img.title}</h2><iframe src={img.url} title={img.title}/><p>©{img.copyright}</p><p>{img.explanation}</p></div>
                } else {
                    return <div className='apod-image-container'><h2>{img.title}</h2><img src={img.hdurl} alt={img.title} /><p>©{img.copyright}</p><p>{img.explanation}</p></div>;
                }
            })
        }</div>
    )
}

export default Display;