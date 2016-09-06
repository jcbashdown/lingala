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

class MiniTest extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      dictionary: props.dictionary,
      testSeries: props.testSeries
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      dictionary: nextProps.dictionary,
      testSeries: nextProps.testSeries
    });
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
            return (<View style={styles.normalPossibleResponse}>
              <View style={styles.touch}>
                <Text>
                  {this.state.dictionary[rowData]['lingala'] + ':'}
                </Text>
                <Text>
                  {this.state.dictionary[rowData]['english']}
                </Text>
              </View>
            </View>)
          }}
        />
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.topHalf, {marginTop: 50}]}>
          {this.getOptionsList(this.state.testSeries.slice(0, 2))}
          {this.getOptionsList(this.state.testSeries.slice(2, 4))}
        </View>
        <View style={styles.bottomHalf}>
          {this.getOptionsList(this.state.testSeries.slice(4, 6))}
          {this.getOptionsList(this.state.testSeries.slice(6, 8))}
        </View>
        <View style={styles.bottomBar}>
          <View style={styles.quarterWidth}></View>
          <View style={styles.quarterWidth}></View>
          <View style={styles.quarterWidth}></View>
          <View style={styles.quarterWidth}>
            <TouchableOpacity>
              <Text style={styles.topText} onPress={() => {Actions.MiniTestActual({miniTest: true})}}>
                Start 
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    testSeries: state.mainReducer.currentTestSeries,
    dictionary: state.mainReducer.dictionary
  };
}

const VisibleMiniTest = connect(
  mapStateToProps
)(MiniTest)

//

export default VisibleMiniTest
