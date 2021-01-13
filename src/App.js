import React, { Component }from 'react';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Navigationbar from "./components/Navigationbar";
import AnotherNav from "./components/AnotherNav";
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Wallet from './pages/Wallet';
import Profile from './pages/Profile';
export default class App extends Component {
  constructor(){
    super()
    this.state={
      login:true
    }
  }
  render(){
    return (
      !this.state.login?
        <Router>
        <Navigationbar />
        <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/register' exact component={Register} />
        </Switch>
        </Router>
      :
      <Router>
        <AnotherNav />
      <Switch>
      <Route path='/profile' exact component={Profile} />
      <Route path='/settings' exact component={Settings} />
      <Route path='/' exact component={Wallet} />
      </Switch>
      </Router>
    );
  }
  
}