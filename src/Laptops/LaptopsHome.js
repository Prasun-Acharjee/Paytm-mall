import React from "react";
import {withRouter,NavLink} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

class LaptopsHome extends React.Component{
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
                    <NavLink to="/Laptops/HP">
                        <Avatar alt="HP" src="data:image/png;base64,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"  style={{ margin: 10,width: 100,height: 100}}/>
                        <h4>HP</h4>
                    </NavLink>
                </div>
                
                <div style={{padding:"10px"}}>
                    <NavLink to="/Laptops/Asus">
                        <Avatar alt="Asus" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///8iRI8eQo4yUZc2U5cQPY4bQI0POovp7PP3+fsANYkAM4hPZqAALoYAMYcVPYyTn8LAx9stTJNZb6UAKYTz9PiirMqzvNTJz+B2hrPO1ON7i7Wcp8ZugK+Ilry7wtjX3Oioss1DXZ1neq0AJIPg5O2Nm79QZ6GDkbk8WJpGYJ5pe6wAEX7O0+IAG4AQg1CpAAAEyUlEQVR4nO3Z6ZaiOBgGYBYlCIawKSiICE251Nj3f3kdZBEQBR3q9Jwz7/OrKuAHr4EkoCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAf82i8DcOvU4ksWlu5q1qmMqNRnvWdkkiIZWLv8XVY9FD+QF7n/+3CB2Z5DRFbCvLKUVyNUid/eQBvw1JlJpInjD6RZjSbFU6yEZw5sWfek/CtVZu8/K4lFS12oeqy7q3hFfH8lVvM3HAg9H5VsU84bfebe1iPGHZIVpfQlJu4wlDV3pep1AkPAqaaccHa9KAmfFwdJ7wazDgGwmvdLBYkdD3BFEIPGE3aUK5e2PwhGE24pzGJ1QGe7BMuN8LzD4K0ybckMejkdB5jP1xwr0/fD2UCbOTQAW2yKIJA+6pIj1QEvbY+CAfaYr9now0xW6atSEjqhX3YboNBMtzesp9aiUnSXI+n2cz+W12IOySy4UXSOS+2UIsdhO985hq82K22EXe4RhPF3BxDL7Cg7WN1c/m4eB7E0WmuT5Md0qqH09XjF8UhM35JKzp9B+V/7tKT+Has66xOvLzDmFszgiRerZtAzMv5seLD7++KdxnQnqbgVR6W3Xov75k+bgLIvOwt66Zunp6huVII9k92yw3r6Vpv2PJdTV5+R1Eobf34xflJpfp1ShOgluDqldjKV+Q5L2bd69B9bk4S44p75MDP0N+inWFlwm1opgem4SvYxTGinq3chdnF5lrz4+zH+3gczUlKHLRoJYnRcxFaxlwW1uViQ2DUpcsw2xsQs0X5u358Db8srqacT5lPxPwpFVHNMoj1H1o8oXky9lLITRfPKZsVEJ/qJix+YmetOrDGtVQeO9DPkzSgUmfLPnYPiahla9Lh4rZE06BpVV96bC0amv0oSB4tkGUVydG0nEJ82eL69Lgwy5fXDwrxi6TJzyysrak1FdIsw+5+JTOGOU3iqFrGiFzpuTrn/tZUX8zNiGvbe7Si01caui3aiyv1oioexMHDOu1It3Wja0+rCzULPb3h9AM0mMyE5lOjXLFqTjBiISkfeqrLL7m1Tbp8mwrGjW0IqfUN6f+C3E9E2pf99ZOH/ZarNSsmkelszQi4fp1Mcsuihjxp2F6ifVE0bz+e/uwT3l1iuVl9jrh0JIuJM2reSL3RyatuUAbnXDWGYH6PlA/WQ28dlktix21CRe3/JGpvglbh6+uUml2efoIwLH6bVIdlIjOsk2qRjJRnL/CjOqbmLAP1ftqbdPZULZLPQ+N5XukJhbVMR7eU913Skc8TYvT3oeX6pCS3ImuvTyHLmWpuoM7ScsTG9wpL9Z3L3/oq85BO+tBdczrhjs3FpaD/aPvg1EJ6XRvSbf31Vp3HH+vDyn/+OBbNObUA+/rYtO9mlnUKwl+8G7CN/pQcm/fz+H1ijNfb45IyOiLSfNdKanGAvaw2FUNRel/89d9VUUMuVwKWaJBuqNMdQDiBnxFuHu2/b6bE08X0JOq3x1s/2Gjmv+IYPcEVLQWMYkaH95GznnW53t9m2yD7i8ebefd+oceD9+yaPnbZwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPC/9QfFP08R2UpKLgAAAABJRU5ErkJggg=="  style={{ margin: 10,width: 100,height: 100}}/>
                        <h4>Asus</h4>
                    </NavLink>
                </div>
            
                <div style={{padding:"10px"}}>
                    <NavLink to="/Laptops/Dell">
                        <Avatar alt="Dell" src="data:image/png;base64,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"  style={{ margin: 10,width: 100,height: 100}}/>
                        <h4>Dell</h4>
                    </NavLink>
                </div>
            
        </div>
    );
}
}

export default withRouter(LaptopsHome);