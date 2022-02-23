import axios from "axios";
import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";
export const HomeContext = createContext();



const HomeContextPage= (props)=>{

    const initialState = {
        homeList:[]

    }

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getEpisodes = async () => {
        const res = await axios.get("https://rickandmortyapi.com/api/episode");
        dispatch({
          type: "GET_USERS",
          payload: res.data.results,
        });
      };

    return(
        <HomeContext.Provider value={{
            home:state.homeList,
            getEpisodes
        }}>
            {props.children}
        </HomeContext.Provider>
    )
}
export default HomeContextPage