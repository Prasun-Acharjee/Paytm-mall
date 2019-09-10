import React from "react";
import {Route,Switch,withRouter} from "react-router-dom";
import MenFashionHome from "./MenFashionHome";
class MenFashion extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={item:""};
    }
    render()
    {
        return(
            <Switch>
            <Route exact path="/MenFashion" component={MenFashionHome}/>
          
          </Switch>
        );
    }
}

export default withRouter(MenFashion);