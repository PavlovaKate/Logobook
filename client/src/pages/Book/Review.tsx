import React from 'react';
import { useSelector } from 'react-redux';
import type { Review } from '../Main/type/type';
import img from '../../App/assets/img/pedro.gif';
import type { RootState } from '../../App/store/store';

type ReviewItemProps = { review: Review };

function ReviewItem({ review }: ReviewItemProps): JSX.Element {
  const users = useSelector((state: RootState) => state.auth.users);
  const user = users.find((el) => el.id === review.userId);
  console.log(user);

  return (
    <div className="review">
      {user && user.image.length > 0 ? (
        <img src={user.image} alt="avatar" />
      ) : (
        <img src={img} alt="avatar" />
      )}
      {user && (
        <div className="name">
          <p>{user.name}</p>
          <p>{review.review}</p>
        </div>
      )}
    </div>
  );
}

export default ReviewItem;
