import React from "react";

const Card = ({ id, name, username, email }) => {

    return (
        <div id={`1${id}`}>
            <img alt='robots' src={`https://robohash.org/${name}?200x200`} />
            <div >
                <h1>{name}</h1>
                <h2>{username}</h2>
                <h2>{email}</h2>
            </div>
        </div>
    );
};

export default Card;