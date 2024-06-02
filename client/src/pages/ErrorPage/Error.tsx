import React from 'react';
import './Error.css';
import img from '../../App/assets/404.png';
import NavBar from '../Navbar/NavBar';

function Error(): JSX.Element {
  return (
    <div className="Error">
      <NavBar />
      <h1>404</h1>
      <p className="Errortext1">К сожалению, этой страницы нет</p>
      <p className="Errortext2">Но есть много интересных книг!</p>
    </div>
  );
}

export default Error;
