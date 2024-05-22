import React from "react";

export default function Movie(props) {
    const {title, genre, _id} = props
    return (
        <div>
            {/* <p>Hello World</p> */}
            <h1>Title: {title}</h1>
            <p>Genre: {genre}</p>
            <p>ID: {_id}</p>
        </div>
    )
}