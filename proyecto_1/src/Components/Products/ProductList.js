import React, { Component } from 'react'
import ProductItem from './ProductItem'
import Lupa from '../Global/images/lupa.png'

class ProductList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      api: 'http://localhost/Proyectos/E_Commerce/server/index.php',
      Cart: []
    // jobs: this.props.job_list
    }

    this.componentDidMount = this.componentDidMount.bind(this)
    this.handleClickAddCart = this.handleClickAddCart.bind(this)
    this.componentWillMount = this.componentWillMount.bind(this)

  // console.log(this.state.jobs[0])
  }
  componentDidMount () {
    this.setState({jobs: this.props.job_list})
  }
  handleClickAddCart (data) {
    this.setState({Cart: data})
    console.log(this.state.Cart)
  // aqui se debe de llamar el metodo que consume el web service con el fin de que envie los datos del articulo seleccionado y lo agregue a la variable de session.
  }
  filterList (event) {
    var updatedList = this.state.jobs
    updatedList = updatedList.filter(function (item) {
      return item.title.toLowerCase().search(
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
          console.log(data)
          if (data) {
            this.setState({Cart: data })
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
        {this.state.Cart.map(elemento => <div key={elemento.id}>
                             <ProductItem
                               jobtitle={elemento.nombre}
                               //id: "1", precio: "1000", descripcion: "Art1 desc", nombre: "Art1", estado: "1"
                               company={elemento.nombre}
                               job_type={'Boxer'}
                               job_description={elemento.descripcion}                               
                               company_logo={elemento.imagen}
                               evento={this.handleClickAddCart} />
                           </div>
                            )}
      </div>

    )
  }

}

export default ProductList
