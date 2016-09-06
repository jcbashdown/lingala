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
  dictionaryContainer: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  topHalf: {
    height: ((height - 124) / 2),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  bottomHalf: {
    height: ((height - 124) / 2),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  quarter: {
    height: (height - 248) / 4,
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
  bottomBar: {
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
  thirdWidth: {
    paddingLeft: 15,
    width: width / 3 
  },
  remainderWidth: {
    width: (width / 3) - (width / 4),
    paddingLeft: 15
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
  },
  dictionary: {
    flex: 1
  },
  buttonView: {
    flexDirection: 'row'
  },
  nextButtonViewLeft: {
    width: width / 4,
    height: 50,
    backgroundColor: 'rgba(34,34,34,0.8)',
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center'
    //borderWidth: 2,
  },
  nextButtonViewRight: {
    width: width / 4,
    height: 50,
    backgroundColor: 'rgba(34,34,34,0.8)',
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center'
    //borderWidth: 2,
  },
  nextButtonText: {
    height: 48,
    color: '#FFFFFF',
    textAlignVertical: 'center',
    textAlign: 'center'
  },
});

export default styles
