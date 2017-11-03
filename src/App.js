import React, { Component } from 'react';
import Router from './router';

class App extends Component {
  render() {
    return (
     <div>
       <div id="AppRouterContainer">
         { Router }
       </div>
     </div>
   )
  }
 }

export default App;
