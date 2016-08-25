import lingalaData from './lingala-english_data.js';

/**
 * lingala flashcards app 
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ListView,
  View
} from 'react-native';
import Dimensions from 'Dimensions'

const chooseRandomFour = (lingalaData) => {
  var results = {testSubject: {}, randomFour: []};
  var keys = Object.keys(lingalaData);
  for(i = 0; i < 4; i++) {
    var key = keys[Math.floor((Math.random() * keys.length) + 1) - 1];
    var result = {index: i, lingala: key, english: lingalaData[key]};
    results['randomFour'].push(result);
  }
  results['testSubject'] = results.randomFour[Math.floor((Math.random() * 4) + 1) - 1];
  return results;
}

class lingala extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      correctNumber: 0,
      incorrectNumber: 0,
      currentTest: chooseRandomFour(lingalaData)
    }
  }
  next() {
    this.setState({
      currentTest: chooseRandomFour(lingalaData),
      correct: undefined, 
      correctIndex: undefined 
    });
  }
  choose(index) {
    var correct;
    var correctNumber = this.state.correctNumber;
    var incorrectNumber = this.state.incorrectNumber;
    if(index === this.state.currentTest.testSubject.index) {
      correctNumber++; 
      correct = true;
    } else {
      incorrectNumber++; 
      correct = false;
    }
    this.setState({
      correct: correct,
      correctNumber: correctNumber,
      incorrectNumber: incorrectNumber,
      correctIndex: this.state.currentTest.testSubject.index 
    });
  }
  componentWillMount() {
    this.state.currentTest = chooseRandomFour(lingalaData); 
  }
  getStyle(index) {
    if(this.state.correct !== undefined) {
      if(index === this.state.correctIndex) {
        return styles.correctResponse;
      } else {
        return styles.incorrectResponse;
      }
    } else {
      return styles.normalPossibleResponse;
    }

  }
  getOptionsList(options) {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var dataSource = ds.cloneWithRows(options) 
    return (
      <View style={styles.quarter}>
        <ListView
          styles={styles.quarter}
          horizontal={true}
          dataSource={dataSource}
          renderRow={(rowData) => {
            if(this.state.correct === undefined) {
              return (<View style={this.getStyle(rowData.index)}>
                <TouchableOpacity style={styles.touch} onPress={() => {this.choose(rowData.index)}}>
                  <View>
                    <Text>
                      {rowData['lingala']}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>)
            } else {
              return (<View style={this.getStyle(rowData.index)}>
                <View>
                  <Text>
                    {rowData['lingala']}
                  </Text>
                </View>
              </View>)
            }
          }}
        />
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <View style={styles.quarterWidth}>
            <Text style={styles.topText}>
              {"Correct: " + this.state.correctNumber}
            </Text>
          </View>
          <View style={styles.quarterWidth}>
            <Text style={styles.topText}>
              {"Incorrect: " + this.state.incorrectNumber}
            </Text>
          </View>
          <View style={styles.quarterWidth}></View>
          <View style={styles.quarterWidth}>
            <TouchableOpacity onPress={this.next.bind(this)}>
              <Text style={styles.topText}>
                Next 
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topHalf}>
          <Text>
            {this.state.currentTest.testSubject['english']}
          </Text>
        </View>
        <View style={styles.bottomHalf}>
          {this.getOptionsList(this.state.currentTest.randomFour.slice(0, 2))}
          {this.getOptionsList(this.state.currentTest.randomFour.slice(2, 4))}
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
    backgroundColor: '#F5FCFF',
  },
  topHalf: {
    height: (height / 2) - 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  bottomHalf: {
    height: (height / 2),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
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
  normalPossibleResponse: {
    height: height / 4,
    width: width / 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'blue'
  },
  correctResponse: {
    height: height / 4,
    width: width / 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'green'
  },
  incorrectResponse: {
    height: height / 4,
    width: width / 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'red'
  },
  topBar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  threeQuartersWidth: {
    width: (width / 4) * 3
  },
  quarterWidth: {
    paddingLeft: 15,
    width: width / 4 
  },
  topText: {
    color: 'white'
  },
  touch: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1
  }
});

export default lingala 
