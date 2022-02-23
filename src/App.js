import React from "react";
import { Switch, Route} from "react-router-dom";
import HomeContextPage, { HomeContext } from "./context/HomeContext";
import Home from "./pages/Home/Home";
import Episode from "./pages/Episode/Episode";
import Character from "./pages/Characters/Characters";
import Location from "./pages/Location/location";


function App() {
  return (
    <HomeContextPage>
  <Switch>
      <Route path="/episode/:id">
        <Episode/>
      </Route>
      <Route path="/character/:id">
        <Character/>
      </Route>
      <Route path="/location/:id">
        <Location/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
  </Switch>
  </HomeContextPage>
   )
}

export default App;
