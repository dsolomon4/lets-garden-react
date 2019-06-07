import React, { Component } from 'react';
import API from '../../utils/API'
import "./home.css"

class Home extends Component {
    state = {
        email: '',
        password: '',
        success: '',
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        if(name === "password") {
            value = value.substring(0, 15);
        }

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        const { email, password } = this.state
        const data = { email, password }
        API.signIn(data).then(res => {
          console.log(res.data)
          if(!res.data) {
            alert("Your email and password do not match")
           
            // get information
            // use the api route to pass data
        } else {
           localStorage.setItem('user', this.state.email)
            console.log(localStorage)

            this.props.history.push("/profile")
        }
        })
    }

    render() {
        return(
            <div className="home-body">
          <div className="container">
 
          <div className="home-holder">
        <section className="section">
      <h2>Welcome to Let's Garden</h2>
      <p>
      Are you new to gardening and need help on when to water your plants? Are you a gardening expert and want to share some of your extra seedlings? Well you’ve come to right place….. Let’s Garden!!!
      </p>
      
    </section>


    <form className="form">
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="Email"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Sign In</button>
          <a href="/signup"  className="btn bth-primary">Sign up!</a>
        </form>
        </div>
        </div>
      </div>
        )
    }
}


export default Home;