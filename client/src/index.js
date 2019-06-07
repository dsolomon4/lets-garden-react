import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home/home';
import Search from './pages/search/search';
import Profile from './pages/profile/profile';
import Contact from './pages/contact/contact';
import Signup from './pages/signup/signup';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';

const App = () => {
    
      return (
        <div className="App">
          <Router>
            <div>
        
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route path="/profile" component={Profile} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/signup" component={Signup} />
  
          </div>
          </Router>
  
        </div>
      );
    
  }

ReactDOM.render(<App />, document.getElementById('root'));

