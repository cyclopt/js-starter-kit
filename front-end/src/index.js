import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bulma/css/bulma.min.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadUsers} from './actions/userActions';
import '../node_modules/toastr/build/toastr.min.css'

const store = configureStore();
store.dispatch(loadUsers());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
