export const SET_USER = 'SET_USER'

export interface USER {
    _id: string;
    username: string;
    email: string;
    password:string;
    token:string
  }

export type USERS = Array<USER>

export interface SetUserAction {
    type: typeof SET_USER,
    payload:USER
}