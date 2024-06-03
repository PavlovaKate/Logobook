import React from 'react';
import NavBar from '../Navbar/NavBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../App/store/store';
import BookItem from '../Book/BookItem';
import './Main.css';
import arrLeft from './assets/arrow-left.svg';
import arrLeftDisable from './assets/arrow-left-disable.svg';
import arrRight from './assets/arrow-right.svg';
import arrRightDisable from './assets/arrow-right-disable.svg';

function Main(): JSX.Element {
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeStepHit, setActiveStepHit] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleNextHit = () => {
    setActiveStepHit((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleBackHit = () => {
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
      <NavBar />
      <div className="container">
        <h1>IMAGES SLIDER</h1>
        <div className="arrows">
          <h2>Новинки</h2>
          <div className="arrows-arrow">
            <button className="arrow" onClick={handleBack} disabled={activeStep === 0}>
              <img src={activeStep === 0 ? arrLeftDisable : arrLeft} alt="arrow-left" />
            </button>
            <button
              className="arrow"
              onClick={handleNext}
              disabled={activeStep === maxNewSteps - 1}
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
            <div>
              <button className="btn dop">Дополнительно</button>
            </div>
          )}
        </div>

        <div className="arrows">
          <h2>Хиты продаж</h2>
          <div className="arrows-arrow">
            <button className="arrow" onClick={handleBackHit} disabled={activeStepHit === 0}>
              <img src={activeStepHit === 0 ? arrLeftDisable : arrLeft} alt="arrow-left" />
            </button>
            <button
              className="arrow"
              onClick={handleNextHit}
              disabled={activeStepHit === maxHitSteps - 1}
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
            <div>
              <button className="btn dop">Дополнительно</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
