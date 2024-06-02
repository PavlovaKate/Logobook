import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Error from '../../pages/ErrorPage/Error';
import Main from '../../pages/Main/Main';

function AppRoutes(): JSX.Element {
  return (
    <div className="AppRoutes">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
