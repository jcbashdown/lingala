import moment from 'moment'

import INITIAL_STATE from '../INITIAL_STATE.js'

const actions = require('../actions');

const CHANGE_CURRENT_TEST_SERIES = actions.CHANGE_CURRENT_TEST_SERIES
const CHANGE_CURRENT_TEST = actions.CHANGE_CURRENT_TEST
const CHOOSE = actions.CHOOSE
import { ActionConst } from 'react-native-router-flux';

const TEST_POSSIBILITIES = 4;
const REQUIRED_CORRECT_IN_ROW = 2;

const chooseRandomTest = (dictionary) => {
  var results = {testSubject: undefined, randomFour: _chooseRandomN(dictionary, TEST_POSSIBILITIES).map((item) => {return item[1]})};
  results['testSubject'] = results.randomFour[Math.floor((Math.random() * TEST_POSSIBILITIES) + 1) - 1];
  return results;
}

const chooseRandomSeries = (dictionary) => {
  //get the indexes related to the indexes of dictionary
  return _chooseRandomN(dictionary, 8).map((item) => {return item[0]});
}

const _chooseRandomN = (dictionary, n) => {
  var arrayOfN = []
  //must chose until we have all different
  for(i = 0; i < n; i++) {
    while(arrayOfN.length < n) {
      let randIndex = Math.floor((Math.random() * dictionary.length) + 1) - 1;
      let newEntry = [randIndex, dictionary[randIndex]]
      if(!arrayOfN.some((item) => { return item[0] == newEntry[0] })) {
        arrayOfN.push(newEntry);
      }
    }
  }
  return arrayOfN;
}

const getCurrentWeekKey = () => {
  return moment().utc().startOf("week").format();
}

const getPreviousWeekKey = () => {
  return moment().subtract(1, 'weeks').utc().startOf("week").format();
}

const bumpCountsForWeek = (subject, change) => {
  var currentWeekKey = getCurrentWeekKey();
  var previousWeekKey = getPreviousWeekKey(); 
  if(change > 0) {
    if(subject[currentWeekKey]) {
      if(subject[currentWeekKey]['lastCorrect']) { 
        subject[currentWeekKey]['correctInRow']++;
      } else {
        subject[currentWeekKey] = {
          correctInRow: 1,
          lastCorrect: true
        }
      }
    } else {
      delete(subject[previousWeekKey])
      subject[currentWeekKey] = {
        correctInRow: 1,
        lastCorrect: true
      }
    }
  } else {
    delete(subject[previousWeekKey])
    subject[currentWeekKey] = {
      correctInRow: 0,
      lastCorrect: false 
    }
  }
  return subject;
}

//this is fancy but unnecessary
//const getCorrectsInRow = (state) => {
  //return state.currentTestSeries.reduce((dictionaryIndex, number) => {
    //if(state.dictionary[dictionaryIndex][getCurrentWeekKey()].correctInRow === REQUIRED_CORRECT_IN_ROW) {
     //return number++;
    //};
  //}, 0)
//}
const getCorrectsInRow = (state, newlyCorrectItem) => {
  if(state.miniTest === false) {
    return 0;
  } else {
    if(newlyCorrectItem[getCurrentWeekKey()].correctInRow === REQUIRED_CORRECT_IN_ROW) {
      return state.numberLearned + 1; 
    } else {
      return state.numberLearned; 
    };
  }
}

const switchToMiniTest = (state) => {
  var randomSeries = chooseRandomSeries(state["dictionary"]);
  return Object.assign({}, state, {
    "currentTestSeries": randomSeries,
    "correctIndex": undefined,
    "correct": undefined,
    "showCongratulationsButton": false,
    "numberLearned": 0,
    "miniTest": true
  }, chooseRandomTest(randomSeries))
}

const switchToFullTest = (state) => {
  var wholeSeries = state.dictionary.map((entry, i) => {return i})
  return Object.assign({}, state, {
    "currentTestSeries": wholeSeries,
    "correctIndex": undefined,
    "correct": undefined,
    "showCongratulationsButton": false,
    "numberLearned": 0,
    "miniTest": false
  }, chooseRandomTest(wholeSeries));
}

function setState(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_CURRENT_TEST_SERIES:
      var randomSeries = chooseRandomSeries(state["dictionary"]);
      return Object.assign({}, state, {
        "currentTestSeries": randomSeries,
      }, chooseRandomTest(randomSeries))
    case CHANGE_CURRENT_TEST:
      return Object.assign({}, state, {
        correctIndex: undefined,
        correct: undefined
      }, chooseRandomTest(state['currentTestSeries']))
    case CHOOSE:
      var correct;
      var correctNumber = state.correctNumber;
      var incorrectNumber = state.incorrectNumber;
      var newSubject = Object.assign({}, state.dictionary[state.testSubject]);
      var newNumberLearned = state.numberLearned;
      if(action.index === state.testSubject) {
        correctNumber++; 
        newSubject.correctNumber++; 
        newSubject = bumpCountsForWeek(newSubject, 1);
        newNumberLearned = getCorrectsInRow(state, newSubject); 
        correct = true;
      } else {
        incorrectNumber++; 
        newSubject.incorrectNumber++; 
        newSubject = bumpCountsForWeek(newSubject, -1)
        correct = false;
      }
      var newDictionary = Object.assign([], state.dictionary);
      newDictionary[state.testSubject] = newSubject;
      state = Object.assign({}, state, {
        numberLearned: newNumberLearned,
        correct: correct,
        dictionary: newDictionary,
        correctNumber: correctNumber,
        incorrectNumber: incorrectNumber,
        correctIndex: state.testSubject
      });
      if(newNumberLearned === 8) {
        return Object.assign({}, state, {
          showCongratulationsButton: true,
          testsFinished: state.testsFinished + 1
        });        
      }
      return state
    case ActionConst.JUMP:
      if(action.key === "MiniTestTab") {
        state = switchToMiniTest(state);
      }
      if(action.key === "TestAllTab") {
        state = switchToFullTest(state);
      }
      return state
    case ActionConst.FOCUS:
      if(action.scene.sceneKey === "MiniTest") {
        state = switchToMiniTest(state);
      }
      if(action.scene.sceneKey === "TestAll") {
        state = switchToFullTest(state);
      }
      return state
    default:
      return Object.assign({}, state, chooseRandomTest(state['currentTestSeries']))
  }
}
function mainReducer(state = INITIAL_STATE, action) {
  return setState(state, action)
}

export default mainReducer 
