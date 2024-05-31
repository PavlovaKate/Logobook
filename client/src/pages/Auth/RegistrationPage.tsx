/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';
import { useForm } from 'react-hook-form';
import { object, ref, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import type { UserWithoutId } from './type/type';
import { useAppDispatch } from '../../App/store/store';
import { loadUser } from './authSlice';

const schema = object().shape({
  username: string().trim().required('Необходимо указать имя'),
  email: string().trim().required('Необходимо указать электронную почту'),
  password: string()
    .trim()
    .required('Необходимо указать пароль')
    .min(3, 'Пароль должен быть более 3 символов')
    .max(5, 'Пароль должен быть не более 5 символов'),
  checkPassword: string()
    .trim()
    .required('Необходимо подтвердить пароль')
    .min(3, 'Пароль должен быть более 3 символов')
    .max(5, 'Пароль должен быть не более 5 символов')
    .oneOf([ref('password')], 'Пароли не совпадают'),
});

function RegistrationPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserWithoutId & { checkPassword: string }>({
    resolver: yupResolver(schema),
  });

  const submit = async (user: UserWithoutId): Promise<void> => {
    const action = await dispatch(loadUser(user));
    if (action.type === 'users/add/fulfilled') {
      navigate('/');
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit(submit)}>
      <label htmlFor="name">
        Name:
        <input type="text" required {...register('name')} />
        <span>{errors.name?.message}</span>
      </label>
      <br />
      <label htmlFor="email">
        Email:
        <input type="email" required {...register('email')} />
        <span>{errors.email?.message}</span>
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input type="password" required {...register('password')} />
        <span>{errors.password?.message}</span>
      </label>
      <br />
      <label htmlFor="password">
        Check password:
        <input type="password" required {...register('checkPassword')} />
        <span>{errors.checkPassword?.message}</span>
      </label>
      <br />
      <div className="button-container">
        <button type="submit">Sign up</button>
        <Link to="/auth" className="login-button">
          Sign in
        </Link>
      </div>
    </form>
  );
}

export default RegistrationPage;
