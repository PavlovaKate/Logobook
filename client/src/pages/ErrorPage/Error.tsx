import React from 'react';
import './Error.css';
// import img from '../../App/assets/img/404.png;
import { Link } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';

function Error(): JSX.Element {
  return (
    <div className="Error">
      <NavBar />
      <h1>404</h1>
      <p className="Errortext1">К сожалению, этой страницы нет</p>
      <p className="Errortext2">Но есть много интересных книг!</p>
      <Link to="/">На главную</Link>
    </div>
  );
}

export default Error;
