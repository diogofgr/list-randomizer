import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Edit from './Edit';

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/edit" component={Edit} />
        </Switch>
    );
};

export default App;
