import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { HomeContext } from "../../context/HomeContext";
import CharacterCard  from "../../components/CharacterCard"

const Location = () => {
  const ruta = useParams()
  const {id} = ruta
  const data = useContext(HomeContext)
  const {getWorld, character,world} = data
  useEffect(async()=>{
    await getWorld(id)
  },[])
  console.log(character);
  return ( 
    <Layout>
    <section className="row">
      <div className="col col-12">
      <h1>{world.type}:{world.name}</h1>
      <h2>{world.dimension}</h2>
      <hr/>
        {Array.isArray(character)?character.map((character) => (
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
        )):""}
      </div>
    </section>
  </Layout>
  );
}
export default Location;