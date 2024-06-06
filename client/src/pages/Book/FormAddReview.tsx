/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../App/store/store';
import type { RootState } from '../../App/store/store';
import { loadReview } from '../Main/mainSlice';

const schema = object().shape({
  review: string().trim().required('Отзыв не может быть пустым'),
});

type FormParams = {
  id: number;
};

function FormAddReview({ id }: FormParams): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ review: string }>({
    resolver: yupResolver(schema),
  });

  type Form = {
    review: string;
  };

  const submit = async ({ review }: Form): Promise<void> => {
    const action = await dispatch(loadReview({ userId: user.id, review, bookId: id }));
  };

  return (
    <form className="formReview" onSubmit={handleSubmit(submit)}>
      <label htmlFor="review">
        Оставить отзыв:
        <input type="review" {...register('review')} />
        <span className="errMesage">{errors.review?.message}</span>
      </label>
      <button className="btn" type="submit">
        опубликовать
      </button>
    </form>
  );
}

export default FormAddReview;
