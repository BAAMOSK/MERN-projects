import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/containers/Navbar/Navbar';
import Landing from './components/layouts/landing/Landing';
import Footer from './components/layouts/footer/Footer';
import Login from './components/containers/Login/Login';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Route path="/" exact component={ Landing } />
                <Route path="/login" exact component={ Login } />
                <Footer />
            </div>
      </ Router>
    );
  }
}

export default App;
