import React from 'react';
import { HashRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './App';
import ButtonEx from './ButtonEx';
import SiderDemo  from './layout'
import  {Home} from './BreadcrumbEx'


ReactDOM.render(
<Router>
<Home  />
</Router>
, document.getElementById('root'));