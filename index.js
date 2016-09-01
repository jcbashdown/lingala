import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import TestAll from './TestAll';

import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import reducer from './redux/reducers'
let store = createStore(reducer)

const RouterWithRedux = connect()(Router);

export default class lingala extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene hideNavBar={true} key="root">
            <Scene key="TestAll" component={TestAll} title="TestAll" initial={true}/>
          </Scene>
        </RouterWithRedux>
      </Provider>
    )
  }
}
