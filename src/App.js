import React, { Component } from 'react';
import router from './router';
import auth from './components/auth/auth.js';

class App extends Component {
  render() {
    return (
     <div>
       <div id="AppRouterContainer">
         { router }
       </div>
     </div>
   )
  }
 }

export default App;
