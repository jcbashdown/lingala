import styles from './styles'

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import TestAll from './TestAll';
import Dictionary from './Dictionary';

import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import reducer from './redux/reducers'
let store = createStore(reducer)

const RouterWithRedux = connect()(Router);

class TabIcon extends React.Component {
  render(){
    return (
      <View style={{backgroundColor: this.props.selected ? 'gray' :'black', alignSelf: 'stretch', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white'}}>{this.props.title}</Text>
      </View>
    );
  }
}

export default class lingala extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root" hideNavBar={true}>
            <Scene key={"tabbar"} tabs={true} tabBarStyle={styles.tabBar}>

              <Scene key="TestAllTab"  title="Open ended test" icon={TabIcon} navigationBarStyle={{backgroundColor:'black', height: 0}} titleStyle={{color:'white'}}>
                <Scene key="TestAll" component={TestAll} title="Open ended test" initial={true}/>
              </Scene>
              <Scene key="DictionaryTab"  title="Dictionary" icon={TabIcon} navigationBarStyle={{backgroundColor:'black', height: 0}} titleStyle={{color:'white'}}>
                <Scene key="Dictionary" component={Dictionary} title="Dictionary"/>
              </Scene>
            </Scene>
          </Scene>
        </RouterWithRedux>
      </Provider>
    )
  }
}
