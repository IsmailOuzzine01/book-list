import { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [titleError, setTitleError] = useState('');
    const [authorError, setAuthorError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.length) setTitleError('This field is required !');
        else setTitleError('');
        if (!author.length) setAuthorError('This field is required !');
        else setAuthorError('');
        if (author.length && title.length) {
            dispatch({type: 'ADD_BOOK', book: {title, author}});
            setTitle('');
            setAuthor('');
            setTitleError('');
            setAuthorError('');
        }
    }
    return (
        <div className="book-form">
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="title" value={title} onChange={e => setTitle(e.target.value)} />
                <span className="error-message">{ titleError }</span>

                <input type="text" placeholder="author" value={author} onChange={e => setAuthor(e.target.value)} />
                <span className="error-message">{ authorError }</span>

                <button type="submit">Add book</button>
            </form>
        </div>
    );
}
 
export default BookForm;