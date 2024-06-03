import React from 'react';
import { Link } from 'react-router-dom';
import './BookItem.css';
import { IconButton, Rating } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import type { Book } from '../Main/type/type';

type BookItemProps = { book: Book };

function BookItem({ book }: BookItemProps): JSX.Element {
  return (
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
        <IconButton sx={{ padding: 0, position: 'absolute', right: 5, top: 5 }} color="inherit">
          <BookmarkBorderIcon />
        </IconButton>
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
        <button className="btn" type="button">
          добавить в корзину
        </button>
      </div>
    </div>
  );
}

export default BookItem;
