import React from 'react';
import type { Review } from '../Main/type/type';
import img from '../../App/assets/img/pedro.gif';
import type { User } from '../Auth/type/type';

type ReviewItemProps = { review: Review; user: User };
function ReviewItem({ review, user }: ReviewItemProps): JSX.Element {
  return (
    <div className="review">
      {user && user.image && user.image.length > 0 ? (
        <img src={user.image} alt="avatar" />
      ) : (
        <img src={img} alt="avatar" />
      )}
      {user && (
        <div className="nameRev">
          <p className="userNameRev">{user.name}</p>
          <p>{review.review}</p>
        </div>
      )}
    </div>
  );
}

export default ReviewItem;
