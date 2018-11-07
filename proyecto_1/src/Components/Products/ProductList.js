import React, { Component } from 'react'
import ProductItem from './ProductItem'
import Lupa from '../Global/images/lupa.png'
import MetaTags from 'react-meta-tags'

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
    let cart = localStorage.Cart?JSON.parse(localStorage.Cart):[]
    console.log(cart)
    if(!this.existInCart(cart,articulo)){
      cart.push({id: articulo.id,nombre:articulo.nombre,descripcion: articulo.descripcion,precio : articulo.precio,creado: articulo.creado});
      localStorage.setItem('Cart',JSON.stringify(cart))
    }
    console.log(cart)
  }
  handleClickAddCart (data) {
    this.saveCartLocalStorage(data);
    window.location.reload()
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
            //console.log(data)
            this.setState({productos: data })
          } else {
          }
        })
    } catch(err) {}
  }

  /*
                          Do Your Keyword Research
    Implementamos los keywords, ya que investigamos un poco y nos enteramos que
    es una de las maneras más efectivas en las que el navegador encuentren
    nuestro sitio web y asi nos posicione entre los primero resultados, encontramos que 
    las keywords deben estar conformadas de 2 a 3 palabras como minimo, las mismas
    deben estar conformada por palabras que son muy buscadas, si hacemos esto de manera 
    correcta reduciremos las paginas de la competencia, ya que entre más coincida la 
    busqueda del ususario con nuestros keywords mejor seremos posicionados, para lograr
    esto agremas un meta de tipo keyword con frases representativas a cada uno de nuestros
    URLs, con el fin de elegir keywords adecuados, hicimos uso de herramientas como
    Google Keyword Planner,Google Trends y Übersuggest.
   */
  render () {
    if(!localStorage.loggedUser||localStorage.loggedUser==='null'){
      window.location = '/Register'
    }
    return (
      <div>
        <MetaTags>
            <title>E-Commerece | Productos</title>
            <meta name="description" content="Productos, encuentra las mejores ofertas en artículos deportivos del mercado." />
            <meta name="keywords" content="Products,Productos,Artículos deportivos, Suplementos deportivos, Tecnoloía deportiva" />
            <meta property="og:title" content="E-Commerce" />
        </MetaTags>        
        <h2 className='ml-3 mt-3'>Productos</h2>
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

    )
  }

}

export default ProductList
