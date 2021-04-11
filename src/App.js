import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import Header from './components/header/header'
import AccountOverView from './components/accountoverview/accountoverview'
import Transfers from './components/transfers/transfers'
import BillPay from './components/billpay/billpay'

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
                {this.menu && this.menu.overview === true ? (<Route exact path='/' component={AccountOverView}></Route>) : ""}
                <Route path='/transfers' component={Transfers}></Route>
                <Route path='/billpay' component={BillPay}></Route>
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
export default App;
