import React from "react";
import { Switch, Route} from "react-router-dom";
import HomeContextPage, { HomeContext } from "./context/HomeContext";
import Home from "./pages/Home/Home";
import Episode from "./pages/Episode/Episode";

function App() {
  return (
    <HomeContextPage>
  <Switch>
      <Route path="/">
        <Home/>
      </Route>
  </Switch>
  </HomeContextPage>
   )
}

export default App;
