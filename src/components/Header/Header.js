import React, { Component } from 'react';
import '../../App.css';
import logo from '../../assets/header_logo.png';

  export default class Header extends Component {
   render () {
     return(
       <div className="header_main">
       <div className="header_child">
         <img src={ logo } />
         <span className="header_title_bold">Houser</span>
         <span className="header_title">Dashboard</span>
         <span className="logout">Logout</span>
         </div>
       </div>
     );
   }
  }
