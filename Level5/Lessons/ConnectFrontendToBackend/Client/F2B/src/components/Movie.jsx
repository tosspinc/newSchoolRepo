import React from "react";

export default function Movie(props) {
    const {title, genre, _id} = props
    return (
        <div className="movie">
            {/* <p>Hello World</p> */}
            <h1>Title: {title}</h1>
            <p>Genre: {genre}</p>
            <p>Id: {_id}</p>
            {/* <p>Id: {_id}</p> */}
        </div>
    )
}