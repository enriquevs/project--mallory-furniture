import React from 'react'
import {Switch, Route, Link} from 'react-router-dom';
import './header.css'

import logo from '../../images/mf-logo-white.svg'

class Header extends React.Component{
    constructor(props){
      super(props);
        this.state = {
            categories:[
                {key: 1, name:'Seating'},
                {key: 2, name:'Tables'},
                {key: 3, name:'Desks'},
                {key: 4, name:'Storage'},
                {key: 5, name:'Bedroom'},
                {key: 6, name:'Misc'}
            ]
        }
    }
    render() {
      return (
        <div className="header">
          <Link to="/"  className="header__logo">
            <img src={logo}  alt="Mallory Forniture"/>
          </Link>

          <div className="header__info">
            <Link to="/about">About</Link>
            <Link to="/terms">Terms + Conditions</Link>
          </div>

          <div className="header__divider"></div>

          <div className="header__nav">
            <Link to="/all-products">All</Link>
            {
                this.state.categories.map(categoria => {
                  return  <Link to={'/category/' + categoria.name}>{categoria.name}</Link>
                })
            }
          </div>

          <div className="header__divider"></div>

          <div className="header__car">
            <i class="material-icons">shopping_cart</i>
          </div>
        </div>
      )
    }
}

export default Header;