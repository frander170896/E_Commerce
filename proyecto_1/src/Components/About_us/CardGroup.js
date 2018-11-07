// Dependencies
import React, { Component } from 'react'
import axios from 'axios'
import Facebook from '../Global/icons/facebook.png'
import Github from '../Global/icons/github.png'
class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usuario: this.props.usuario,
      about_me: this.props.about_me,
      red_social: this.props.red_social,
      trabajo_git: this.props.trabajo_git
    }
  }
  render() {
    return (
      <div className='card pl-3 pr-3 mb-3'>
        <img className='card-img-top img-fluid rounded' src={this.state.usuario.avatar_url} alt='user' />
        <div className='card-body'>
          <h5 className='card-title'>{this.state.usuario.name ? this.state.usuario.name : this.state.usuario.login}</h5>
          <p className='card-text'>
            {this.state.usuario.bio ? this.state.usuario.bio : this.state.about_me}
          </p>
          <p className='card-text'>
            <small className='text-muted'></small>
          </p>
        </div>
        <div className='card-footer'>
          <small className='text-muted'><i>{this.state.usuario.created_at}</i> <hr /> <p> Follow me: </p> <a href={this.state.red_social}><img className='rounded' src={Facebook} alt='Card image cap' /></a> <a href={this.state.trabajo_git}><img className='rounded' src={Github} alt='Card image cap' /></a></small>
        </div>
      </div>
    )
  }
}
class CardGroup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gerson: null,
      frander: null,
      marco: null,
      nacho: null,
      anuard: null
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    var self = this
    // axios.get('https://api.github.com/users/gersonvargas')
    // marcoc22
    // NAchoAvalos
    // frander170896
    axios.get('https://api.github.com/users/gersonvargas')
      .then(function (response) {
        self.setState({ gerson: response.data })
      }).catch(function (res) { })
    axios.get('https://api.github.com/users/frander170896')
      .then(function (response) {
        self.setState({ frander: response.data })
      }).catch(function (res) { })
    axios.get('https://api.github.com/users/depm1992')
      .then(function (response) {
        self.setState({ anuard: response.data })
      }).catch(function (res) { })
  }

  render() {
    return (
      <div>
      <div className='card-group'>
        {this.state.gerson ? <Card
          usuario={this.state.gerson}
          red_social={'https://www.facebook.com'}
          trabajo_git={'https://github.com/gersonvargas'}
          about_me={'I am working as an Oracle DBA at GBSYS company. Also, I am studying at UNA, Costa Rica.'} /> : ''}
        {this.state.frander ? <Card
          usuario={this.state.frander}
          red_social={'https://www.facebook.com'}
          trabajo_git={'https://github.com/frander170896'}
          about_me={'I am working as a developer, graduated from UNA. Currently I am studying at UNA, Costa Rica.'} /> : ''}
        {this.state.anuard ? <Card
          usuario={this.state.anuard}
          red_social={'https://www.facebook.com'}
          trabajo_git={'https://github.com/depm1992'}
          about_me={'I am working as full stack developer and studying a degree at UNA.'} /> : ''}
       
      </div>
      <div className="row m-3">
          <div className="Face-Publicaciones">
            <h3>Publicaciones recientes en Facebook</h3>
            <p>Click en me gusta y participa en premios mensuales...</p>
          </div>
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FEKOTRONICS%2F&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
            width="500" height="500"
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media">
          </iframe>
        </div>
      </div>
    )
  }
}

export default CardGroup
