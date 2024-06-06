import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../Navbar/NavBar';
import type { RootState } from '../../App/store/store';
import BookItem from '../Book/BookItem';
import './Catalog.css';
import ScrollToTopFab from './ScrollToTop';
import ScrollToTop from '../../shared/Scroll/Scroll';
import type { SelectChangeEvent } from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select, styled } from '@mui/material';

function Catalog(): JSX.Element {
  const [count, setCount] = useState(16);
  const [sort, setSort] = React.useState('');
  const [category, setCategory] = React.useState('');
  const allCategories = useSelector((state: RootState) => state.category.categories);
  const categories = [...allCategories]
    .sort((a, b) => b.Books.length - a.Books.length)
    .filter((_, idx) => idx < 8);
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
    setSort(event.target.value);
  };
  const handleChangeCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
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
  if (category !== '') {
    sortedBooks = sortedBooks.filter((book) => book.category === category);
  }

  const books = sortedBooks.filter((_, idx) => idx + 1 <= count);

  const StyledFormControl = styled(FormControl)(() => ({
    width: '20vw',
    '& label': {
      color: '#547050 !important',
    },
    '& .Mui-focused fieldset': {
      borderColor: '#547050 !important',
    },
  }));
  return (
    <>
      <ScrollToTop />
      <div className="Catalog">
        <NavBar color="#547050" />
        <div className="container">
          <h2>каталог</h2>
          <div className="filter">
            <StyledFormControl fullWidth>
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
                <MenuItem value="ratingDown">по рейтингу ↓</MenuItem>
                <MenuItem value="ratingUp">по рейтингу ↑</MenuItem>
                <MenuItem value="priceUp">по цене ↑</MenuItem>
                <MenuItem value="priceDown">по цене ↓</MenuItem>
                <MenuItem value="titleA">по названию (А-я)</MenuItem>
                <MenuItem value="titleZ">по названию (Я-а)</MenuItem>
                <MenuItem value="authorA">по автору (А-я)</MenuItem>
                <MenuItem value="authorZ">по автору (Я-а)</MenuItem>
              </Select>
            </StyledFormControl>
            <StyledFormControl fullWidth>
              <InputLabel id="demo-simple-select-label-1">Сортировка по категориям</InputLabel>
              <Select
                labelId="demo-simple-select-label-1"
                id="demo-simple-select"
                value={category}
                label="Сортировка по категориям"
                onChange={handleChangeCategory}
              >
                <MenuItem value="">
                  <em>все</em>
                </MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.name}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </StyledFormControl>
          </div>
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
