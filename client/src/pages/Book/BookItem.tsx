import React, { useState } from 'react';
import { Book } from '../Main/type/type';
import './BookItem.css';
import { Button, IconButton, Rating } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../App/store/store';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { updateFavourite } from '../Main/mainSlice';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

type BookItemProps = { book: Book };

const BookItem = ({ book }: BookItemProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const isFav = user
    ? book.Favourites.find((fav) => fav.userId === user.id && fav.bookId === book.id)
      ? true
      : false
    : false;
  const toggleBookmark = () => {
    dispatch(updateFavourite(book.id));
    setOpen(true);
  };
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
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
      <div className="BookItem">
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
              sx={{ padding: 0, position: 'absolute', right: 0 }}
              color="inherit"
              onClick={toggleBookmark}
            >
              {isFav ? <BookmarkIcon /> : <BookmarkBorderIcon />}
            </IconButton>
          )}
        </div>
        <div className="BookItem-bottom">
          <p className="BookItem-author">{book.author}</p>
          <p className="BookItem-title">{book.title}</p>
          <p className="BookItem-amount">{book.amount} ₽</p>
          <Rating
            name="read-only"
            sx={{ color: '#81a67c' }}
            value={book.RateLines[0].Rate.rateAvg}
            readOnly
          />
          {user && <button className="btn">добавить в корзину</button>}
        </div>
      </div>
    </>
  );
};

export default BookItem;
