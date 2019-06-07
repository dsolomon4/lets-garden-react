import React, { Component } from 'react';
import "./header.css";

class Header extends Component {
  
    render() {
        return (
            <header>
                
                    <nav className="navbar navbar-expand-lg navbar-light nav-garden">
                        <a id="brand" className="navbar-brand nav-css" href="/profile"> Let's <br/> Garden  </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div id="nav-bar-right" className="navbar-nav ">
                                {/* <a id="nav-css" className="nav-item nav-link " href="/">Home</a> */}
                                <a id="nav-css" className="nav-item nav-link nav-css" href="/search">Search Plants</a>
                                <a id="nav-css" className="nav-item nav-link nav-css" href="/profile">My Profile</a>
                                <a id="nav-css" className="nav-item nav-link nav-css" href="/contact">Contact Us</a>

                            </div>
                        </div>
                    </nav>

                

            </header>
        )
    }
}


export default Header;