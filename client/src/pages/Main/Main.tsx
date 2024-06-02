import React from 'react';
import NavBar from '../Navbar/NavBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../App/store/store';

function Main(): JSX.Element {
  const books = useSelector((store: RootState) => store.book.books);
  
  return (
    <div className="App">
      <NavBar />
      <h1>IMAGES SLIDER</h1>
      <h2>Новинки</h2>
    </div>
  );
}

export default Main;
