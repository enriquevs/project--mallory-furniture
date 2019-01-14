import React from 'react'
import request from 'superagent'
import './category.css'

//COMPONENTS
import CardView from '../cardView/CardView'

//RESOURCES
import allImage from '../../images/landing-splash-bg.png'
import seatingImage from '../../images/category-seating.png'
import tablesImage from '../../images/category-tables.png'
import desksImage from '../../images/category-desks.png'
import storageImage from '../../images/category-storage.png'
import bedroomImage from '../../images/category-bedroom.png'
import miscImage from '../../images/category-miscellaneous.png'


class Category extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      backImage: '',
      show: true,
      counter: 0,
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
  
  seatingProducts = () =>{
    this.setState({
      all: [],
      sale:[]
    })
    this.setState({
      backImage: seatingImage,
    })

    var API = 'https://mallory-furniture-admin.now.sh/api/v1/products'

    request
      .get(API)
      .then(response =>{
        var productos = response.body;
        var seatingList = [];
        var seatingSale = [];

        productos.map(producto =>{
          if(producto.category === 'seating'){
            seatingList.push(producto);
          }

          if(producto.category === 'seating' && producto.onSale === true){
            seatingSale.push(producto);
          }
        })

        this.setState({
          all: seatingList,
          sale: seatingSale,
        })
      })
  }

  tablesProducts = () =>{
    this.setState({
      all: [],
      sale:[]
    })
    this.setState({
      backImage: tablesImage,
    })

    var API = 'https://mallory-furniture-admin.now.sh/api/v1/products'

    request
      .get(API)
      .then(response =>{
        var productos = response.body;
        var tablesList = [];
        var tablesSale = [];

        productos.map(producto =>{
          if(producto.category === 'tables'){
            tablesList.push(producto);
          }

          if(producto.category === 'tables' && producto.onSale === true){
            tablesSale.push(producto);
          }
        })

        this.setState({
          all: tablesList,
          sale: tablesSale

        })
      })   
  }

  desksProducts = () =>{
    this.setState({
      all: [],
      sale:[]
    })
    this.setState({
      backImage: desksImage,
    })

    var API = 'https://mallory-furniture-admin.now.sh/api/v1/products'

    request
      .get(API)
      .then(response =>{
        var productos = response.body;
        var desksList = [];
        var desksSale = [];

        productos.map(producto =>{
          if(producto.category === 'desks'){
            desksList.push(producto);
          }

          if(producto.category === 'desks' && producto.onSale === true){
            desksSale.push(producto);
          }
        })

        this.setState({
          all: desksList,
          sale: desksSale
        })
      })
  }

  storageProducts = () =>{
    this.setState({
      all: [],
      sale:[]
    })
    this.setState({
      backImage: storageImage,
    })

    var API = 'https://mallory-furniture-admin.now.sh/api/v1/products'

    request
      .get(API)
      .then(response =>{
        var productos = response.body;
        var storageList = [];
        var storageSale = [];

        productos.map(producto =>{
          if(producto.category === 'storage'){
            storageList.push(producto);
          }

          if(producto.category === 'storage' && producto.onSale === true){
            storageSale.push(producto);
          }
        })

        this.setState({
          all: storageList,
          sale: storageSale
        })
      })    
  }

  bedroomProducts = () =>{
    this.setState({
      all: [],
      sale:[]
    })
    this.setState({
      backImage: bedroomImage,
    })

    var API = 'https://mallory-furniture-admin.now.sh/api/v1/products'

    request
      .get(API)
      .then(response =>{
        var productos = response.body;
        var bedroomList = [];
        var bedroomSale = [];

        productos.map(producto =>{
          if(producto.category === 'bedroom'){
            bedroomList.push(producto);
          }

          if(producto.category === 'bedroom' && producto.onSale === true){
            bedroomSale.push(producto);
          }
        })

        this.setState({
          all: bedroomList,
          sale: bedroomSale
        })
      })    
  }

  miscProducts = () =>{
    this.setState({
      all: [],
      sale:[]
    })
    this.setState({
      backImage: miscImage,
    })

    var API = 'https://mallory-furniture-admin.now.sh/api/v1/products'

    request
      .get(API)
      .then(response =>{
        var productos = response.body;
        var miscList = [];
        var miscSale = [];

        productos.map(producto =>{
          if(producto.category === 'miscellaneous'){
            miscList.push(producto);
          }

          if(producto.category === 'miscellaneous' && producto.onSale === true){
            miscSale.push(producto);
          }
        })

        this.setState({
          all: miscList,
          sale: miscSale
        })
      })    
  }

  componentWillMount(){

    if(this.props.match.params.nameCategory === 'All'){
      this.allProducts();
    }else
    if(this.props.match.params.nameCategory === 'Seating'){
      this.seatingProducts();
    }else
    if(this.props.match.params.nameCategory === 'Tables'){
      this.tablesProducts();
    }else
    if(this.props.match.params.nameCategory === 'Desks'){
      this.desksProducts();
    }else
    if(this.props.match.params.nameCategory === 'Storage'){
      this.storageProducts();
    }else
    if(this.props.match.params.nameCategory === 'Bedroom'){
      this.bedroomProducts();
    }else
    if(this.props.match.params.nameCategory === 'Misc'){
      this.miscProducts();
    }
  }

  componentWillReceiveProps(newProps){
    if(newProps.match.params.nameCategory === 'All'){
      this.allProducts();
    }else
    if(newProps.match.params.nameCategory === 'Seating'){
      this.seatingProducts();
    }else
    if(newProps.match.params.nameCategory === 'Tables'){
      this.tablesProducts();
    }else
    if(newProps.match.params.nameCategory === 'Desks'){
      this.desksProducts();
    }else
    if(newProps.match.params.nameCategory === 'Storage'){
      this.storageProducts();
    }else
    if(newProps.match.params.nameCategory === 'Bedroom'){
      this.bedroomProducts();
    }else
    if(newProps.match.params.nameCategory === 'Misc'){
      this.miscProducts();
    }


  }
    render() {
      return (
        <div>

          <div className="image-container">
            <img src={this.state.backImage}/>
          </div>

          <div className="title">
            <h1>{this.props.match.params.nameCategory} Products</h1>
            <p>Check out some of our favorite listings</p>
          </div>


            <div className="buttons">
              <button onClick={this.showAll}  className="all" >All Items</button>
              <button onClick={this.showSale}  className="sale" >On Sale</button>            
            </div>

          {this.props.match.params.nameCategory !== 'All' &&
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
          }
          
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

export default Category;