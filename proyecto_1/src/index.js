// Dependencies
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
//import '../node_modules/font-awesome/css/font-awesome.min.css'; 
//import registerServiceWorker from './registerServiceWorker';
// Routes
import AppRoutes from './routes';


render(
    <Router>
      <AppRoutes />
    </Router>,
  document.getElementById('root')
);


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
