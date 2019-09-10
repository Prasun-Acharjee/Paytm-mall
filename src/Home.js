import React from "react";
import {withRouter,Link} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
class Home extends React.Component{

render()
{
    var styles={
        container:{
            display:'inline-flex',
            alignText:"center",
            width:'5000px',
            height:'300px',
            margin:"400px"
        }
    }
    return(
        <div style={styles.container}>
            <div style={{padding:"10px"}}>
                <Link to="/Mobiles">
                    <Avatar alt="Mobiles" src={require("./Images/mobile.jpg")}  style={{ margin: 10,width: 110,height: 90}}/>
                    <h4>Mobiles</h4>
                </Link>
            </div>
            
            <div style={{padding:"10px"}}>
                <Link to="/MenFashion">
                    <Avatar alt="Men's Fashion" src={require("./Images/menfashion.png")}  style={{ margin: 10,width: 110,height: 90}}/>
                    <h4>Men's Fashion</h4>
                </Link>
            </div>

            <div style={{padding:"10px"}}>
                <Link to="/Laptops">
                    <Avatar alt="Laptops" src={require("./Images/laptop.png")}  style={{ margin: 10,width: 110,height: 90}}/>
                    <h4>Laptops</h4>
                </Link>
            </div>
        </div>
    );
}
}

export default withRouter(Home);