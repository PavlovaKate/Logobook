import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../Navbar/NavBar';
import type { RootState } from '../../App/store/store';
import BookItem from '../Book/BookItem';
import './Catalog.css';
import ScrollToTopFab from './ScrollToTop';
import ScrollToTop from '../../shared/Scroll/Scroll';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

function Catalog(): JSX.Element {
  const [count, setCount] = useState(16);
  const [sort, setSort] = React.useState('');
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
  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allBooks = useSelector((state: RootState) => state.book.books);

  let sortedBooks = allBooks;
  switch (sort) {
    case 'ratingUp':
      sortedBooks = [...allBooks].sort((a, b) => a.Rate.rateAvg - b.Rate.rateAvg);
      break;
    case 'ratingDown':
      sortedBooks = [...allBooks].sort((a, b) => b.Rate.rateAvg - a.Rate.rateAvg);
      break;
    case 'priceUp':
      sortedBooks = [...allBooks].sort((a, b) => a.amount - b.amount);
      break;
    case 'priceDown':
      sortedBooks = [...allBooks].sort((a, b) => b.amount - a.amount);
      break;
    case 'titleA':
      sortedBooks = [...allBooks].sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0));
      break;
    case 'titleZ':
      sortedBooks = [...allBooks].sort((a, b) => b.title.charCodeAt(0) - a.title.charCodeAt(0));
      break;
    case 'authorA':
      sortedBooks = [...allBooks].sort((a, b) => a.author.charCodeAt(0) - b.author.charCodeAt(0));
      break;
    case 'authorZ':
      sortedBooks = [...allBooks].sort((a, b) => b.author.charCodeAt(0) - a.author.charCodeAt(0));
      break;
    default:
      break;
  }
  const books = sortedBooks.filter((book, idx) => idx + 1 <= count);

  return (
    <>
      <ScrollToTop />
      <div className="Catalog">
        <NavBar color="#547050" />
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
          <h2>каталог</h2>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Сортировка</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sort}
              label="Сортировка"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>все</em>
              </MenuItem>
              <MenuItem value={'ratingDown'}>по рейтингу ↓</MenuItem>
              <MenuItem value={'ratingUp'}>по рейтингу ↑</MenuItem>
              <MenuItem value={'priceUp'}>по цене ↑</MenuItem>
              <MenuItem value={'priceDown'}>по цене ↓</MenuItem>
              <MenuItem value={'titleA'}>по названию (А-я)</MenuItem>
              <MenuItem value={'titleZ'}>по названию (Я-а)</MenuItem>
              <MenuItem value={'authorA'}>по автору (А-я)</MenuItem>
              <MenuItem value={'authorZ'}>по автору (Я-а)</MenuItem>
            </Select>
          </FormControl>
          <div className="books">
            {books && books.map((book) => <BookItem key={book.id} book={book} />)}
          </div>
          <div onClick={handleGoTop}>
            <ScrollToTopFab />
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalog;
