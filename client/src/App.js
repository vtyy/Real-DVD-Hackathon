import React from 'react';
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

class URLP extends React.Component{
  constructor(props) {
    super(props);
    this.state = {public: true};
    
  } 
  render() {
    if(this.state.public) { 
        return (<div><PublicTriggered/><a onClick={() => this.setState({public: false})}><PrivateUntriggered/></a></div>);
    } else { 
        return (<div><a onClick={() => this.setState({public: true})}><PublicUntriggered/></a><PrivateTriggered/></div>);
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



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse: ""};
  }

  

  render() {
    return (
      <div class="container">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
        <h1 style={{textAlignVertical: "center",textAlign: "center",}}>Create your custom URL now!</h1>
        <p></p>
        <div class="row">
          <div class="col-sm">
            Enter original URL
          </div>
          <div class="col-sm">
            Enter customized URL
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <input type="text"></input>
          </div>
          <div class="col-sm">
            <p>https://nush.link/<input type="text"></input></p>
            
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
        <div style={{textAlignVertical: "center",textAlign: "center",}}><CreateURL/></div>
      </div>
    );
  }
}
export default App;
