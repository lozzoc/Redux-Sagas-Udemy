import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import reducers from "./reducers"
import {Provider} from "react-redux"
import {createStore,applyMiddleware} from "redux"
import createSagaMiddleware from "redux-saga"
import rootSage from "./sagas"
import "bootstrap/dist/css/bootstrap.min.css"


const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSage)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
