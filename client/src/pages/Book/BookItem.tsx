import React from 'react';
import { Book } from '../Main/type/type';
import './BookItem.css';
import { IconButton, Rating } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

type BookItemProps = { book: Book };

const BookItem = ({ book }: BookItemProps): JSX.Element => {
  return (
    <div className="BookItem">
      <div className="BookItem-top">
        {book.TagLines.map((tagline, idx) => (
          <span key={tagline.id} className={`tag tag-${idx+1} ${tagline.Tag.tagName} `}>
            {tagline.Tag.tagName.toLowerCase()}
          </span>
        ))}
        <div className="BookItem-image">
          <img src={book.image} alt="" />
        </div>
        <IconButton sx={{ padding: 0, position: 'absolute', right: 0 }} color="inherit">
          <BookmarkBorderIcon />
        </IconButton>
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
        <button className="btn">добавить в корзину</button>
      </div>
    </div>
  );
};

export default BookItem;
