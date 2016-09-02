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
import Dimensions from 'Dimensions'

import { connect } from 'react-redux'

class Dictionary extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      dictionary: props.dictionary,
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      dictionary: nextProps.dictionary,
    });
  }
  render() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var dataSource = ds.cloneWithRows(this.state.dictionary) 
    return (
      <View style={styles.dictionaryContainer}>
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

const mapStateToProps = (state) => {
  console.log(state)
  return {
    dictionary: state.mainReducer.dictionary,
  };
}

const VisibleDictionary = connect(
  mapStateToProps,
)(Dictionary)

export default VisibleDictionary
