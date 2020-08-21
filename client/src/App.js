import React from 'react';
import './App.css';
import {ReactComponent as PrivateUntriggered} from './Assets/Private (Untriggered).svg';
import {ReactComponent as PrivateTriggered} from './Assets/Private (Triggered).svg';
import {ReactComponent as PublicUntriggered} from './Assets/Public (Untriggered).svg';
import {ReactComponent as PublicTriggered} from './Assets/Public (Triggered).svg';

/*
class Private extends React.Component{
  constructor(props) {
    super(props);
    this.state = {showMe: true};
    
  } 
  render() {
    if(this.state.showMe) { 
        return (<a onClick={() => this.setState({showMe: false})}><PrivateUntriggered/></a>);
    } else { 
        return (<a onClick={() => this.setState({showMe: true})}><PrivateTriggered/></a>);
    } 
  }
}
class Public extends React.Component{
  constructor(props) {
    super(props);
    this.state = {showMe: true};
    
  } 
  render() {
    if(this.state.showMe) { 
        return (<a onClick={() => this.setState({showMe: false})}><PublicUntriggered/></a>);
    } else { 
        return (<a onClick={() => this.setState({showMe: true})}><PublicTriggered/></a>);
    } 
  }
}
*/
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
        <div class="btn-group" role="group" style={{display: 'flex', alignItems: "center",}}>
          <button type="button" class="btn btn-primary">Project Meeting</button>
          <button type="button" class="btn btn-success">Productivity</button>
        </div>
        <div class="btn-group" role="group" style={{display: 'flex', alignItems: "center",}}>
          <button type="button"><PrivateTriggered className='PrivateTriggered' /></button>
          <button type="button" class="btn btn-warning">Webinar</button>
          <button type="button" class="btn btn-info">Other</button>
        </div>
      </div>
    );
  }
}
export default App;
