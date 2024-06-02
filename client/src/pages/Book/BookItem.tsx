import React from 'react';
import { Book } from '../Main/type/type';
import './BookItem.css';

type BookItemProps = {book: Book};

const BookItem = ({book}: BookItemProps): JSX.Element => {
  console.log(book.TagLines);
  
  return (
    <div className="BookItem">
      <div>
        {book.TagLines.map((tag)=> (<span className={tag.Tag.tagName}>{tag.Tag.tagName}</span>))}
      </div>
      <button>Fav</button>
      <div><img src={book.imageSmall} alt="" /></div>
      <div>
        <p>{book.author}</p>
        <p>{book.title}</p>
        <p>{book.amount}</p>
        <div>{book.RateLines[0].Rate.rateAvg}</div>
        <button>Добавить в корзину</button>
      </div>

    </div>
  );
};

export default BookItem;
