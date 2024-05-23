import React, { useState } from "react";

export default function AdMovieForm(props) {
    const  initInputs = { title: "", genre: "" }
    const  [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.addMovie(inputs)        
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add a movie!</h3>
            <input 
                type="text"
                name="title"
                value={inputs.title}
                onChange={handleChange}
                placeholder="Movie Title"
            />
            
            <input 
                type="text"
                name="genre"
                value={inputs.genre}
                onChange={handleChange}
                placeholder="Movie Genre"
            />
            <button>Add Movie</button>
        </form>
    )
}