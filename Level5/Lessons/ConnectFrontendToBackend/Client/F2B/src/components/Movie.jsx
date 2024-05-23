import React from "react";

export default function Movie(props) {
    const {title, genre, _id} = props
    return (
        <div className="movie">
            <h1>Title: {title}</h1>
            <p>Genre: {genre}</p>
            <p>Id: {_id}</p>
            <button 
                className="delete-button"
                onClick={() => props.deleteMovie(_id)}
                >Delete Movie</button>
        </div>
    )
}