import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books,setBooks] = useState([]);

  // The very moment our app starts, I need to get an updated list of books, since this function needs to run every time we refresh the page or in other words every time a component re renders, we can use useEffect here.

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }
  useEffect(() => {fetchBooks();},[]);

  // If we call the fetchBooks function directly without a useEffect hook, we will end up in an infinite loop.

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const newBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(newBooks);
  };

  const changeTitleById = async (id,title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`,{
      title
    });
    
    const newBooks = books.map((book) => {
      if(book.id === id){
        return response.data;
      }
      return book;
    });
    setBooks(newBooks);
  }

  const createBook = async (title) => {
    // whenever we make a network request, it is an async function.
    const response = await axios.post("http://localhost:3001/books",{
      title,
    });
    console.log(response);
    const newBooks = [
      ...books,
      response.data,
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
