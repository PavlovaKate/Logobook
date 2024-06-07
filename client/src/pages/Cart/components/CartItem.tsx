import React from 'react';
import { useSelector } from 'react-redux';
import { Button, ButtonGroup } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch } from '../../../App/store/store';
import type { RootState } from '../../../App/store/store';
import type { CartLine } from '../type/type';
import './CartItem.css';
import { deleteCartLine, updateCartLine } from '../cartSlice';

type CartItemProps = {
  cartline: CartLine;
};

function CartItem({ cartline }: CartItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const books = useSelector((state: RootState) => state.book.books);
  const book = books.find((book) => book.id === cartline.bookId);

  const handleIncreaseCartLine = () => {
    dispatch(updateCartLine({ cartline, action: 'increase' }));
  };
  const handleDecreaseCartLine = () => {
    dispatch(updateCartLine({ cartline, action: 'decrease' }));
  };
  const handleDeleteCartLine = () => {
    dispatch(deleteCartLine(cartline.id));
  };
  return (
    <>
      {book && (
        <div className="CartItem">
          <div className="CartItem-image">
            <img src={book.image} alt="book" />
          </div>
          <div className="CartItem-book">
            <div className="bookInfo">
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
            <div className="bookOrder">
              <div className="bookBtnGroup">
                <ButtonGroup>
                  <Button
                    sx={{ p: 0, color: '#547050', borderColor: '#121711' }}
                    onClick={handleDecreaseCartLine}
                  >
                    <RemoveIcon />
                  </Button>
                  <Button sx={{ p: 0, color: '#547050', borderColor: '#121711' }}>
                    {cartline.count}
                  </Button>
                  <Button
                    sx={{ p: 0, color: '#547050', borderColor: '#121711' }}
                    onClick={handleIncreaseCartLine}
                  >
                    <AddIcon />
                  </Button>
                </ButtonGroup>
                <Button sx={{ p: 0, color: '#547050' }} onClick={handleDeleteCartLine}>
                  <ClearIcon sx={{ p: 0, width: '15px', height: '15px' }} />
                </Button>
              </div>
              <p>{book.amount} ₽</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartItem;
