import React from 'react';
import {Route,Switch} from "react-router-dom";
import Mobiles from "./Mobiles/Mobiles";
import Home from "./Home";
import Laptops from './Laptops/Laptops';
import MenFashion from './MenFashion/MenFashion';
class App extends React.Component{
  render()
  {
    return(
      <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Mobiles" component={Mobiles}/>
        <Route path="/Laptops" component={Laptops}/>
        <Route path="/MenFashion" component={MenFashion}/>
      </Switch>
      </div>
    );
  }
}
export default App;
