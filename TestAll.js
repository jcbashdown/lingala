/**
 * lingala flashcards app 
 */

import { Actions } from 'react-native-router-flux';
import styles from './styles'
import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  ListView,
  View
} from 'react-native';

import { connect } from 'react-redux'
import { choose, changeCurrentTest } from './redux/actions'

class TestAll extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      testsFinished: props.testsFinished,
      showCongratulationsButton: props.showCongratulationsButton,
      choose: props.choose,
      next: props.next,
      dictionary: props.dictionary,
      testSeries: props.testSeries,
      numberLearned: props.numberLearned,
      miniTest: props.miniTest,
      correctIndex: props.correctIndex,
      correct: props.correct,
      correctNumber: props.correctNumber,
      incorrectNumber: props.incorrectNumber,
      currentTest: props.currentTest 
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      testsFinished: nextProps.testsFinished,
      showCongratulationsButton: nextProps.showCongratulationsButton,
      dictionary: nextProps.dictionary,
      testSeries: nextProps.testSeries,
      numberLearned: nextProps.numberLearned,
      miniTest: nextProps.miniTest,
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
  getCountBar() {
    if(this.state.miniTest) {
      return(
        <View style={styles.topBar}>
          <View style={styles.thirdWidth}>
            <Text style={styles.topText}>
              {"Number Learned: " + this.state.numberLearned}
            </Text>
          </View>
          <View style={styles.thirdWidth}>
            <Text style={styles.topText}>
              {"LEARN EIGHT!"}
            </Text>
          </View>
          <View style={styles.remainderWidth}>
          </View>
          <View style={styles.quarterWidth}>
            <TouchableOpacity onPress={this.state.next}>
              <Text style={styles.topText}>
                Next 
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    } else {
      return(
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
          <View style={styles.quarterWidth}>
            <Text style={styles.topText}>
              {"Finished mini tests: " + this.state.testsFinished}
            </Text>
          </View>
          <View style={styles.quarterWidth}>
            <TouchableOpacity onPress={this.state.next}>
              <Text style={styles.topText}>
                Next 
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }
  renderTest() {
    return (
      <View style={styles.container}>
        {this.getCountBar()}
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
  renderFinishedTest() {
    return (
      <View style={styles.container}>
        {this.getCountBar()}
        <View style={styles.topHalf}>
          <Text>{"Congratulations! You have learned 8 new words."}</Text>
        </View>
        <View style={styles.bottomHalf}>
          <View style={styles.buttonView}>
            <View style={styles.nextButtonViewLeft}>
              <TouchableOpacity activeOpacity={0.3} underlayColor={'transparent'} onPress={() => {Actions.TestAllTab()}} >
                <Text style={styles.nextButtonText}>{"End test"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.nextButtonViewRight}>
              <TouchableOpacity activeOpacity={0.3} underlayColor={'transparent'} onPress={() => {Actions.MiniTestTab()}} >
                <Text style={styles.nextButtonText}>{"New test"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
  render() {
    if(this.state.showCongratulationsButton) {
      return this.renderFinishedTest();
    } else {
      return this.renderTest();
    }
  }
}

const mapStateToProps = (state) => {
  return {
    testsFinished: state.mainReducer.testsFinished,
    showCongratulationsButton: state.mainReducer.showCongratulationsButton,
    testSeries: state.mainReducer.currentTestSeries,
    dictionary: state.mainReducer.dictionary,
    correctNumber: state.mainReducer.correctNumber,
    incorrectNumber: state.mainReducer.incorrectNumber,
    miniTest: state.mainReducer.miniTest,
    numberLearned: state.mainReducer.numberLearned,
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
