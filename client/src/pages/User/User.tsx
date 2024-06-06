import React from 'react';
import './User.css';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import NavBar from '../Navbar/NavBar';
import { useAppDispatch, type RootState } from '../../App/store/store';
import { logoutUser } from '../Auth/authSlice';
import avatar from '../../App/assets/img/avatar.png';

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

  console.log(user?.image);

  return (
    <div className="User">
      <NavBar color="#547050" />
      <div className="container">
        <h2>Личный кабинет</h2>
        <div className="userContainer">
          <div>
            <div className="userInfo">
              {!user?.image ? (
                <>
                  <EditIcon />
                  <img src={avatar} alt="" className="avatar" />
                </>
              ) : (
                <>
                  <EditIcon />
                  <img src={user?.image} alt="avatar" className="avatar" />
                </>
              )}
              <div>
                <div className="name">
                  <EditIcon />
                  <p>имя:</p>
                  {user?.name}
                </div>
                <div className="email">
                  <EditIcon />
                  <p>email:</p>
                  {user?.email}
                </div>
                <div className="email">
                  <EditIcon />
                  <p>telegram:</p>
                  {user?.email}
                </div>
                <button
                  className="btn"
                  type="button"
                  onClick={onHandleLogout}
                  style={{ marginTop: '60px' }}
                >
                  Выйти
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="name">Заказы</p>
            <div>
              {orders &&
                orders.map((order) => (
                  <div className="orderInfo">
                    <p className="status">{order.orderStatus}</p>
                    <div className="orderDetail">
                      <p className="status">{order.totalAmount} ₽</p>
                      {order.CartLines.map((elm) => (
                        <Link
                          to={`/books/${books.find((el) => el.id === elm.bookId)?.id}`}
                          className="orderBook"
                        >
                          <p>{elm.count} шт.</p>
                          <img
                            src={books.find((el) => el.id === elm.bookId)?.image}
                            alt="book cover"
                            className="bookCover"
                          />
                          <p>{books.find((el) => el.id === elm.bookId)?.title}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
