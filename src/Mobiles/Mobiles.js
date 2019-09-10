import React from "react";
import {Route,Switch,withRouter} from "react-router-dom";
import MobilesHome from "./MobilesHome";
import appleproducts from "./appleproducts";
class Mobiles extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={item:""};
    }
    render()
    {
        return(
            <Switch>
            <Route exact path="/Mobiles" component={MobilesHome}/>
            <Route path="/Mobiles/Apple" component={appleproducts}/>
          </Switch>
        );
    }
}

export default withRouter(Mobiles);