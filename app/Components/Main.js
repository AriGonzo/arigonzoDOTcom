import React from 'react';
import {
    BrowserRouter as Router,
    Route,
	Switch
} from 'react-router-dom';

import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import Navbar from './Navbar';

export default class Main extends React.Component {

    render() {
        return (
            <Router>
                <div className="container">
                    <Navbar />
    				<Switch>
    				  <Route exact path="/" component={Landing} />
                      <Route exact path="/about" component={About} />
                      <Route exact path="/projects" component={Projects} />
    				</Switch>
                </div>
            </Router>
        );
    }
}