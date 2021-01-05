import React from 'react';
import Navbar from './components/navbar';
import About from './pages/About';
import Card from './pages/Card';
import Resume from './pages/resume';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App(){
    return(
        <Router>
            <div>
                <Navbar />
                <Route exact path="/" component={About} />
                <Route exact path="/Card" component={Card} />
                <Route exact path="/Resume" component={Resume} />
                <Route exact path="/Contact" component={Contact} />
            </div>
        </Router>
    )};

export default App;