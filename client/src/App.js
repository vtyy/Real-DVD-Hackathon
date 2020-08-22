import React from 'react';
import { BrowserRouter, Route, Switch , useLocation } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Output from './Output.js';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse: ""};
    fetch("localhost:9000/getredirect?alias=goodschool").then(response => console.log(response));
  }

  
  render() {
    return (
      <BrowserRouter>
        <div>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/output" component={Output}/>
                         </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
export default App;
