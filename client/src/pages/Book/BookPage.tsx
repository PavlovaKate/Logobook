import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import type { RootState } from '../../App/store/store';
import Error from '../ErrorPage/Error';
import NavBar from '../Navbar/NavBar';
import type { Book } from '../Main/type/type';
import './Book.css';

function BookPage(): JSX.Element {
  const navigate = useNavigate();
  const books = useSelector((store: RootState) => store.book.books);

  const { id } = useParams();

  if (id) {
    const book = books.find((bk) => bk.id === +id);

    const booksByAuthor = books.filter((bk) => bk.author === book?.author && bk.id !== book.id);
    const booksByCategory = books.filter(
      (bk) => bk.category === book?.category && bk.id !== book.id,
    );

    if (book) {
      return (
        <>
          <NavBar />
          <div className="BookPage container">
            <div className="BookBlok">
              <div className="BookCover">
                <img src={book?.image} alt={book?.title} />
                {/* <div>
                  {book.TagLines.map((tag) => (
                    <p>{tag.Tag.tagname}</p>
                  ))}
                </div> */}
              </div>
              <div className="BookInfo">
                <h2>{book?.title}</h2>
                <h3>{book?.author}</h3>
                <p>{book?.RateLine.Rate.rateAvg}</p>
                <div>
                  <p>Издательство</p>
                  <p>{book?.publisher}</p>
                  <p>Количество страниц</p>
                  <p>{book?.pageCount}</p>
                  <p>Наличие</p>{' '}
                  <div>
                    {book.ShopLines.map((sh) => (
                      <p>
                        {sh.number} шт. - {sh.Shop.adress}
                      </p>
                    ))}
                  </div>
                </div>
                <p className="Price">{book?.amount} ₽</p>
                <button type="button">добавить в корзину</button>
              </div>
            </div>
            <div>
              <p>Описание</p>
              <p>{book?.description}</p>
            </div>

            <p>{book.Reviews.map((el) => el.review)}</p>
            <p>
              {book.Reviews.map((el) =>
                el.Images.map((img) => <img src={img.image} alt="фото отзыв" />),
              )}
            </p>

            <p>Другие книги от автора</p>
            <div>
              {booksByAuthor.map((el: Book) => (
                <p>{el.title}</p>
              ))}
            </div>
            <p>С этой книгой покупают</p>
            <div>
              {booksByCategory.map((el: Book, ind: number) => {
                if (ind < 8) return <p>{el.title}</p>;
              })}
            </div>
            <button type="button" onClick={() => navigate(-1)}>
              назад
            </button>
          </div>
        </>
      );
    }
  }

  return <Error />;
}

export default BookPage;
