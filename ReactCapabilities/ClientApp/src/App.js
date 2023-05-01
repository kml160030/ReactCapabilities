import React, { Component } from 'react';
import { Route, Routes, Router } from 'react-router-dom';
//import { Grid } from '';
//import AppRoutes from './AppRoutes';
//import { Layout } from './components/Layout';
import Login from './components/Login';
import Grid from "./GridFunction";
import Plus from "./Plus";
import './custom.css';
import { Provider } from '../../../node_modules/react-redux/es/exports';

export default class App extends Component {
  static displayName = App.name;

    render() {
        return (
            <div className="application">
                {/*<Router>*/}
                {/*    <Switch>*/}
                {/*        <Route exact path="/Grid" element={<Grid />} />*/}
                {/*        <Route exact path="/plus" element={<Plus />} />*/}
                {/*        <Route index element={<Login />} />*/}
                {/*    </Switch>*/}
                {/*</Router>*/}
                <Provider store={store} >
                    <Routes>
                        <Route exact path="/Grid" element={<Grid />} />
                        <Route exact path="/plus" element={<Plus />} />
                        <Route index element={<Login />} />
                        {/*<Route path="*" element={<Login />} />*/}
                    </Routes>
                </Provider>
            </div>
        );
    }
}
