/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';
import { useForm } from 'react-hook-form';
import { object, ref, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import type { UserWithoutId } from './type/type';
import { useAppDispatch } from '../../App/store/store';
import { loadUser } from './authSlice';

const schema = object().shape({
  name: string().trim().required('Необходимо указать имя'),
  email: string().trim().required('Необходимо указать электронную почту'),
  tgUsername: string().trim().required('Необходимо указать Telegram username'),
  password: string()
    .trim()
    .required('Необходимо указать пароль')
    .min(3, 'Пароль должен быть не менее 3 символов'),
  checkPassword: string()
    .trim()
    .required('Необходимо подтвердить пароль')
    .min(3, 'Пароль должен быть не менее 3 символов')
    .oneOf([ref('password')], 'Пароли не совпадают'),
});

function RegistrationPage({
  setShowModalR,
  setShowModalA,
}: {
  setShowModalR: (value: boolean) => void;
  setShowModalA: (value: boolean) => void;
}): JSX.Element {
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
      setShowModalR(false);
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit(submit)}>
      <label htmlFor="name">
        Имя:
        <input type="text" {...register('name')} />
        <span className="errMesage">{errors.name?.message}</span>
      </label>
      <br />
      <label htmlFor="email">
        Email:
        <input type="email" {...register('email')} />
        <span className="errMesage">{errors.email?.message}</span>
      </label>
      <br />
      <label htmlFor="tgUsername">
        Telegram:
        <input type="string" {...register('tgUsername')} />
        <span className="errMesage">{errors.email?.message}</span>
      </label>
      <br />
      <label htmlFor="password">
        Пароль:
        <input type="password" {...register('password')} />
        <span className="errMesage">{errors.password?.message}</span>
      </label>
      <br />
      <label htmlFor="password">
        Повторите пароль:
        <input type="password" {...register('checkPassword')} />
        <span className="errMesage">{errors.checkPassword?.message}</span>
      </label>
      <br />
      <div className="button-container">
        <button type="submit">Регистрация</button>
        <button
          className="btn-link"
          type="button"
          onClick={() => {
            setShowModalA(true);
            setShowModalR(false);
          }}
        >
          Вход
        </button>
      </div>
    </form>
  );
}

export default RegistrationPage;
