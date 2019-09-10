import React from 'react';
import { Link,Route,withRouter } from 'react-router-dom';
import  Product  from './Product';

const appleproducts = ({ match }) => {

   const productsData = [
    {
        id: 1,
        name: 'Iphone-XR(blue)',
        description: 'price:$599.99',
        status: 'Out of stock'

    },
    {
        id: 2,
        name: 'Iphone-XR(red)',
        description: 'price:$699.99',
        status: 'Available'

    },
    {
        id: 3,
        name: 'Iphone-X 256gb blue',
        description: 'price:$999.99',
        status: 'Available'
    },
     
];
  var linkList = productsData.map( (product) => {
    return(
      <li key={product.id}>
        <Link to={`${match.url}/${product.id}`}>
          {product.name}
        </Link>
      </li>
      )
          
    })
 
  return(
    <div>
     <div style={{ display: 'block',  justifyContent: "space-between" }}>
      <div style={{
        float:'left',
        padding: '10px',
        width: '30%',
        background: '#f0f0f0',
        marginLeft:'auto' }}>

        <h3> Products</h3>
        <ul  style={{ listStyleType: 'none', padding: 0, fontSize:'15px' }}> {linkList} </ul>
      </div>
    </div>
    
    <Route path={`${match.url}/:productId`} render={ (props) => <Product data= {productsData} {...props} />}/>
    <Route exact path={match.url} 
      render={() => (
        <div style={{ textAlign:'center'}}>Please select a product.</div>
    )}/>

    </div>
  )
}
export default withRouter(appleproducts);