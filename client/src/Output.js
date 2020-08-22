import React from 'react';
import './App.css';
import {ReactComponent as Refresh} from './Assets/refresh.svg';

class Output extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse: ""};
  }

  

  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
        <h3 style={{textAlignVertical: "center",textAlign: "center",paddingTop: "50px",paddingBottom: "30px"}}>Amazing! We created your custom link!</h3>
        <a style={{display: 'block',textAlign: "center",}} href="www.google.com">www.google.com</a>
        <h3 style={{textAlignVertical: "center",textAlign: "center",paddingTop: "50px",padding: "30px"}}>Thank you for using NUSHLink!</h3>
        <div class="container">
          <div class="row" class="row justify-content-center">
            <div class="col-2">
              Would you like to shorten another URL?
            </div>
            <div class="col-md-auto">
              <Refresh onClick = {() => window.location.href = "./"}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Output;