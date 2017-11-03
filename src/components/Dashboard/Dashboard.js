import React, { Component } from "react";
import Header from '../Header/Header'
import axios from 'axios';

export default class Dashboard extends Component {
 constructor(props) {
   super(props);
   this.state = {
     properties: []
   }
 }

 componentDidMount() {
   this.getProperties();
  }

  getProperties = () => {
    axios.get('http://localhost:4020/api/properties').then(response => {
      this.setState({
        properties: response.data
      })
    })
  }


  render() {
    return (
      <div>
         <Header />
       <div className="dashboard_main">
       <div className="dashboard_center">
       {this.state.properties.map((properties, index) => {
         return (
           <div className="dashboard_block">
             <div className="block_left"><img src={properties.imageurl} /></div>
             <div className="block_center">
               <h3>{properties.propertyname}</h3>
               <p>{properties.propertydescription}</p>
             </div>
             <div className="block_right">
               <p>Loan: {properties.loanamount}</p>
               <p>Monthly Mortgage: {properties.mortgage}</p>
               <p>Recommended Rent: </p>
               <p>Desired Rent: {properties.desiredrent}</p>
               <p>Address: {properties.propertyaddress}</p>
               <p>City: {properties.city} </p>
               <p>State: {properties.state}</p>
             </div>
           </div>
         )
       })}
      </div>
      </div>
      </div>
    )
}
}
