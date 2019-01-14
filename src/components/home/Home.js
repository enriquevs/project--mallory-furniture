import React from 'react'
import request from 'superagent';
import {Link} from 'react-router-dom';

import image from '../../images/landing-splash-bg.png'
import './home.css'

//COMPONENTS
import CardView from '../cardView/CardView'

class Home extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      show: [],
    }
  }

  componentWillMount(){
    var API = 'https://mallory-furniture-admin.now.sh/api/v1/products'
  
    request
      .get(API)
      .then(response =>{
        var productos = response.body;
        var productsShow = [];
        var counter = 0
  
        productos.map(producto =>{
          counter += 1
  
          if(counter < 7){
            productsShow.push(producto);
          }
        })
  
        this.setState({
          show: productsShow
        })
  
      })
  
  }  

    render() {
      return (
        <div>
          <div className="image-container">
            <img src={image} alt="Welcome Image" />
            <h1>Mallory Furniture</h1>
            <p className="image-container__p1" >Your furniture is old.</p>
            <p className="image-container__p2" >Ours is older.</p>
          </div>

          <div className="title">
            <h1>Featured Products</h1>
            <p>Check out some of our favorite listings</p>
          </div>

          <div className="viewer">
            {
              this.state.show.map(item =>{
                return <CardView image={item.imageLink} product={item.item} price={item.price} id={item._id}/>
              })
            }
          </div>

          <div className="title">
            <h1>Browse by Categories</h1>
            <p>Explore by furniture type</p>
          </div>

          <div className="buttons" >
            <Link to="/category/Seating">Seating</Link>
            <Link to="/category/Tables" >Tables</Link>
            <Link to="/category/Desks" >Desks</Link>
            <Link to="/category/Bedroom" >Bedroom</Link>
            <Link to="/category/Storage" >Storage</Link>
            <Link to="/category/Misc" >Misc</Link>
          </div>
        </div>
      )
    }
}

export default Home;