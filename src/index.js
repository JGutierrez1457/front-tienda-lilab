import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducersApp from './Reducers';

const store = createStore(//Crear store redux
                reducersApp,//Pasar los reducers
                compose(  
                  applyMiddleware(thunk),//Middleware para manejar solicitud asincronas con la api
                  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//Extensión para monitorear estados redux
                  )
                )

ReactDOM.render( //Provisionamos el store a la aplicación
  <Provider store={store}> 
  <App />
  </Provider>,
  document.getElementById('root')
);

