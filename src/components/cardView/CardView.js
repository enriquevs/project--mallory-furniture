import React from 'react'
import './cardView.css'
import {Link} from 'react-router-dom';

class CardView extends React.Component{
    render() {
      return (
        <Link to={"/product/" + this.props.id}className="card-view">
          <div className="image-container" >
              <img src={this.props.image} alt="Current Product" />
          </div>

          <div className="texts-container" >
              <h5>{this.props.product}</h5>
              <p>${this.props.price}</p>
          </div>
        </Link>
      )
    }
}

export default CardView;