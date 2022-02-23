import axios from "axios";
import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";
export const HomeContext = createContext();



const HomeContextPage= (props)=>{

    const initialState = {
        homeList:[],
        episode:[],
        character:[],
        world:[]
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getEpisodes = async () => {
        const res = await axios.get("https://rickandmortyapi.com/api/episode");
        dispatch({
          type: "GET_USERS",
          payload: res.data.results,
        });
      };

      const getEpisode = async (id) => {
          const data =[]
        const res = await axios.get("https://rickandmortyapi.com/api/episode/"+id);
        await axios.all( res.data.characters.map((endpoint)=> axios.get(endpoint))).then(
            (info)=> info.map((inf) => data.push(inf.data)))
        dispatch({
            type: "GET_EPISODE",
            payload: data,
          });
      };

      const getCharacter = async (id) => {
        const allData=[]
        const data =[]
        const res = await axios.get("https://rickandmortyapi.com/api/character/"+id);
        await axios.all( res.data.episode.map((endpoint)=> axios.get(endpoint))).then(
            (info)=> info.map((inf) => data.push(inf.data)))
            allData.push(res.data)
            allData.push(data)
        dispatch({
          type: "GET_CHARACTER",
          payload: allData,
        });
      };

      const getWorld = async (id) => {
        const allData=[]
        const data =[]
        const res = await axios.get("https://rickandmortyapi.com/api/location/"+id);
        await axios.all( res.data.residents.map((endpoint)=> axios.get(endpoint))).then(
        (info)=> info.map((inf) => data.push(inf.data)))
        allData.push(data)
        allData.push(res.data)
        dispatch({
          type: "GET_WORLD",
          payload: allData,
        });
      };
    return(
        <HomeContext.Provider value={{
            home:state.homeList,
            episode:state.episode,
            character:state.character,
            world:state.world,
            getEpisodes,
            getEpisode,
            getCharacter,
            getWorld
        }}>
            {props.children}
        </HomeContext.Provider>
    )
}
export default HomeContextPage