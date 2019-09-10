import React from "react";
import {withRouter,NavLink} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

class MobilesHome extends React.Component{
render()
{
    var styles={
        container:{
            display:'inline-flex',
            alignText:'center',
            width:'5000px',
            height:'300px',
            margin:"400px"
        }
    }
    return(
        <div style={styles.container}>
            
                <div style={{padding:"10px"}}>
                    <NavLink to="/Mobiles/Apple">
                        <Avatar  src={require("./Images/apple.png")}  style={{ margin: 10,width: 110,height: 90}}/>
                        <h4>Iphone</h4>
                    </NavLink>
                </div>
                
                <div style={{padding:"10px"}}>
                    <NavLink to="/Mobiles/Samsung">
                        <Avatar alt="Samsung" src={require("./Images/samsung.png")}   style={{ margin: 10,width: 110,height: 90}}/>
                        <h4>Samsung</h4>
                    </NavLink>
                </div>   
            
                <div style={{padding:"10px"}}>
                    <NavLink to="/Mobiles/RealMe">
                        <Avatar alt="RealMe" src={require("./Images/realme.png")}   style={{ margin: 10,width: 110,height: 90}}/>
                        <h4>RealMe</h4>
                    </NavLink>
                </div> 
            
        </div>
    );
}
}

export default withRouter(MobilesHome);