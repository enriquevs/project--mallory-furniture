import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './app.css'

//COMPONENTS
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Home from './components/home/Home'
import About from './components/about/About'
import Press from './components/press/Press'
import Terms from './components/terms/Terms'

import All from './components/all/All'
import Category from './components/category/Category'
import Product from './components/product/Product'


class App extends Component {
  render() {
    return (
      <div className="App">

      <Header />
        
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/404" component={Press} />
            <Route exact path="/terms" component={Terms} />

            <Route exact path="/all-products" component={All} />
            <Route path="/category/:nameCategory" component={Category} />
            <Route path="/product/:id" component={Product} />
          </Switch>
        </div>

      <Footer />
      </div>
    );
  }
}

export default App;