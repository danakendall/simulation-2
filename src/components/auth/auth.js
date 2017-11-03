import React, { Component } from 'react';
import auth_logo from '../../assets/auth_logo.png';
import '../../App.css'

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
        <div className="hbox">
          <div className="panel"></div>
          <div className="main">
            <img src={ auth_logo } className="auth-logo" alt=""/>
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
