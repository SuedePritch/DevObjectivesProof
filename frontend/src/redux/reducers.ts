import { SET_USER} from "../types/User.types";
import { ActionType } from "../types/General.types";

export interface State {
  user: {
    _id: string,
    username: string,
    email: string,
    token:string
  }
}

const initialState: State = {
  user:{
    _id:"",
    username:"Default Username",
    email: "",
    token:""
  }
};

const reducer= (state = initialState, action:ActionType): State => {
  switch (action.type) {
    case  SET_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
export default reducer;
