import React, { useEffect, useState } from 'react';
import NavBar from '../Navbar/NavBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../App/store/store';
import BookItem from '../Book/BookItem';
import './Catalog.css';
import ScrollToTopFab from './ScrollToTop';

type CatalogProps = {};

const Catalog = ({}: CatalogProps): JSX.Element => {
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
    setTimeout(() => setCount(8),1000)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
  const allBooks = useSelector((state: RootState) => state.book.books);
  const books = allBooks.filter((book) => {
    return book.id <= count});
  return (
    <div className="Catalog">
      <NavBar color="#547050"/>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        <h2>каталог</h2>
        
        <div className='books'>
        {books && books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
        </div>
        <div onClick={handleGoTop}><ScrollToTopFab/></div>
      </div>
    </div>
  );
};

export default Catalog;