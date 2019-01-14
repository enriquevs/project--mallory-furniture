import React from 'react'
import request from 'superagent';
import CardView from '../cardView/CardView';
import {Link} from 'react-router-dom';

import image from '../../images/landing-splash-bg.png'
import './all.css'

class All extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      show: true,
      all: [],
      sale: [],
    }
  }

  showAll = () =>{
    this.setState({
      show:true
    })
  }

  showSale = () =>{
    this.setState({
      show:false
    })
  }

componentWillMount(){
  this.setState({
    all: [],
    sale:[]
  })

  var API = 'https://mallory-furniture-admin.now.sh/api/v1/products'

  request
    .get(API)
    .then(response =>{
      var productos = response.body;
      var allList = [];
      var saleList = [];

      productos.map(producto =>{
        allList.push(producto);


        if(producto.onSale === true){
          saleList.push(producto);
        }
      })


      this.setState({
        all: allList,
        sale: saleList,
      })
    })
}

    render() {
      return (
        <div>

          <div className="image-container">
            <img src={image} alt="Welcome Image" />
          </div>

          <div className="title">
            <h1>All Products</h1>
            <p>Check out some of our favorite listings</p>
          </div>

          <div className="buttons">
            <button onClick={this.showAll}  className="all" >All Items</button>
            <button onClick={this.showSale}  className="sale" >On Sale</button>
          </div>

          <div className="itemsShow">
            {
              this.state.show === true &&
              <p className="itemsShow__number" >{this.state.all.length}</p>
            }

            {
              this.state.show === false &&
              <p className="itemsShow__number" >{this.state.sale.length}</p>
            }
            <p className="itemsShow__text">Items Showing</p>
          </div>

          <div className="viewer">
            {this.state.show === true &&
              this.state.all.map(product =>{
                return <CardView image={product.imageLink} product={product.item} price={product.price} id={product._id} />
              })
            }

            {this.state.show === false &&
              this.state.sale.map(product =>{
                return <CardView image={product.imageLink} product={product.item} price={product.price} id={product._id} />
              })
            }
          </div>
        </div>
      )
    }
}

export default All
