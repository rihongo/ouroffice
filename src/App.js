import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './routes/Home';
import About from './routes/About';
import Teams from './routes/Teams';
import Login from './routes/Login';
import NoMatch from './routes/NoMatch';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about/:username" component={About}/>
                        <Route path="/teams" component={Teams}/>
                        <Route path="/login" component={Login}/>
                        <Route component={NoMatch}/>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
