import BookShow from "./BookShow";

function BookList({ books, deleteBook, changeTitle }){
    return (
        <div className="book-list">
            {/* this will give me a list of bookShow components. */}
            {
                books.map((book) => {
                    return (
                        <BookShow key={book.id} book={book} bookDelete={deleteBook} changeTitle={changeTitle}/>
                    );
                })
            }
        </div>
    )
}

export default BookList;