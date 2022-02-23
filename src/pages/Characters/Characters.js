import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { HomeContext } from "../../context/HomeContext";
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";

const Character = () => {
  const ruta = useParams()
  const {id} = ruta
  const data = useContext(HomeContext)
  const {getCharacter, character,episode} = data
  useEffect(async()=>{
    await getCharacter(id)
  },[])
  console.log(character);
  return ( 
    <Layout>
    <section className="row">
      <div className="col col-12">
      <img src={character.image} alt="img charcter" />
      <h1>{character.name}</h1>
      <hr/>
      <h3>Character</h3>
      <p>{character.species}|{character.status}</p>
      <div>
          <h3>Origin</h3>
          <p>{ (character.origin)? character.origin.name :"" }</p>
          <h3>Location</h3>
          <p>{ (character.location)? character.location.name :"" }</p>
      </div>
        {episode.map((hom) => (
           <EpisodeCard  
            id={ hom.id}
            name={hom.name}
            airDate={hom.air_date}
            episode={hom.episode}
            />
        ))}
      </div>
    </section>
  </Layout>
  );
}
export default Character;