import React, { useEffect } from 'react';
import './App.css';

import AppRoutes from './provider/AppRoutes';
import { useAppDispatch } from './store/store';
import { checkedUser, loadUsers } from '../pages/Auth/authSlice';
import { loadBooks } from '../pages/Main/mainSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const axiosCheck = async (): Promise<void> => {
    dispatch(checkedUser()).catch(console.log);
  };

  useEffect(() => {
    axiosCheck().catch(console.log);
    dispatch(loadBooks()).catch(console.log);
    dispatch(loadUsers()).catch(console.log);
  }, [dispatch]);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
