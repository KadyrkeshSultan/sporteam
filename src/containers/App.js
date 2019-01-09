import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux'

class App extends Component {
  render() {
      const {name, surname, age} = this.props.user;
    return (
      <div className="App">
        <header className="App-header">
            <h1 className={"App-title"}>My top photos</h1>
        </header>
        <p className={"App-intro"}>
            Hi from Redux, {name} {surname} - {age} old!
        </p>
      </div>
    );
  }
}

const mapStateToProps = store => {
    return {
        user: store.user
    }
}

export default connect(mapStateToProps)(App)