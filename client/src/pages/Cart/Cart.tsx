import React from 'react';
import NavBar from '../Navbar/NavBar';
import './Cart.css';
import { Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useSelector } from 'react-redux';
import type { RootState } from '../../App/store/store';
import { useAppDispatch } from '../../App/store/store';
import { deleteCart, updateCart } from './cartSlice';
import CartItem from './components/CartItem';
import type { CartLine } from './type/type';
import { Link } from 'react-router-dom';

function Cart(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const userCarts = useSelector((state: RootState) => state.cart.carts);
  const cart = userCarts.filter((cart) => !cart.cartStatus)[0];
  const totalQuantity = cart
    ? cart.CartLines.reduce((acc, cartline) => acc + cartline.count, 0)
    : 0;
  const handleDeleteCart = () => {
    dispatch(deleteCart(cart.id));
  };
  const handleOrder = async () => {
    const { result } = await (
      await fetch(
        'https://api.telegram.org/bot7351330290:AAGH0_kCrAvJRofQoE9yacRnhA_axJPVZRg/getUpdates',
        {
          method: 'GET',
        },
      )
    ).json();

    if (user && user.tgUsername !== '') {
      const chat_id = result.filter(
        (res: { message: { chat: { username: string } } }) =>
          res.message.chat.username === user?.tgUsername,
      )[0].message.chat.id;
      const text = `
      Заказ на ${cart.totalAmount} рублей оформлен!%0AВсего книг в заказе: ${totalQuantity}%0A%0AСкидывайте донаты выпускной +79110224246💜
      `;
      await fetch(
        `https://api.telegram.org/bot7351330290:AAGH0_kCrAvJRofQoE9yacRnhA_axJPVZRg/sendMessage?chat_id=${chat_id}&text=${text}`,
      );
    }
    dispatch(updateCart(cart.id));
  };

  return (
    <div className="Cart">
      <NavBar color="#547050" />
      <div className="container">
        <h2>корзина</h2>
        {cart && cart.CartLines.length !== 0 && (
          <div style={{ textAlign: 'start' }}>
            <Button
              onClick={handleDeleteCart}
              sx={{
                p: 0,
                color: '#547050',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '150%',
                textTransform: 'none',
                margin: '40px 0',
              }}
              startIcon={<DeleteForeverIcon />}
            >
              Очистить корзину
            </Button>
          </div>
        )}

        {cart && cart.CartLines.length !== 0 && (
          <div className="cart-box">
            <div className="cart-box-left">
              {cart.CartLines.map((cartline: CartLine) => (
                <CartItem cartline={cartline} key={cartline.id} />
              ))}
            </div>
            <div className="cart-box-right">
              <div>
                <h3>Количество товаров</h3>
                <p>{totalQuantity || 0}</p>
              </div>
              <div>
                <h3>Сумма заказа</h3>
                <p> {cart.totalAmount} ₽</p>
              </div>
              <button className="btn" type="button" onClick={handleOrder}>
                Оформить заказ
              </button>
            </div>
          </div>
        )}
        {(!cart || !cart.CartLines.length) && (
          <div className="message">
            <p>Пока ничего нет</p>
            <Link to="/catalog">Подобрать что-то интересное</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
