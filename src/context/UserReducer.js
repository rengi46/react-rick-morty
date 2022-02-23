import { GET_USERS } from "./types";




export default (state, action) => {
    const { payload, type } = action;
  
    switch (type) {
      case GET_USERS:
        return {
          ...state,
          homeList: payload,
        };
      default:
        return state;
    }
  };
  