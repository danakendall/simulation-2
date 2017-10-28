import React, { Component } from 'react';
import auth_logo from '../../assets/auth_logo.png';
import '../../App.css'
import { Link } from 'react-router-dom';

class auth extends Component {
  constructor(props){
    super(props);
    this.state={
      username: "",
      password: ""
    }
  }

  // this.register = this.register.bind(this);
  //
  // register() {
  //
  // }


  render() {
    return (
      <div className="vbox viewport">
        <div class="hbox">
          <div className="panel"></div>
          <div class="main">
            <img src={ auth_logo } className="auth-logo"/>
            <h3>Username</h3>
            <input id="username"/>
            <h3>Password</h3>
            <input id="password"/>
            <button id="login">Log in</button>
            <button id="register"
              onClick={this.register}>
              Register</button>
          </div>
          <div className="panel"></div>
        </div>
      </div>
    );
  }
}

export default auth;
