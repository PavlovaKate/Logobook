import React from 'react';
import './Bookmark.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';
import type { RootState } from '../../App/store/store';
import BookItem from '../Book/BookItem';

function Bookmark(): JSX.Element {
  const books = useSelector((store: RootState) => store.book.books);
  const user = useSelector((store: RootState) => store.auth.user);
  const favBooks = user
    ? books.filter((book) => book.Favourites.find((favorite) => favorite.userId === user.id))
    : [];
  return (
    <div className="Bookmark">
      <NavBar color="#547050" />
      <div className="container">
        <h2>Избранное</h2>
        <div className="bookContainer">
          {favBooks.length > 0 && favBooks.map((book) => <BookItem key={book.id} book={book} />)}
        </div>
        <div className="message">
          {favBooks.length === 0 && (
            <>
              <p>Пока ничего нет</p>
              <Link to="/catalog">Подобрать что-то интересное</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bookmark;
