// Dependencies
import React, { Component } from 'react';

class SocialBar extends Component {
  render() {
    return (
        <div class="socialBar">

           <div>
               <div>
                    <h3>Siguenos en nuestras redes sociales</h3>
               </div>
               <div>
                    <p>Encontraras las mejores promociones y artículos más recientes,
                       no te pierdas la oportundidad de estar enterado de lo último en 
                       productos deportivos.
                    </p>
               </div>
           </div>
            <ul>
              <li><a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-skype" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
            
            </ul>
            <hr/>
            <div>
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
    );
  }
}

export default SocialBar;
