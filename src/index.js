import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hydra from './Hydra';

import * as serviceWorker from './serviceWorker';
import materialIcons from 'material-design-icons/iconfont/material-icons.css'
//import "materialize-css/dist/css/materialize.min.css"
//import M from "materialize-css"


ReactDOM.render(<Hydra/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// M.AutoInit();
serviceWorker.unregister();
