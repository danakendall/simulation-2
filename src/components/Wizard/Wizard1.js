import React, { Component } from "react";
import Header from '../Header/Header'
import axios from 'axios';
import step_active from '../../assets/step_active.png';
import step_inactive from '../../assets/step_inactive.png';

export default class Wizard1 extends Component {
 constructor(props) {
   super(props);
   this.state = {
     allProperties: [],
     propertiesToDisplay: [],
     rentInput: 0
   }

 }


  render() {
    return (
      <div>
         <Header />
       <div className="dashboard_main">
       <div className="dashboard_center">
          <div className="wizard_header">
            <p>Add new listing</p>
            <button className="cancel">Cancel</button>
          </div>

          <div className="wizard_body">
            <p>Step 1</p>
            <div className="step_circles">
              <img src={step_active}/>
              <img src={step_inactive}/>
              <img src={step_inactive}/>
              <img src={step_inactive}/>
              <img src={step_inactive}/>
            </div>

            <p>Property Name</p>
            <input className="propertyName"/>
            <p>Property Description</p>
            <input className="propertyDescription"/>

          </div>

      </div>
      </div>
      </div>
    )
}
}
