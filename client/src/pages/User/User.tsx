/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import './User.css';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import NavBar from '../Navbar/NavBar';
import { useAppDispatch, type RootState } from '../../App/store/store';
import { logoutUser, updateUser } from '../Auth/authSlice';
import avatar from '../../App/assets/img/avatar.png';

function User(): JSX.Element | undefined {
  const user = useSelector((store: RootState) => store.auth.user);
  const userCarts = useSelector((store: RootState) => store.cart.carts);
  const { books } = useSelector((store: RootState) => store.book);
  const orders = userCarts.filter((cart) => cart.cartStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [edit, setEdit] = useState(false);

  if (user) {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [tgUsername, setTg] = useState(user.tgUsername);
    const [img, setImg] = useState<File | null>();

    const onHandleLogout = async (): Promise<void> => {
      const action = await dispatch(logoutUser());

      if (action.type === 'users/logout/fulfilled') {
        navigate('/');
      }
    };

    const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      const formData = new FormData();

      if (img) {
        formData.append('name', name);
        formData.append('image', img);
        formData.append('email', email);
        formData.append('tgUsername', tgUsername);
      }
      const action = await dispatch(updateUser({ user: formData, id: user.id }));

      if (action.type === 'users/update/fulfilled') {
        navigate('/user');
      }
    };
    const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) setImg(e.target.files[0]);
    };
    return (
      <div className="User">
        <NavBar color="#547050" />
        <div className="container">
          <h2>Личный кабинет</h2>
          <div className="userContainer">
            <div>
              <form
                style={{ display: 'flex', alignItems: 'start', flexDirection: 'row' }}
                onSubmit={(e) => onHandleSubmit(e)}
              >
                {!edit && (
                  <button
                    type="button"
                    onClick={() => setEdit((prev) => !prev)}
                    style={{ border: 'none', backgroundColor: '#fff' }}
                  >
                    <EditIcon />
                  </button>
                )}
                <button
                  type="submit"
                  onClick={() => setEdit((prev) => !prev)}
                  className={!edit ? 'hide' : 'view'}
                >
                  {edit && <DoneIcon />}
                </button>
                <div className="userInfo">
                  {!edit && !user.image ? (
                    <img src={avatar} alt="" className={!edit ? 'avatar' : 'hide'} />
                  ) : (
                    <img src={user.image} alt="avatar" className={!edit ? 'avatar' : 'hide'} />
                  )}
                  {edit && (
                    <label htmlFor="avatar">
                      {!user?.image ? (
                        <img src={avatar} alt="" className="avatar" />
                      ) : (
                        <img src={user.image} alt="avatar" className="avatar" />
                      )}
                    </label>
                  )}
                  <input
                    type="file"
                    id="avatar"
                    className="avatarInput"
                    onChange={(e) => handleChangeImg(e)}
                  />
                  <div>
                    <div className="name">
                      <p>имя:</p>
                      {edit ? (
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                      ) : (
                        user?.name
                      )}
                    </div>
                    <div className="email">
                      <p>email:</p>
                      {edit ? (
                        <input
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      ) : (
                        user?.email
                      )}
                    </div>
                    <div className="email">
                      <p>telegram:</p>
                      {edit ? (
                        <input
                          type="text"
                          value={tgUsername}
                          onChange={(e) => setTg(e.target.value)}
                        />
                      ) : (
                        user?.tgUsername
                      )}
                    </div>
                  </div>
                </div>
              </form>
              <button
                className="btn"
                type="button"
                onClick={onHandleLogout}
                style={{ marginTop: '60px' }}
              >
                Выйти
              </button>
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
}

export default User;
