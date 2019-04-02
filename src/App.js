import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import ButtonAppBar from './components/layout/ButtonAppBar'
import EventList from './components/event/EventList'
import ImageGrid from './components/area/CreateArea/ImageGrid'
import CreateEventForm from './components/event/CreateEvent/CreateEventForm'
import Footer from './components/layout/Footer';
import MainBoard from './components/mainboard/MainBoard';
import EventBoard from './components/event/EventBoard';
import AreaBoard from './components/area/AreaBoard';
import CreateAreaForm from './components/area/CreateArea/CreateAreaForm';
import Dashboard2 from './components/dashboard/Dashboard'
import Sandbox from './components/layout/Sandbox';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ButtonAppBar />
          <Switch>
            <Route exact path='/' component={MainBoard} />
            <Route path='/login' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route exact path='/events' component={EventList} />
            <Route path='/board' component={Dashboard2} />
            <Route path='/events/create' component={CreateEventForm} />
            <Route path='/areas/create' component={CreateAreaForm} />
            <Route path='/eventboard' component={EventBoard} />
            <Route path='/areaboard' component={AreaBoard} />
            <Route path='/sandbox' component={Sandbox} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
