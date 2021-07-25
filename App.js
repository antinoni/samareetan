import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";

import Navigation from "./src/components/Navigation";
import MainNavigation from "./src/components/MainNavigation";

import firebase from "firebase";
import { firebaseConfig } from "./config";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./src/redux/reducers";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }
  render() {
    const { loggedIn } = this.state;
    if (!loggedIn) {
      return <Navigation />;
    } else {
      return (
        <Provider store={store}>
          <MainNavigation />
        </Provider>
      );
    }
  }
}
