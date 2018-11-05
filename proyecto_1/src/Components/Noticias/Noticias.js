import React, { Component } from 'react'
import NoticiaItem from './NoticiaItem'
import Lupa from '../Global/images/lupa.png'
import NoticiasForm from './NoticiasForm';

class Noticias extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showLogin: true,
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
        this.handleShowLogin = this.handleShowLogin.bind(this)
        // console.log(this.state.jobs[0])
    }
    handleShowLogin() {
        this.setState({ showLogin: true })
    }
    existInCart(cart, articulo) {
        let existe = false
        for (var i = 0; i < cart.length; i++) {
            if (articulo.id == cart[i].id) {
                return true
            }
        }
        return false
    }
    saveCartLocalStorage(Aritculo) {
        let articulo = JSON.parse(Aritculo)
        let cart = localStorage.Cart ? JSON.parse(localStorage.Cart) : []
        console.log(cart)
        if (!this.existInCart(cart, articulo)) {
            cart.push({ id: articulo.id, nombre: articulo.nombre, descripcion: articulo.descripcion, precio: articulo.precio, creado: articulo.creado });
            localStorage.setItem('Cart', JSON.stringify(cart))
        }
        console.log(cart)
    }
    handleClickAddCart(data) {
        this.saveCartLocalStorage(data);
        window.location.reload()
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
    componentWillMount() {
        var url = this.state.api +
            '/noticia/'
        try {
            fetch(url)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    if (data) {
                        //console.log(data)
                        this.setState({ productos: data })
                    } else {
                    }
                })
        } catch (err) { }
    }

    render() {
        return (
            <div>
                <h2 className='ml-3 mt-3'>Noticias:</h2>
                <div className='row'>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className='input-group-prepend mb-2'>
                            <span className='input-group-text' id='inputGroup-sizing-default'><img src={Lupa} /></span>
                            <input
                                className='form-control'
                                aria-label='Default'
                                aria-describedby='inputGroup-sizing-default'
                                type='text'
                                placeholder='Search'
                                onChange={this.filterList} />
                        </div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <NoticiasForm />
                    </div>
                </div>
                {!this.state.productos && !this.state.isfiltrado ?
                    <div className="alert alert-primary" role="alert">
                        <i><strong>Loading...</strong></i>
                    </div>
                    :
                    !this.state.isfiltrado && !this.state.datosFiltrados ?
                        this.state.productos.map(elemento => <div key={elemento.id}>
                            <NoticiaItem
                                NOTICIA_ID={elemento.NOTICIA_ID}
                                DESCRIPCION={elemento.DESCRIPCION}
                                FECHA={elemento.FECHA}
                                TOPIC={elemento.TOPIC} />
                        </div>
                        )
                        :
                        this.state.datosFiltrados.map(elemento => <div key={elemento.id}>
                            <NoticiaItem
                               NOTICIA_ID={elemento.NOTICIA_ID}
                               DESCRIPCION={elemento.DESCRIPCION}
                               FECHA={elemento.FECHA}
                               TOPIC={elemento.TOPIC} />
                        </div>
                        )
                }
            </div>

        )
    }

}

export default Noticias
