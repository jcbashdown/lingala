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

import { connect } from 'react-redux'
import { choose, changeCurrentTest } from './redux/actions'

class TestAll extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      choose: props.choose,
      next: props.next,
      correctIndex: props.correctIndex,
      correct: props.correct,
      correctNumber: props.correctNumber,
      incorrectNumber: props.incorrectNumber,
      currentTest: props.currentTest 
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      correctIndex: nextProps.correctIndex,
      correct: nextProps.correct,
      correctNumber: nextProps.correctNumber,
      incorrectNumber: nextProps.incorrectNumber,
      currentTest: nextProps.currentTest 
    });
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
                <TouchableOpacity style={styles.touch} onPress={() => {this.state.choose(rowData.index)}}>
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
            <TouchableOpacity onPress={this.state.next}>
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

const mapStateToProps = (state) => {
  console.log(state)
  return {
    correctNumber: state.mainReducer.correctNumber,
    incorrectNumber: state.mainReducer.incorrectNumber,
    correct: state.mainReducer.correct,
    correctIndex: state.mainReducer.correctIndex,
    currentTest: {
      "randomFour": state.mainReducer.randomFour,
      "testSubject": state.mainReducer.testSubject
    }
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    next: () => {
      dispatch(changeCurrentTest())
    },
    choose: (index) => {
      dispatch(choose(index))
    }
  };
}

const VisibleTestAll = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestAll)

//

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

export default VisibleTestAll 
