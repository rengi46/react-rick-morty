import { GET_USERS } from "./types";




export default (state, action) => {
    const { payload, type } = action;
  
    switch (type) {
      case GET_USERS:
        return {
          ...state,
          homeList: payload,
        };
        case "GET_EPISODE":
          return {
            ...state,
            episode: payload,
          };
        case "GET_CHARACTER":
          return {
            ...state,
            character: payload[0],
            episode: payload[1],
          };
        case "GET_WORLD":
          return {
            ...state,
            character: payload[0],
            world: payload[1],
          };
      default:
        return state;
    }
  };
  