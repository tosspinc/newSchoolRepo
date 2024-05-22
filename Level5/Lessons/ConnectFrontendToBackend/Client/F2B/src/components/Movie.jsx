import React from "react";

export default function Movie(props) {
    console.log(props)
    return (
        <div>
            {/* <p>Hello World</p> */}
            <h1>Title: {props.title}</h1>
            <p>Genre: {props.genre}</p>
        </div>
    )
}