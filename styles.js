import {
  StyleSheet
} from 'react-native';
import Dimensions from 'Dimensions'

var {
  width,
  height
} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  topHalf: {
    height: (height / 2) - 100,
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
    marginTop: 50,
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
  },
  tabBar: {
    backgroundColor: 'black',
    transform: [{translateY: -(height - 74)}]
  }
});

export default styles
