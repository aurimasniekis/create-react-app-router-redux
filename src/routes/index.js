import React from 'react';
import {Switch, Route} from "react-router-dom";
import MainPage from "../pages/Main";

export default function routes() {
    return <Switch>
        <Route exact path="/">
            <MainPage/>
        </Route>
    </Switch>
};
