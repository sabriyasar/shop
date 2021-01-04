import axios from 'axios';
import { Dispatch } from 'react';
import { BASE_URL } from '../../utils';

export interface UserModel {
    id: string;
    email: string;
    password: string;
    token: string;
}

export interface LoginAction {
    readonly type: 'ON_LOGIN';
    payload: UserModel;
}

export interface ErrorAction {
    readonly type: 'ON_ERROR';
    payload: any;
}

export type UserAction = LoginAction | ErrorAction;

export const onLogin = (email: string, password: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
      try {
        const response = await axios.post<UserModel>(`${BASE_URL}mock-login`, {
          email,
          password,
        });
        if (!response) {
          dispatch({
            type: 'ON_ERROR',
            payload: 'Login issue with API',
          });
        } else {
          dispatch({
            type: 'ON_LOGIN',
            payload: response.data,
          });
          console.log(response.data);
        }
      } catch (error) {
        console.log('sabri');
        dispatch({
          type: 'ON_ERROR',
          payload: error,
        });
      }
    };
  };