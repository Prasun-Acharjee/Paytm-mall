import React from "react";
import {Route,Switch,withRouter} from "react-router-dom";
import LaptopsHome from "./LaptopsHome";
class Laptops extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={item:""};
    }
    render()
    {
        return(
            <Switch>
            <Route exact path="/Laptops" component={LaptopsHome}/>
         
          </Switch>
        );
    }
}

export default withRouter(Laptops);