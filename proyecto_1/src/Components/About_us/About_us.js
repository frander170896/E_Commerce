import React,{Component} from 'react';


//Componets
import Info from './Info.js'
import CardGroup from './CardGroup.js'
class About extends Component{

    render (){
        return (
            <div>
                <Info></Info>
                <h1 className="mt-3 mb-3"> Desarrolladores de nuestro sitio web </h1>
                <CardGroup></CardGroup>
            </div>
        );
    }
}

export default About;