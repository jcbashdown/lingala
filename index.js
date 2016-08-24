import lingalaData from './lingala-english_data.js';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Dimensions from 'Dimensions'

const chooseRandomFour = function(lingalaData) {
  var results = {testSubject: {}, randomFour: []};
  var keys = Object.keys(lingalaData);
  for(i = 0; i < 4; i++) {
    var key = keys[Math.floor(Math.random(keys.length))];
    var result = {};
    result[key] = lingalaData[key];
    results['randomFour'].push(result);
  }
  results['testSubject'] = results.randomFour[0];
  return results;
}

class lingala extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentTest: chooseRandomFour(lingalaData)
    }
  }
  next() {
    this.setState = {
      currentTest: chooseRandomFour(lingalaData)
    };
  }
  componentWillMount() {
    this.state.currentTest = chooseRandomFour(lingalaData); 
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topHalf}>
          <Text>
            {this.state.currentTest.testSubject}}
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
        </View>
        <View style={styles.bottomHalf}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
        </View>
      </View>
    );
  }
}

var {
  width,
  height
} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
  half: {
    height: height / 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  quarter: {
    height: height / 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row'
  },
  eighth: {
    height: height / 4,
    width: width / 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default lingala 
