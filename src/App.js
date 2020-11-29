import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';

const App = ({history}) => (
    <Router history={history}>
        <Routes/>
    </Router>
)

export default App;
