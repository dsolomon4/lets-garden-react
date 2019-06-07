import React, { Component } from 'react';
import Header from '../../components/header/header'
import "./contact.css";

class Contact extends Component {
    render() {
        return (
            <div>
                <Header/>
            
            <div className="contact-body"> 
            <div className="container">
            <h2 id="h2-bio"> Our Team</h2>
            <div className="row" id="row">
            <div className="bio-holder md-5">
            <div className="bio-card">
            <span className="bio-name">Jean Fils-Aime</span>
            <br/>
            <img id="bio-img" alt="Jean Pic" src="/img/jean.jpg"/>

            <br/> 
            <a href="https://www.linkedin.com/in/jean-fils-aime-b1997482/"><i className="fab fa-github-square fa-3x"></i></a>
            <a  href="https://www.linkedin.com/in/jean-fils-aime-b1997482/">    <i className="fab fa-linkedin fa-3x"></i></a>
            </div>
            </div>
            <div className="bio-holder md-5">
            <div className="bio-card">
            <span className="bio-name">Desiree Solomon</span>
            <br/>
            <img id="bio-img" alt="Desiree Pic" src="/img/desiree.jpg"/>
            <br/>
            <a  href="https://www.linkedin.com/in/jean-fils-aime-b1997482/"><i className="fab fa-github-square fa-3x"></i></a>
            <a href="https://www.linkedin.com/in/desireesolomon104/">   <i  className="fab fa-linkedin fa-3x"></i></a>

            </div>
            </div>
            </div>
         
              
</div>
</div>
</div>
        )
    }
}


export default Contact;