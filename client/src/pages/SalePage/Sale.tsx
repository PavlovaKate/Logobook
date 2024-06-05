import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../Navbar/NavBar';
import type { RootState } from '../../App/store/store';
import BookItem from '../Book/BookItem';
import './Sale.css';
import ScrollToTopFab from './ScrollToTop';

function Sale(): JSX.Element {
  const [count, setCount] = useState(16);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setCount((prev) => prev + 8);
    }
  };
  const handleGoTop = () => {
    setTimeout(() => setCount(8), 1000);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const allBooks = useSelector((state: RootState) => state.book.books);
  const newBook = allBooks.filter((book) =>
    book.TagLines.some((tagline) => tagline.Tag.tagName === 'Sale'),
  );
  const books = newBook.filter((book, index) => index + 1 <= count);
  return (
    <div className="Catalog">
      <NavBar color="#547050" />
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        <h2>скидки</h2>

        <div className="books">
          {books && books.map((book) => <BookItem key={book.id} book={book} />)}
        </div>
        <div onClick={handleGoTop}>
          <ScrollToTopFab />
        </div>
      </div>
    </div>
  );
}

export default Sale;
