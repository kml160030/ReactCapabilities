import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//import { configureStore } from '@reduxjs/toolkit';
//import history from "./components/history";
//import { ConnectedRouter } from 'connected-react-router' 

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const store = createStore(() => ({
    authorized: false
}));
//const store = configureStore({
//    reducer: {},
//    authorized: false
//})


root.render(
    <div className="appContainer" >
        {/*<Provider store={store}>*/}
            {/*<ConnectedRouter history={history}>*/}
            {/*    <App />*/}
            {/*</ConnectedRouter>*/}
            <BrowserRouter basename={baseUrl}>
                {/*<Provider store={store}>*/}
                    <App />
                {/*</Provider>*/}
            </BrowserRouter>
        {/*</Provider>*/}

    </div>

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
