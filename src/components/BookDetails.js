import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book }) => {
    const { dispatch } = useContext(BookContext)
    return (
        <li className="book-details" onClick={ () => dispatch({type: 'REMOVE_BOOK', id: book.id}) }>
            <p className="title">{ book.title }</p>
            <p className="author">By : { book.author }</p>
            <p>{book.id}</p>
        </li>
    );
}
 
export default BookDetails;