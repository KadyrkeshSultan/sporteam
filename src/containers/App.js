import React, { Component } from 'react';

import {connect} from 'react-redux'
import {User} from '../components/User'
import {Page} from '../components/Page'
import {getPhotos} from '../actions/PageActions'

class App extends Component {
  render() {
      const {user, page, getPhotos} = this.props;
    return (
        <div className="row">
            <Page 
                photos={page.photos} 
                year={page.year}
                isFetching={page.isFetching}
                isDisable={page.isDisableBtn} 
                getPhotos={getPhotos} />
            <User name={user.name}/>
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

const mapDispatchToProps = dispatch =>{
    return{
        getPhotos: year => dispatch(getPhotos(year))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)