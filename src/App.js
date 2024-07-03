import { BookContext } from './contexts/BookContext';
import Navbar from './components/Navbar'
import { useEffect, useReducer } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import { BookReducer } from './reducers/BookReducer';

function App() {
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books])

  return (
    <div className="App">
      <BookContext.Provider value={{ books, dispatch }}>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContext.Provider>
    </div>
  );
}

export default App;
