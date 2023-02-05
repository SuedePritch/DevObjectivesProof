import {ActionType} from '../types/General.types'
import { USER, SET_USER } from "../types/User.types";


export function setUser(user: USER): ActionType{
    return{
        type: SET_USER,
        payload:user
    }
}