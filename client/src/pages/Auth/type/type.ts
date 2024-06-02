export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type UserWithoutId = Omit<User, 'id'>;
export type UserLogo = Omit<UserWithoutId, 'name'>;

export type UserId = User['id'];

export type ActionUser =
  | { type: 'users/registration'; payload: User }
  | { type: 'users/login'; payload: User }
  | { type: 'users/logout' }
  | { type: 'users/check'; payload: User };

export type UsersState = {
  user: User | undefined;
  errors: string | undefined;
};

export type UsersResponse = {
  message: string;
  user: User;
  accessToken: string;
};
