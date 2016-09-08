/**
 * lingala flashcards app 
 */

import styles from './styles'
import React, { Component } from 'react';
import {
  Text,
  ListView,
  View
} from 'react-native';

import { connect } from 'react-redux'
import { switchDictionary } from './redux/actions'

class Dictionary extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      switchDictionary: props.switchDictionary,
      dictionary: props.dictionary,
      englishDictionary: props.englishDictionary,
      currentDictionary: props.currentDictionary
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      switchDictionary: nextProps.switchDictionary,
      dictionary: nextProps.dictionary,
      englishDictionary: nextProps.englishDictionary,
      currentDictionary: nextProps.currentDictionary
    });
  }
  getChoiceStyle(dictionaryTab) {
    if(dictionaryTab === this.state.currentDictionary) {
      return styles.dictionaryChoiceActive;
    } else {
      return styles.dictionaryChoiceInactive;
    }
  }
  render() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var dataSource = ds.cloneWithRows(this.state.currentDictionary === "lingala" ? this.state.dictionary : this.state.englishDictionary) 
    return (
      <View style={styles.dictionaryContainer}>
        <View style={styles.topBar}>
          <View style={this.getChoiceStyle("lingala")}>
            <Text style={styles.topText} onPress={() => {this.state.switchDictionary("lingala")}}>
              {"Lingala - English"}
            </Text>
          </View>
          <View style={this.getChoiceStyle("english")}>
            <Text style={styles.topText} onPress={() => {this.state.switchDictionary("english")}}>
              {"English - Lingala"}
            </Text>
          </View>
        </View>
        <ListView
          style={styles.dictionary}
          dataSource={dataSource}
          renderRow={(rowData) => {
              return (<View>
                <View>
                  <Text>
                    {rowData['lingala'] + ": " + rowData['english'] + ", correct:" + rowData['correctNumber'] + ", incorrect:" + rowData['incorrectNumber']}
                  </Text>
                </View>
              </View>)
            }
          }
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    switchDictionary: (newDictionary = "lingala") => {
      dispatch(switchDictionary(newDictionary))
    },
  };
}

const mapStateToProps = (state) => {
  return {
    dictionary: state.mainReducer.dictionary,
    englishDictionary: state.mainReducer.englishDictionary,
    currentDictionary: state.mainReducer.currentDictionary
  };
}

const VisibleDictionary = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dictionary)

export default VisibleDictionary
