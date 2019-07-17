import React from 'react';

const Header = ({date}) => {
    return (
        <div>
            <h1>NASA APOD</h1>
            <h2>{date}</h2>
        </div>
    )
}

export default Header;