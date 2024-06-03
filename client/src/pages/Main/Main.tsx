import React from 'react';
import NavBar from '../Navbar/NavBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../App/store/store';
import BookItem from '../Book/BookItem';
import './Main.css';

function Main(): JSX.Element {
  const books = useSelector((store: RootState) => store.book.books);
  const user = useSelector((store: RootState)=>store.auth.user)
  const newBooks = books.filter((book)=>book.TagLines.some((tagline) => tagline.Tag.tagName === 'New'))
  const hitBooks = books.filter((book)=>book.TagLines.some((tagline) => tagline.Tag.tagName === 'Hit'))

  return (
    <div className="Main">
      <NavBar />
      <h1>IMAGES SLIDER</h1>
      <h2>Новинки</h2>
      <div className="BookItems BookItems-new">
        {newBooks.map((book, idx) => {
          if (idx < 4) {
            return <BookItem book={book} key={book.id}/>;
          }
        })}
      </div>
      <h2>Хиты продаж</h2>
      <div className="BookItems BookItems-hit">
        {hitBooks.map((book, idx) => {
          if (idx < 4) {
            return <BookItem book={book} key={book.id}/>;
          }
        })}
      </div>
    </div>
  );
}

export default Main;
