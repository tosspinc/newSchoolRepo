import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import BooksContext from "../context/BooksContext";
import "../pages/pageCssFiles/books.css"

export default function Books() {
    const { books } = useContext(BooksContext)

    return (
        <div className="books-row">
            <h1>Books</h1>
            <div className='books-grid'>
                {books.slice(0, 8).map(book => (
                    <div key={book._id} className="book-card">
                        <img src={book.imageUrl} alt={book.title} />
                        <h2>{book.title}</h2>
                        <p className="description">{book.description}</p>
                        <p className="price">Price: ${book.price}</p>
                        <p>Likes: {book.likes}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}