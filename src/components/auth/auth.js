import React, { Component } from 'react';
import auth_logo from '../../assets/auth_logo.png';
import '../../App.css'
import { Link } from 'react-router-dom';

class auth extends Component {
  render() {
    return (
      <div className="vbox viewport">
        <div class="hbox">
          <div className="panel"></div>
          <div class="main">
            <img src={ auth_logo } className="auth-logo"/>
          </div>
          <div className="panel"></div>
        </div>
      </div>
    );
  }
}

export default auth;
