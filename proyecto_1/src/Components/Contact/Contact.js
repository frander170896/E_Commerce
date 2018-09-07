// Dependencies
import React, { Component } from 'react';
import register_img from "../Global/images/register.png";

import '../Global/css/Register/register.css';

class Contact extends Component {
    componentWillMount() {
        document.title = 'Register'
    }
    render() {
        return (

            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                {/*<img src={register_img} alt="Register"/>*/}
                <h1> Registro</h1>
                <img src={register_img} alt="Register"/>
                <p>Al regístrate en Job-Search-Delta usted obtendrá múltiples beneficios referente a la bolsa de trabajo que se maneja, podrás analizar diferentes ofertas de trabajo que se ofrecen y ser postulantes de las mismas directamente.
Actualmente se encuentra puestos de trabajo en la mayoría de las áreas lo cual ayudaría a obtener mayores posibilidades de empleo.
Además, puede obtener información directamente del sitio de la pagina la que quieras postular.
Los usuarios tendrán múltiple opciones de filtrado según sus necesidades o su áreas especifica de trabajo lo que le permite tener opciones mas especificas acorde a su experiencia y estudios.
</p>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="register text-center">

                        <form className="register-form" action="" method="">
                            <fieldset className="scheduler-border">
                            <legend className="scheduler-border">Register</legend>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <input className="form-control" type="text" placeholder="Full Name" required/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
                                        <input type="radio" id="male" name="gender"/>
                                        <label htmlFor="male"><span></span>Male</label>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-left">
                                        <input type="radio" id="female" name="gender"/>
                                        <label htmlFor="female"><span></span>Female</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <input className="form-control" type="email" placeholder="Email" required/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <button className="btn btn-primary" type="button" name="finalize">Send</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default Contact;
