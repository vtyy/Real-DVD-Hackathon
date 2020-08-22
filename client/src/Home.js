import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import {ReactComponent as PrivateUntriggered} from './Assets/Private (Untriggered).svg';
import {ReactComponent as PrivateTriggered} from './Assets/Private (Triggered).svg';
import {ReactComponent as PublicUntriggered} from './Assets/Public (Untriggered).svg';
import {ReactComponent as PublicTriggered} from './Assets/Public (Triggered).svg';

import {ReactComponent as CodingUntriggered} from './Assets/Coding untriggered.svg';
import {ReactComponent as CodingTriggered} from './Assets/Coding triggered.svg';
import {ReactComponent as DesignUntriggered} from './Assets/Design untriggered.svg';
import {ReactComponent as DesignTriggered} from './Assets/Design triggered.svg';
import {ReactComponent as OthersUntriggered} from './Assets/Others untriggered.svg';
import {ReactComponent as OthersTriggered} from './Assets/Others triggered.svg';
import {ReactComponent as ProductivityUntriggered} from './Assets/Productivity untriggered.svg';
import {ReactComponent as ProductivityTriggered} from './Assets/Productivity triggered.svg';
import {ReactComponent as SciencesUntriggered} from './Assets/Sciences untriggered.svg';
import {ReactComponent as SciencesTriggered} from './Assets/Sciences triggered.svg';

import {ReactComponent as CreateURL} from './Assets/Create URL (Untriggered).svg';
import {ReactComponent as BG} from './Assets/BG.svg';

var urlp = 0;

class URLP extends React.Component{
  constructor(props) {
    super(props);
    this.state = {public: true};
    urlp = 0;
  } 
  change(){
    if (this.state.public){
      this.setState({public: false})
      urlp = 1;
    }
    else{
      this.setState({public: true})
      urlp = 0;
    }
  }
  render() {
    if(this.state.public) { 
        return (<div><PublicTriggered/><a onClick={() => this.change()}><PrivateUntriggered/></a></div>);
    } else { 
        return (<div><a onClick={() => this.change()}><PublicUntriggered/></a><PrivateTriggered/></div>);
    } 
  }
}

class CodingTag extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isSelected: false};
    
  } 
  render() {
    if(this.state.isSelected) { 
        return (<a onClick={() => this.setState({isSelected: false})}><CodingTriggered/></a>);
    } else { 
        return (<a onClick={() => this.setState({isSelected: true})}><CodingUntriggered/></a>);
    } 
  }
}

class DesignTag extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isSelected: false};
    
  } 
  render() {
    if(this.state.isSelected) { 
        return (<a onClick={() => this.setState({isSelected: false})}><DesignTriggered/></a>);
    } else { 
        return (<a onClick={() => this.setState({isSelected: true})}><DesignUntriggered/></a>);
    } 
  }
}

class OthersTag extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isSelected: false};
    
  } 
  render() {
    if(this.state.isSelected) { 
        return (<a onClick={() => this.setState({isSelected: false})}><OthersTriggered/></a>);
    } else { 
        return (<a onClick={() => this.setState({isSelected: true})}><OthersUntriggered/></a>);
    } 
  }
}

class ProductivityTag extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isSelected: false};
    
  } 
  render() {
    if(this.state.isSelected) { 
        return (<a onClick={() => this.setState({isSelected: false})}><ProductivityTriggered/></a>);
    } else { 
        return (<a onClick={() => this.setState({isSelected: true})}><ProductivityUntriggered/></a>);
    } 
  }
}

class SciencesTag extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isSelected: false};
    
  } 
  render() {
    if(this.state.isSelected) { 
        return (<a onClick={() => this.setState({isSelected: false})}><SciencesTriggered/></a>);
    } else { 
        return (<a onClick={() => this.setState({isSelected: true})}><SciencesUntriggered/></a>);
    } 
  }
}

class CreateURLButton extends React.Component{
  constructor(props) {
    super(props);
    
  } 
  checkURL(){
    localStorage.setItem("CustomURL", document.getElementById('customURL').value);
    localStorage.setItem("StartURL", document.getElementById('startURL').value);

    window.location.href = "./output";
  }
  render() {
    return (<a style={{textAlign: 'center',display: 'block',}} onClick={() => this.checkURL()}><CreateURL/></a>);
  }
}

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse: ""};
  }

  goNext(){

    window.location.href = "./Output.js?customurl=" + encodeURIComponent(document.getElementById('customURL').value);
  }
  

  render() {
    
    return (
      <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
        <h1 style={{textAlignVertical: "center",textAlign: "center",padding: "30px",}}>Create your custom URL now!</h1>

        <div class="row justify-content-center" style = {{paddingTop: "30px",}}>
          <div class="col-3">
            Enter original URL
          </div>
          <div class="col-4">
            Enter customized URL
          </div>
        </div>
        <div class="row justify-content-center" style = {{paddingBottom: "20px",}}>
          <div class="col-3">
            <input type="text" id="startURL"></input>
          </div>
          <div class="col-4">
            <p>https://nush.link/<input type="text" id="customURL"></input></p>
          </div>
        </div>
        <p></p>
        <p style={{textAlignVertical: "center",textAlign: "center",}}>Set URL to: </p>
        <div class="btn-group" role="group" style={{display: 'flex', justifyContent: "center", alignItems: "center",}}>
          <URLP/>
          
        </div>
        <p></p>
        <p style={{textAlignVertical: "center",textAlign: "center",}}>Add Tags: </p>
        <div style={{textAlignVertical: "center",textAlign: "center",}}>
          <SciencesTag/>
          <ProductivityTag/>
        </div>
        <div  style={{textAlignVertical: "center",textAlign: "center",}}>
          <CodingTag/>
          <DesignTag/>
          <OthersTag/>
        </div>
        <p/>
        <CreateURLButton/>
      </div>
    );
  }
}
export default Home;
