/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from 'react';
import './BookItem.css';
import { IconButton, Rating } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useSelector } from 'react-redux';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../App/store/store';
import type { RootState } from '../../App/store/store';
import { addToCart, updateFavourite } from '../Main/mainSlice';

import type { Book } from '../Main/type/type';

type BookItemProps = { book: Book };

function BookItem({ book }: BookItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const isFav = user
    ? !!book.Favourites.find((fav) => fav.userId === user.id && fav.bookId === book.id)
    : false;
  const toggleBookmark = (): void => {
    dispatch(updateFavourite(book.id)).catch(console.log);
    setOpen(true);
  };
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setOpenCart(false);
  };
  const action = (
    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
      <CloseIcon fontSize="small" />
    </IconButton>
  );
  const handleAddToCart = () => {
    dispatch(addToCart(book.id));
    setOpenCart(true);
  };
  return (
    <div className="BookItem">
      <Snackbar
        open={open}
        ContentProps={{
          sx: {
            background: '#547050',
          },
        }}
        autoHideDuration={3000}
        onClose={handleClose}
        message={isFav ? 'Книга добавлена в избранное' : 'Книга удалена из избранного'}
        action={action}
      />
      <Snackbar
        open={openCart}
        ContentProps={{
          sx: {
            background: '#547050',
          },
        }}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Книга добавлена в коризну"
        action={action}
      />
      <div className="BookItem-top">
        {book.TagLines.map((tagline, idx) => (
          <span key={tagline.id} className={`tag tag-${idx + 1} ${tagline.Tag.tagName} `}>
            {tagline.Tag.tagName.toLowerCase()}
          </span>
        ))}
        <div className="BookItem-image">
          <img src={book.image} alt="" />
        </div>
        {user && (
          <IconButton
            sx={{ padding: 0, position: 'absolute', right: 5, top: 5 }}
            color="inherit"
            onClick={toggleBookmark}
          >
            {isFav ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        )}
      </div>
      <div className="BookItem-bottom">
        <p className="BookItem-author">
          {book.author.length < 25 ? book.author : `${book.author.slice(0, 21)}...`}
        </p>
        <p className="BookItem-title">
          {book.title.length < 40 ? book.title : `${book.title.slice(0, 40)}...`}
        </p>
        <Link to={`/books/${book.id}`}>Подробнее...</Link>
        <p className="BookItem-amount">{book.amount} ₽</p>
        <Rating
          name="read-only"
          sx={{ color: '#81a67c' }}
          value={book.RateLines[0].Rate.rateAvg}
          readOnly
        />
        {user && (
          <button className="btn" type="button" onClick={handleAddToCart}>
            добавить в корзину
          </button>
        )}
      </div>
    </div>
  );
}

export default BookItem;
