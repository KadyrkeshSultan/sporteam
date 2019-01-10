import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {User} from '../components/User'
import {Page} from '../components/Page'

class App extends Component {
  render() {
      const {user} = this.props;
      const {page} = this.props;
    return (
      <div className="App">
        <header className="App-header">
            <h1 className={"App-title"}>My top photos</h1>
        </header>
        <p className={"App-intro"}>
            <User name={user.name}/>
            <Page photos={page.photos} year={page.year}/>
        </p>
      </div>
    );
  }
}

const mapStateToProps = store => {
    return {
        user: store.user,
        page: store.page
    }
}

export default connect(mapStateToProps)(App)