import React from 'react';
import { BrowserRouter, Route, Switch , useLocation } from 'react-router-dom';
import './App.css';
 
import Home from './Home.js';
import Output from './Output.js';
import Others from './Others.js';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse: ""};
    //axios.get('http://localhost:9000/getredirect?alias=goodschool')
    //        .then(res => { window.location.href = "https://" + res.data;})
    
  }

  
  render() {
    return (
      <BrowserRouter component={App}>
        <div>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/output" component={Output}/>
              <Route component={Others}/>
            </Switch>
        </div> 
        
      </BrowserRouter>
    );
  }
}
export default App;
