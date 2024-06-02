/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import type { UserLogo } from './type/type';
import { useAppDispatch } from '../../App/store/store';
import { loginUser } from './authSlice';

const schema = object().shape({
  email: string().trim().required('Необходимо указать электронную почту'),
  password: string().trim().required('Необходимо указать пароль'),
});

function AuthorizationPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogo>({
    resolver: yupResolver(schema),
  });

  const submit = async (user: UserLogo): Promise<void> => {
    const action = await dispatch(loginUser(user));
    if (action.type === 'users/login/fulfilled') {
      navigate('/');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(submit)}>
      <label htmlFor="email">
        Email:
        <input type="email" required {...register('email')} />
        <span>{errors.email?.message}</span>
      </label>
      <br />
      <label htmlFor="password">
        Пароль:
        <input type="password" required {...register('password')} />
        <span>{errors.password?.message}</span>
      </label>
      <div className="button-container">
        <button type="submit">Вход</button>
      </div>
    </form>
  );
}

export default AuthorizationPage;