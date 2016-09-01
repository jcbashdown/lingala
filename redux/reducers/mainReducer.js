import moment from 'moment'

import INITIAL_STATE from '../INITIAL_STATE.js'

const actions = require('../actions');

const LOAD_DICTIONARY = actions.LOAD_DICTIONARY
const CHANGE_CURRENT_TEST_SERIES = actions.CHANGE_CURRENT_TEST_SERIES
const CHANGE_CURRENT_TEST = actions.CHANGE_CURRENT_TEST
const CHOOSE = actions.CHOOSE

const TEST_POSSIBILITIES = 4;

const chooseRandomTest = (dictionary) => {
  var results = {testSubject: undefined, randomFour: chooseRandomN(dictionary, TEST_POSSIBILITIES)};
  results['testSubject'] = results.randomFour[Math.floor((Math.random() * TEST_POSSIBILITIES) + 1) - 1];
  return results;
}

const chooseRandomN = (dictionary, n) => {
  var arrayOfN = []
  for(i = 0; i < n; i++) {
    let randIndex = Math.floor((Math.random() * dictionary.length) + 1) - 1;
    arrayOfN.push(randIndex);
  }
  return arrayOfN;
}

const bumpCountsForWeek = (subject, change) => {
  var currentWeekKey = moment().utc().startOf("week").format();
  var previousWeekKey = moment().subtract(1, 'weeks').utc().startOf("week").format();
  if(change > 0) {
    if(subject[currentWeekKey]) {
      if(subject[currentWeekKey][lastCorrect]) { 
        subject[currentWeekKey][lastCorrect]++;
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

function setState(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_DICTIONARY:
			state = Object.assign({}, {
				"dictionary": action.dictionary,
        "currentTestSeries": []
			}, chooseRandomTest(action.dictionary));
      return Object.assign({}, state, chooseRandomTest(state["dictionary"]))
    case CHANGE_CURRENT_TEST_SERIES:
      var randomSeries = chooseRandomN(state["dictionary"], 8);
      return Object.assign({}, state, {
        "currentTestSeries": randomSeries,
      }, chooseRandomTest(randomSeries))
    case CHANGE_CURRENT_TEST:
      return Object.assign({}, state, {
        correctIndex: undefined,
        correct: undefined
      }, chooseRandomTest(state["dictionary"]))
    case CHOOSE:
      var correct;
      var correctNumber = state.correctNumber;
      var incorrectNumber = state.incorrectNumber;
      var newSubject = Object.assign({}, state.dictionary[state.testSubject]);
      if(action.index === state.testSubject) {
        correctNumber++; 
        newSubject.correctNumber++; 
        newSubject = bumpCountsForWeek(newSubject, 1)
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
        correct: correct,
        dictionary: newDictionary,
        correctNumber: correctNumber,
        incorrectNumber: incorrectNumber,
        correctIndex: state.testSubject
      });
      return state
    default:
      return Object.assign({}, state, chooseRandomTest(state["dictionary"]))
  }
}
function mainReducer(state = INITIAL_STATE, action) {
  return setState(state, action)
}

export default mainReducer 
