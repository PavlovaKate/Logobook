/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { Rating } from '@mui/material';
import { useAppDispatch, type RootState } from '../../App/store/store';
import Error from '../ErrorPage/Error';
import NavBar from '../Navbar/NavBar';
import type { Book } from '../Main/type/type';
import './Book.css';
import Loader from '../../shared/Loader/Loader';
import { stopLoading } from '../Main/mainSlice';
import BookItem from './BookItem';

import arrLeft from '../../App/assets/img/arrow-left.svg';
import arrLeftDisable from '../../App/assets/img/arrow-left-disable.svg';
import arrRight from '../../App/assets/img/arrow-right.svg';
import arrRightDisable from '../../App/assets/img/arrow-right-disable.svg';

function BookPage(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { books, isLoading } = useSelector((store: RootState) => store.book);
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeStepHit, setActiveStepHit] = React.useState(0);

  const handleNext = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleNextHit = (): void => {
    setActiveStepHit((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleBackHit = (): void => {
    setActiveStepHit((prevActiveStep) => prevActiveStep - 1);
  };

  const { id } = useParams();

  setTimeout(() => {
    dispatch(stopLoading());
  }, 2000);

  if (id) {
    const book = books.find((bk) => bk.id === +id);

    if (book) {
      const booksByAuthor = books.filter((bk) => bk.author === book?.author && bk.id !== book.id);
      const newBooksSteps = booksByAuthor.filter((_, idx) => idx < 7);

      let maxNewSteps = 1;
      if (newBooksSteps.length > 4) {
        maxNewSteps = newBooksSteps.length - 3;
      }

      const booksByCategory = books.filter(
        (bk) => bk.category === book.category && bk.id !== book.id,
      );
      const hitBooksSteps = booksByCategory.filter((_, idx) => idx < 7);
      let maxHitSteps = 1;
      if (hitBooksSteps.length > 4) {
        maxHitSteps = hitBooksSteps.length - 3;
      }

      return (
        <>
          <NavBar />
          <div className="BookPage container">
            <div className="BookBlok">
              <div className="BookCover">
                <img src={book?.image} alt={book?.title} />
                {book.TagLines.map((tagline, idx) => (
                  <span key={tagline.id} className={`tag tag-${idx + 1} ${tagline.Tag.tagName} `}>
                    {tagline.Tag.tagName.toLowerCase()}
                  </span>
                ))}
              </div>
              <div className="BookInfo">
                <h2>{book?.title}</h2>
                <h3>{book?.author}</h3>
                <Rating
                  name="read-only"
                  sx={{ color: '#81a67c' }}
                  value={book.RateLines[0].Rate.rateAvg}
                  readOnly
                />
                <div>
                  <p>Издательство</p>
                  <p>{book?.publisher}</p>
                  <p>Количество страниц</p>
                  <p>{book?.pageCount}</p>
                  <p>Наличие</p>{' '}
                  <div>
                    {book.ShopLines.map((sh) => (
                      <p key={sh.id}>
                        {sh.number} шт. - {sh.Shop.adress}
                      </p>
                    ))}
                  </div>
                </div>
                <p className="Price">{book?.amount} ₽</p>
                <button type="button" className="btn">
                  добавить в корзину
                </button>
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
            {booksByAuthor.length > 0 && (
              <>
                <div className="arrows">
                  <h2>Другие книги от автора</h2>
                  <div className="arrows-arrow">
                    <button
                      className="arrow"
                      onClick={handleBack}
                      disabled={activeStep === 0}
                      type="button"
                    >
                      <img src={activeStep === 0 ? arrLeftDisable : arrLeft} alt="arrow-left" />
                    </button>
                    <button
                      className="arrow"
                      onClick={handleNext}
                      disabled={activeStep === maxNewSteps - 1}
                      type="button"
                    >
                      <img
                        src={activeStep === maxNewSteps - 1 ? arrRightDisable : arrRight}
                        alt="arrow-right"
                      />
                    </button>
                  </div>
                </div>
                <div className="BookItems BookItems-new">
                  {newBooksSteps.map((elm, idx) => {
                    if (idx >= activeStep && idx <= activeStep + 3)
                      return <BookItem book={elm} key={elm.id} />;
                  })}
                </div>
              </>
            )}

            <div className="arrows">
              <h2>С этой книгой покупают</h2>
              <div className="arrows-arrow">
                <button
                  className="arrow"
                  onClick={handleBackHit}
                  disabled={activeStepHit === 0}
                  type="button"
                >
                  <img src={activeStepHit === 0 ? arrLeftDisable : arrLeft} alt="arrow-left" />
                </button>
                <button
                  className="arrow"
                  onClick={handleNextHit}
                  disabled={activeStepHit === maxHitSteps - 1}
                  type="button"
                >
                  <img
                    src={activeStepHit === maxHitSteps - 1 ? arrRightDisable : arrRight}
                    alt="arrow-right"
                  />
                </button>
              </div>
            </div>
            <div className="BookItems BookItems-hit">
              {hitBooksSteps.map((el, idx) => {
                if (idx >= activeStepHit && idx <= activeStepHit + 3) {
                  return <BookItem book={el} key={el.id} />;
                }
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
  return isLoading ? <Loader /> : <Error />;
}

export default BookPage;
