import { useState } from "react";

function BookEdit({ bookTitle, id, handleSubmit}){
    const [title,setTitle] = useState(bookTitle);

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        handleSubmit(id,title);
        setTitle('');
    }

    return (
        <form className="book-edit" onSubmit={submitForm}>
            <label>Title</label>
            <input className="input" type="text" onChange={handleChange} value={title}></input>
            <button className="button is-primary">CHANGE</button>
        </form>
    );
}

export default BookEdit;