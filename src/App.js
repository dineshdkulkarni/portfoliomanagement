import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import Header from './components/header/header'
import AccountOverView from './components/accountoverview/accountoverview'
import Planning from './components/planning/planning'
import Investing from './components/investing/investing'
import Banking from './components/banking/banking'
import Advice from './components/advice/advice'

class App extends Component {
  constructor() {
    super()
    const menu = { "overview": true }
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        <br />
        <div>
          <BrowserRouter>
            <div>
              <Switch>
                <Route exact path='/' component={AccountOverView}></Route>
               <Route path='/investing' component={Investing}></Route>
                <Route path='/planning' component={Planning}></Route>
                <Route path='/advice' component={Advice}></Route>
                <Route path='/banking' component={Banking}></Route>
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
export default App;
