import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Error from '../../pages/ErrorPage/Error';
import Main from '../../pages/Main/Main';
import BookPage from '../../pages/Book/BookPage';
import Sale from '../../pages/Sale/Sale';

function AppRoutes(): JSX.Element {
  return (
    <div className="AppRoutes">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/books/:id" element={<BookPage />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
