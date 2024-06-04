import React from 'react';
import './Bookmark.css';
import NavBar from '../Navbar/NavBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../App/store/store';
import BookItem from '../Book/BookItem';

type BookmarkProps = {};

const Bookmark = ({}: BookmarkProps): JSX.Element => {
  const books = useSelector((store: RootState) => store.book.books);
  const user = useSelector((store: RootState) => store.auth.user);
  console.log(books);
  const favBooks = user
    ? books.filter((book) => book.Favourites.find((favorite) => favorite.userId === user.id))
    : [];
  console.log(favBooks);

  return (
    <div className="Bookmark">
      <NavBar color="#547050" />
      <div className="container">
        <h2>Избранное</h2>
        {favBooks.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Bookmark;
