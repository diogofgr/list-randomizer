import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Edit from './Edit';

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/edit" component={Edit} />
            <Route render={() => <p>404 page not found</p>} />
        </Switch>
    );
};

export default App;
