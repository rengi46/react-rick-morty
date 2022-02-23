import { useContext, useEffect } from "react";
import { HomeContext } from "../../context/HomeContext";
import Layout from "../../components/Layout"

const Home = () => {
  const data = useContext(HomeContext)
  const {getEpisodes, home} = data

  // useEffect(async  () => {
  //   await getEpisodes()
  // }, [])

 
  return ( 
    <Layout>
      <section className="row">
       <h1>Episodes</h1> 
      </section>
    <hr/>
    <div className="col col-12">

    </div>
    </Layout>

   );
}
 
export default Home;
