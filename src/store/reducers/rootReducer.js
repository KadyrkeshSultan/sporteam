import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import eventReducer from './eventReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  event: eventReducer,
  project: projectReducer,
  firestore: firestoreReducer
});

export default rootReducer

// the key name will be the data property on the state object