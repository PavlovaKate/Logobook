import React from 'react';
import './User.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';
import { useAppDispatch, type RootState } from '../../App/store/store';
import { logoutUser } from '../Auth/authSlice';

function User(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.user);
  const userCarts = useSelector((store: RootState) => store.cart.carts);
  const books = useSelector((store: RootState) => store.book.books);
  const orders = userCarts.filter((cart) => cart.cartStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onHandleLogout = async (): Promise<void> => {
    const action = await dispatch(logoutUser());

    if (action.type === 'users/logout/fulfilled') {
      navigate('/');
    }
  };
  return (
    <div className="User">
      <NavBar color="#547050" />
      <div className="container">
        <h2>Личный кабинет</h2>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <img src={user?.image} alt="avatar" />
        {orders &&
          orders.map((order) => (
            <>
              <p>{order.orderStatus}</p>
              <p>{order.totalAmount}</p>
              {order.CartLines.map((elm) => (
                <>
                  <p>{elm.count}</p>
                  <p>{elm.bookId}</p>
                  <p>{books.find((el) => el.id === elm.bookId)?.title}</p>
                  <img src={books.find((el) => el.id === elm.bookId)?.image} alt="book cover" />
                </>
              ))}
            </>
          ))}
        <button className="btn" type="button" onClick={onHandleLogout}>
          Выйти
        </button>
      </div>
    </div>
  );
}

export default User;
