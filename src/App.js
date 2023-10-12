import { useState } from "react";
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList";

function App() {
  const [books,setBooks] = useState([]);

  const deleteBookById = (id) => {
    const newBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(newBooks);
  };

  const changeTitleById = (id,title) => {
    const newBooks = books.map((book) => {
      if(book.id === id){
        return {...book,title};
      }
      return book;
    });
    setBooks(newBooks);
  }

  const createBook = (title) => {
    const newBooks = [
      ...books,
      { id: Math.round(Math.random()*999), title},
    ];
    setBooks(newBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} deleteBook={deleteBookById} changeTitle={changeTitleById}/>
      <BookCreate createBook = {createBook}/>
    </div>
  );
}

export default App;
