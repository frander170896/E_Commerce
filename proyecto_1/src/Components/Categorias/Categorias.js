import React, { Component } from 'react'
import ProductItem from '../Products/ProductItem'
import Lupa from '../Global/images/lupa.png'
import MetaTags from 'react-meta-tags'

class Categorias extends Component {
  constructor(props) {
    super(props)
    this.state = {
      server_url: 'http://localhost:8098/Proyectos/E_Commerce/',
      api: 'http://localhost:8098/Proyectos/E_Commerce/server/Controlador/index.php',
      Cart: [],
      productos: [],
      datosFiltrados: null,
      categorias:[],
      isfiltrado: false
    }

    this.handleClickAddCart = this.handleClickAddCart.bind(this)
    this.componentWillMount = this.componentWillMount.bind(this)
    this.filterList = this.filterList.bind(this)
    this.filterCategory=this.filterCategory.bind(this)
    // console.log(this.state.jobs[0])
  }
  existInCart(cart, articulo) {
    let existe = false
    for (var i = 0; i < cart.length; i++) {
      if (articulo.id == cart[i].id) {
        existe = true
      }
    }
    return existe
  }
  saveCartLocalStorage(Aritculo) {
    let articulo = JSON.parse(Aritculo)
    let cart = JSON.parse(localStorage.Cart)
    console.log(cart)
    if (!this.existInCart(cart, articulo)) {
      cart.push({ id: articulo.id, nombre: articulo.nombre, descripcion: articulo.descripcion, precio: articulo.precio, creado: articulo.creado });
      localStorage.setItem('Cart', JSON.stringify(cart))
    }
    console.log(cart)
  }
  handleClickAddCart(data) {
    this.saveCartLocalStorage(data);
    // aqui se debe de llamar el metodo que consume el web service con el fin de que envie los datos del articulo seleccionado y lo agregue a la variable de session.
  }
  filterList(event) {
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
  obtenerCategorias(){
    var url = this.state.api +
      '/categoria/categorias'
    try {
      fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          if (data) {
            this.setState({ categorias: data })
          } else {
          }
        })
    } catch (err) { }
  }
  componentWillMount() {
    var url = this.state.api +
      '/categoria/productoscategorias'
    try {
      fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          if (data) {
            console.log(data)
            this.setState({ productos: data })
          } else {
          }
        })
    } catch (err) {

     }
     this.obtenerCategorias();
  }
  filterCategory(event){
    var updatedList = this.state.productos
    
    updatedList = updatedList.filter(function (item) {
      
      return item.CATEGORY_NAME.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1
    })
    event.target.value!='All'?
    this.setState({
      datosFiltrados: updatedList,
      isfiltrado: true
    }):this.setState({
      datosFiltrados:this.state.productos,
      isfiltrado: false
    })
  }
  render() {
    if(!localStorage.loggedUser||localStorage.loggedUser==='null'){
      window.location = '/Register'
    }
    return (
      <div className="row jobs">
        <MetaTags>
            <title>E-Commerece | Categorias</title>
            <meta name="description" content="Categorias de articulos deportivos, tenemos los mejores productos, elige calidad" />
            <meta name="keywords" content="Categorias, Categories, Ropa deportiva, artículos tecnológicos,combos, Individuales,suplementos deportivos" />
            <meta property="og:title" content="E-Commerce" />
        </MetaTags>
        <div className="col-ms-4 col-md-3 col-lg-2 mt-3" >
          <div className='ml-3 mt-3'>
            <label><strong>Seleccione la categoría</strong></label>
            <select id='ubicacion' required className="custom-select" onChange={this.filterCategory}>
              <option value='All'>Todas las categorías</option>
                  {this.state.categorias.map((item, key) =>
                    <option key={item.id}
                        value={item.CATEGORY_NAME}>
                        {item.CATEGORY_NAME}
                    </option>
                  )}
            </select>
          </div>
        </div>
        <div className="col-ms-8 col-md-9 col-lg-10" >

          <h2 className='ml-3 mt-3'>Todas las categorías</h2>
          <div className='input-group-prepend m-3'>
            <span className='input-group-text' id='inputGroup-sizing-default'><img src={Lupa} alt='lupabusqueda' /></span>
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
              <i><strong>Cargando...</strong></i>
            </div>
            :
            !this.state.isfiltrado && !this.state.datosFiltrados ?
              this.state.productos.map(elemento => <div key={elemento.id}>
                <ProductItem
                  jobtitle={elemento.nombre}
                  //id: "1", precio: "1000", descripcion: "Art1 desc", nombre: "Art1", estado: "1"
                  nombre={elemento.nombre}
                  precio={elemento.precio}
                  cantidad={elemento.cantidad}
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
                  cantidad={elemento.cantidad}
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
      </div>
    )
  }

}

export default Categorias
