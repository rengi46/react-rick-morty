import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { HomeContext } from "../../context/HomeContext";
import CharacterCard  from "../../components/CharacterCard"

const Episode = () => {
  const ruta = useParams()
  const {id} = ruta
  const data = useContext(HomeContext)
  const {getEpisode, episode} = data
  useEffect(async()=>{
    await getEpisode(id)
  },[])
  return ( 
    <Layout>
    <section className="row">
      <div className="col col-12">
        {episode.map((character) => (
          <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            species={character.species}
            status={character.status}
            origin={character.origin}
            location={character.location}
          />
        ))}
      </div>
    </section>
  </Layout>
  );
}
export default Episode;