import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/BirdStore'
import {Provider} from 'mobx-react'

ReactDOM.render(<Provider><App store={store}/></Provider>, document.getElementById('root'));
registerServiceWorker();
