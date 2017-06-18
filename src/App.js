import React,{ Component } from 'react';
import { TabRouter } from './Router';
import * as firebase from 'firebase';

class App extends Component {

componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyAzd3oYuOR6SMTMxMyXnNLl7IUuAnEzCuY",
    authDomain: "weeek13.firebaseapp.com",
    databaseURL: "https://weeek13.firebaseio.com",
    projectId: "weeek13",
    storageBucket: "weeek13.appspot.com",
    messagingSenderId: "980685772106"
    });
  }

  render() {
    return (
      <TabRouter />
    );
  }
}


export default App;
