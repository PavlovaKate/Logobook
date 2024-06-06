import React from 'react';
import NavBar from '../Navbar/NavBar';
import './Cart.css';
import { Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../App/store/store';
import { deleteCart } from './cartSlice';
import CartItem from './components/CartItem';
import { CartLine } from './type/type';

type CartProps = {};

const Cart = ({}: CartProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const userCarts = useSelector((state: RootState) => state.cart.carts);
  const cart = userCarts.filter((cart) => !cart.cartStatus)[0];
  const totalQuantity = cart
    ? cart.CartLines.reduce((acc, cartline) => acc + cartline.count, 0)
    : 0;
  const handleDeleteCart = () => {
    dispatch(deleteCart(cart.id));
  };

  return (
    <div className="Cart">
      <NavBar color="#547050" />
      <div className="container">
        <h2>корзина</h2>
        {cart && (
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
              }}
              startIcon={<DeleteForeverIcon />}
            >
              Очистить корзину
            </Button>
          </div>
        )}

        <div className="cart-box">
          <div className="cart-box-left">
            {cart &&
              cart.CartLines.map((cartline: CartLine) => (
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
              <p>{cart ? cart.totalAmount : 0} ₽</p>
            </div>
            <button className="btn">Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
