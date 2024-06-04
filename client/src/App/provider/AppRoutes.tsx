import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Error from '../../pages/ErrorPage/Error';
import Main from '../../pages/Main/Main';

import Cart from '../../pages/Cart/Cart';
<<<<<<< HEAD
import Bookmark from '../../pages/Bookmark/Bookmark';
=======
import BookPage from '../../pages/Book/BookPage';
import Sale from '../../pages/Sale/Sale';
>>>>>>> 2b5c00bb8bbeb7e30c0549a6983bef8abbc5fe02


function AppRoutes(): JSX.Element {
  return (
    <div className="AppRoutes">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
<<<<<<< HEAD
        <Route path="/bookmark" element={<Bookmark />} />
=======
        <Route path="/books/:id" element={<BookPage />} />
        <Route path="/sale" element={<Sale />} />
>>>>>>> 2b5c00bb8bbeb7e30c0549a6983bef8abbc5fe02
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
