import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignIn from './components/auth/SignIn'
import ButtonAppBar from './components/layout/ButtonAppBar'
import EventList from './components/event/EventList'
import Dashboard from './components/dashboard/Dashboard'
import CreateEventForm from './components/event/CreateEvent/CreateEventForm'
import MobileStep from './components/event/CreateEvent/MobileStep'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ButtonAppBar />
          <Switch>
            <Route path='/login' component={SignIn} />
            <Route path='/events' component={EventList} />
            <Route path='/board' component={Dashboard} />
            <Route path='/checkout' component={CreateEventForm} />
            <Route path='/create' component={MobileStep} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
