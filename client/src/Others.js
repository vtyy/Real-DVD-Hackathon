import React from 'react';
import { BrowserRouter, Route, Switch , useLocation } from 'react-router-dom';
import axios from 'axios'; 
import './App.css';


class Others extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse: ""};
    //axios.get('http://localhost:9000/getredirect?alias=goodschool')
    //        .then(res => { window.location.href = "https://" + res.data;})
    
  }

  
  render() {
      console.log(this.props.location.pathname);
      console.log(this.props.location.pathname);
      console.log(this.props.location.pathname);
      console.log(this.props.location.pathname);
      axios.get('http://localhost:9000/getredirect?alias=' + this.props.location.pathname.substring(1))
  .then(res => { window.location.href = res.data;})
    return (<h1>:(</h1>
    );
  }
}
export default Others;
