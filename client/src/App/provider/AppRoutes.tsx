import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '../../pages/ErrorPage/Error';
import Main from '../../pages/Main/Main';
import Cart from '../../pages/Cart/Cart';
import Bookmark from '../../pages/Bookmark/Bookmark';
import BookPage from '../../pages/Book/BookPage';
import Sale from '../../pages/Sale/Sale';
import Catalog from '../../pages/Catalog/Catalog';
import New from '../../pages/NewPage/New';

function AppRoutes(): JSX.Element {
  return (
    <div className="AppRoutes">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/books/:id" element={<BookPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/new" element={<New />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
