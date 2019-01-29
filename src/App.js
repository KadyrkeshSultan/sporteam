import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import ButtonAppBar from './components/layout/ButtonAppBar'
import EventList from './components/event/EventList'
import Dashboard from './components/dashboard/Dashboard'
import CreateEventForm from './components/event/CreateEvent/CreateEventForm'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ButtonAppBar />
          <Switch>
            <Route path='/login' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route exact path='/events' component={EventList} />
            <Route path='/board' component={Dashboard} />
            <Route path='/events/create' component={CreateEventForm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
