import React,{Component} from 'react';


//Componets
import Info from './Info.js'
import CardGroup from './CardGroup.js'
class About extends Component{

    render (){
        return (
            <div>
                <Info></Info>
                <CardGroup></CardGroup>
            </div>
        );
    }
}

export default About;