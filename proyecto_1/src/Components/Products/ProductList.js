import React, { Component } from 'react'
import ProductItem from './ProductItem'
import Lupa from '../Global/images/lupa.png'

class ProductList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      server_url: 'http://localhost:8098/Proyectos/E_Commerce/',
      api: 'http://localhost:8098/Proyectos/E_Commerce/server/Controlador/index.php',
      Cart: [],
      productos: [],
      datosFiltrados: null,
      isfiltrado: false
    // jobs: this.props.job_list
    }

    this.handleClickAddCart = this.handleClickAddCart.bind(this)
    this.componentWillMount = this.componentWillMount.bind(this)
    this.filterList = this.filterList.bind(this)
  // console.log(this.state.jobs[0])
  }
  existInCart(cart,articulo){
    let existe = false
    for(var i = 0; i< cart.length; i++){
      if(articulo.id == cart[i].id){
        existe = true
      }
    }
    return existe
  }
  saveCartLocalStorage(Aritculo){
    let articulo = JSON.parse(Aritculo)
    let cart = JSON.parse(localStorage.Cart)
    console.log(cart)
    if(!this.existInCart(cart,articulo)){
      cart.push({id: articulo.id,nombre:articulo.nombre,descripcion: articulo.descripcion,precio : articulo.precio,creado: articulo.creado});
      localStorage.setItem('Cart',JSON.stringify(cart))
    }
    console.log(cart)
  }
  handleClickAddCart (data) {
    this.saveCartLocalStorage(data);
  // aqui se debe de llamar el metodo que consume el web service con el fin de que envie los datos del articulo seleccionado y lo agregue a la variable de session.
  }
  filterList (event) {
    var updatedList = this.state.productos
    updatedList = updatedList.filter(function (item) {
      return item.nombre.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1
    })
    this.setState({
      datosFiltrados: updatedList,
      isfiltrado: true
    })
  }
  componentWillMount () {
    var url = this.state.api +
      '/implDeport/'
    try {
      fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          if (data) {
            this.setState({productos: data })
          } else {
          }
        })
    } catch(err) {}
  }

  render () {
    return (
      <div>
        <h2 className='ml-3 mt-3'>Available products</h2>
        <div className='input-group-prepend m-3'>
          <span className='input-group-text' id='inputGroup-sizing-default'><img src={Lupa} /></span>
          <input
            className='form-control'
            aria-label='Default'
            aria-describedby='inputGroup-sizing-default'
            type='text'
            placeholder='Search'
            onChange={this.filterList} />
        </div>
        {!this.state.productos && !this.state.isfiltrado ?
                            <div className="alert alert-primary" role="alert">
                                <i><strong>Loading...</strong></i>
                            </div>
                            :
                            !this.state.isfiltrado && !this.state.datosFiltrados ?
                            this.state.productos.map(elemento => <div key={elemento.id}>
                                                      <ProductItem
                                                        jobtitle={elemento.nombre}
                                                        //id: "1", precio: "1000", descripcion: "Art1 desc", nombre: "Art1", estado: "1"
                                                        nombre={elemento.nombre}
                                                        precio={elemento.precio}
                                                        descripcion={elemento.descripcion}
                                                        server_url={this.state.server_url}                               
                                                        imagen={elemento.imagen}
                                                        creado={elemento.fecha_registro}
                                                        id={elemento.id}
                                                        evento={this.handleClickAddCart} />
                                                    </div>
                                                     )
                                                    :
                                                    this.state.datosFiltrados.map(elemento => <div key={elemento.id}>
                                                      <ProductItem
                                                        jobtitle={elemento.nombre}
                                                        //id: "1", precio: "1000", descripcion: "Art1 desc", nombre: "Art1", estado: "1"
                                                        nombre={elemento.nombre}
                                                        precio={elemento.precio}
                                                        descripcion={elemento.descripcion}
                                                        server_url={this.state.server_url}                               
                                                        imagen={elemento.imagen}
                                                        creado={elemento.fecha_registro}
                                                        id={elemento.id}
                                                        evento={this.handleClickAddCart} />
                                                    </div>
                                                     )
                                                    }
      </div>

    )
  }

}

export default ProductList
