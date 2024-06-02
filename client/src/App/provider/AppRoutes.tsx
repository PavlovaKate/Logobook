import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Error from '../../pages/ErrorPage/Error';
import RegistrationPage from '../../pages/Auth/RegistrationPage';
import Main from '../../pages/Main/Main';
import AuthorizationPage from '../../pages/Auth/AuthorizationPage';

function AppRoutes(): JSX.Element {
  return (
    <div className="AppRoutes">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/auth" element={<AuthorizationPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
