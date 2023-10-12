import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, bookDelete, changeTitle }){

    const [showEdit, setShowEdit] = useState(false);

    const handleDelete = () => {
        bookDelete(book.id);
    }

    const handleEdit = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = (id, title) => {
        changeTitle(id, title);
        setShowEdit(false);
    }

    return (
        <div className="book-show">
            <img alt="book-img" src={`https://picsum.photos/seed/${book.id}/300/200`}></img>
            <div>{showEdit ? <BookEdit bookTitle={book.title} handleSubmit={handleSubmit} id={book.id}/> : <h3>{book.title}</h3>}</div>
            <div className="actions">
                <button className="edit" onClick={handleEdit}></button>
                <button className="delete" onClick={handleDelete}>x</button>
            </div>
        </div>
    );
}

export default BookShow;