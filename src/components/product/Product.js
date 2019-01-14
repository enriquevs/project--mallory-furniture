import React from 'react'
import request from 'superagent'
import './product.css'

class Product extends React.Component{
    constructor(props){
        super(props)

        this.state = {
          image: '',

          name: '',
          price: '',
          condition: '',

          width: '',
          length: '',
          height: '',
        }
    }

componentWillMount(){
  var API = 'https://mallory-furniture-admin.now.sh/api/v1/products'

  request
    .get(API)
    .then(response =>{
      var elementos = response.body
      
      var image

      var name
      var price
      var condition

      var width
      var length
      var height

      elementos.map(elemento =>{
        if(elemento._id === this.props.match.params.id){
          this.setState({
            image: elemento.imageLink,

            name: elemento.item,
            price: elemento.price,
            condition: elemento.condition,

            width: elemento.width,
            length: elemento.length,
            height: elemento.height,
          })
        }
      })
    })
}
    render() {
      return (
        <div className="viewer" >
          <div className="image" >
            <img src={this.state.image}  />
          </div>

          <div className="info">

            <div className="info__top">
              <h2>{this.state.name}</h2>
              <p>${this.state.price}</p>
            </div>

            <div className="info__bottom">

              <div className="info__bottom__condition" >
                <p>Condition</p>
                <p>{this.state.condition}</p>
              </div>
              <div className="info__bottom__measure" >
                <p>Measurements</p>
                <p>W:{this.state.width} L:{this.state.length} H:{this.state.height}</p>
              </div>
              <div className="info__bottom__button" >
                <button> Add to Cart</button>
              </div>

            </div>

          </div>
        </div>
      )
    }
}

export default Product;