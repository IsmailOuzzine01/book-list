import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
    const { books } = useContext(BookContext);
    if (books.length){
        return ( 
            <div className="book-list">
                <ul>
                { 
                    books.map(book => (
                        <BookDetails book={book} key={book.id} />
                    ))
                }
                </ul>
            </div>
            
        );
    } else {
        return (
            <div className="empty">No books to read. Hello free time :)</div>
        );
    }
}
 
export default BookList;