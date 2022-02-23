import { useContext, useEffect } from "react";
import { HomeContext } from "../../context/HomeContext";
import Layout from "../../components/Layout"
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";


const Home = () => {
  const data = useContext(HomeContext)
  const {getEpisodes, home} = data

  useEffect(async  () => {
    await getEpisodes()
  }, [])

  console.log(home);
  return ( 
    <Layout>
      <section className="row">
       <h1>Episodes</h1> 
     
    <hr/>
    <div className="col col-12">
   <hr/>
    </div>
    {home.map((hom)=>
      <EpisodeCard  
        id={ hom.id}
        name={hom.name}
        airDate={hom.air_date}
        episode={hom.episode}
        />
    )}
    <div className="col col-12">
    <hr/>
    </div>
    </section>
    </Layout>

   );
}
 
export default Home;
