/**
 * lingala flashcards app 
 */

import styles from './styles'
import React, { Component } from 'react';
import {
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
      dictionary: props.dictionary,
      correctIndex: props.correctIndex,
      correct: props.correct,
      correctNumber: props.correctNumber,
      incorrectNumber: props.incorrectNumber,
      currentTest: props.currentTest 
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      dictionary: nextProps.dictionary,
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
              return (<View style={this.getStyle(rowData)}>
                <TouchableOpacity style={styles.touch} onPress={() => {this.state.choose(rowData)}}>
                  <View>
                    <Text>
                      {this.state.dictionary[rowData]['lingala']}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>)
            } else {
              return (<View style={this.getStyle(rowData)}>
                <View>
                  <Text>
                    {this.state.dictionary[rowData]['lingala']}
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
            {this.state.dictionary[this.state.currentTest.testSubject]['english']}
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
    dictionary: state.mainReducer.dictionary,
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

export default VisibleTestAll 
