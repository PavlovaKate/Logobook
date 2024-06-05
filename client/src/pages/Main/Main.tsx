/* eslint-disable array-callback-return */
import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';
import type { RootState } from '../../App/store/store';
import BookItem from '../Book/BookItem';
import './Main.css';
import arrLeft from '../../App/assets/img/arrow-left.svg';
import arrLeftDisable from '../../App/assets/img/arrow-left-disable.svg';
import arrRight from '../../App/assets/img/arrow-right.svg';
import arrRightDisable from '../../App/assets/img/arrow-right-disable.svg';

function Main(): JSX.Element {
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

  const books = useSelector((store: RootState) => store.book.books);
  const user = useSelector((store: RootState) => store.auth.user);

  const newBooks = books.filter((book) =>
    book.TagLines.some((tagline) => tagline.Tag.tagName === 'New'),
  );
  const newBooksSteps = newBooks.filter((book, idx) => idx < 7);
  const maxNewSteps = newBooksSteps.length - 2;

  const hitBooks = books.filter((book) =>
    book.TagLines.some((tagline) => tagline.Tag.tagName === 'Hit'),
  );
  const hitBooksSteps = hitBooks.filter((book, idx) => idx < 7);
  const maxHitSteps = hitBooksSteps.length - 2;

  return (
    <div className="Main">
      <NavBar color="#f3eece" />
      <div className="slider">
        <Swiper
          style={{
            '--swiper-pagination-color': '#fff',
          }}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          loop
          // mousewheel
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Mousewheel, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="slides slide-1">
            <p>
              Летняя распродажа
              <br />
              любимых книг
            </p>
            <Link to="/sale">Подробнее</Link>
          </SwiperSlide>
          <SwiperSlide className="slides slide-2">
            <p>Прикоснись к новинкам</p>
            <Link to="/new">Подробнее</Link>
          </SwiperSlide>
          <SwiperSlide className="slides slide-3">
            <p>Наши читатели рекомендуют</p>
            <Link to="/hit">Подробнее</Link>
          </SwiperSlide>
          <SwiperSlide className="slides slide-4">
            <p>Книга - лучший подарок</p>
            <Link to="/giftcard">Подробнее</Link>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container">
        <div className="arrows">
          <h2>Новинки</h2>
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
          {newBooksSteps.map((book, idx) => {
            if (idx >= activeStep && idx <= activeStep + 3)
              return <BookItem book={book} key={book.id} />;
          })}
          {activeStep === 4 && (
            <div className="btn-dop">
              <Link to="/new">
                <button className="btn dop" type="button">
                  дополнительно
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="block">
        <Link to="/sale" className="link link-1">
          РАСПРОДАЖА / УЦЕНЕННЫЕ ТОВАРЫ / РАСПРОДАЖА / УЦЕНЕННЫЕ ТОВАРЫ /
        </Link>
        <Link to="/sale" className="link link-2">
          РАСПРОДАЖА / УЦЕНЕННЫЕ ТОВАРЫ / РАСПРОДАЖА / УЦЕНЕННЫЕ ТОВАРЫ /
        </Link>
      </div>
      <div className="container">
        <div className="arrows">
          <h2>Хиты продаж</h2>
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
          {hitBooksSteps.map((book, idx) => {
            if (idx >= activeStepHit && idx <= activeStepHit + 3) {
              return <BookItem book={book} key={book.id} />;
            }
          })}
          {activeStepHit === 4 && (
            <div className="btn-dop">
              <Link to="/hit">
                <button className="btn dop" type="button">
                  дополнительно
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
