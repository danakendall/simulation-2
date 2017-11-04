import React, { Component } from "react";
import Header from '../Header/Header'
import axios from 'axios';

export default class Dashboard extends Component {
 constructor(props) {
   super(props);
   this.state = {
     allProperties: [],
     propertiesToDisplay: [],
     rentInput: 0
   }

   this.getProperties = this.getProperties.bind(this);
   this.filterByDesiredRent = this.filterByDesiredRent.bind(this);
   this.reset = this.reset.bind(this);
 }

 componentDidMount() {
   this.getProperties();
  }

  getProperties = () => {
    axios.get('http://localhost:4020/api/properties').then(response => {
      this.setState({
        allProperties: response.data,
        propertiesToDisplay: response.data
      })
    })
  }

  filterByDesiredRent(){
    var filteredProps = this.state.allProperties.filter(
      property => property.desiredrent>this.state.rentInput);
    this.setState({propertiesToDisplay: filteredProps});
  }

  onFilterInputChange = (event) => {
    this.setState({rentInput: event.target.value})
  }

  reset(){
    var props = this.state.allProperties;
    this.setState({propertiesToDisplay: props});
  }

  render() {
    return (
      <div>
         <Header />
       <div className="dashboard_main">
       <div className="dashboard_center">
          <div className="dashboard_top">
            <button className="add_property">Add new property</button>
            <p>List properties with desired rent greater than: $</p>
            <input type='number' placeholder='0' onChange={this.onFilterInputChange}/>
            <button className="filter" onClick={this.filterByDesiredRent}>Filter</button>
            <button className="reset" onClick={this.reset}>Reset</button>
          </div>



         {this.state.propertiesToDisplay.map((properties, index) => {
           return (
             <div className="dashboard_block" key={index}>
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
