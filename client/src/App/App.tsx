import React from 'react';
import './App.css';
import AppRoutes from './provider/AppRoutes';
import NavBar from '../pages/NavBar';

function App(): JSX.Element {
  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
    </div>
  );
}

export default App;
