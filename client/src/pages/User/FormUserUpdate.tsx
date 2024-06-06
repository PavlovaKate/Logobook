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
  name: string().trim().required('Необходимо указать имя'),
  email: string().trim().required('Необходимо указать электронную почту'),
});

function FormUserUpdate(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string; email: string }>({
    resolver: yupResolver(schema),
  });

  type Form = {
    name: string;
    email: string;
    image: string;
  };

  // const submit = async ({ review }: Form): Promise<void> => {
  //   const action = await dispatch(loadReview({ userId: user.id, review, bookId: id }));
  // };

  return (
    <form className="formReview" onSubmit={handleSubmit(submit)}>
      <label htmlFor="name">
        Имя:
        <input type="name" {...register('name')} placeholder={user?.name} />
        <span className="errMesage">{errors.review?.message}</span>
      </label>
      <label htmlFor="email">
        Email:
        <input type="email" {...register('email')} placeholder={user?.email} />
        <span className="errMesage">{errors.review?.message}</span>
      </label>
      <label htmlFor="image">
        Фото:
        <input {...register('image')} />
      </label>
      <button className="btn" type="submit">
        редактировать
      </button>
    </form>
  );
}

export default FormUserUpdate;