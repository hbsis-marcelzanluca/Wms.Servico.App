import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import App from './paginas/React/App';
import Layout from './paginas/Layout';

const Rotas = props =>
    <Router history={ browserHistory }>
        <Route path="/" component={ App } />
        <Route path="/app" component={ Layout }></Route>
    </Router>

ReactDOM.render(
  <Rotas />,
  document.getElementById('root')
);
