import INITIAL_STATE from '../INITIAL_STATE.js'

const actions = require('../actions');

const LOAD_DICTIONARY = actions.LOAD_DICTIONARY
const UPDATE_ENTRY = actions.UPDATE_ENTRY
const CHANGE_CURRENT_TEST_SERIES = actions.CHANGE_CURRENT_TEST_SERIES
const CHANGE_CURRENT_TEST = actions.CHANGE_CURRENT_TEST
const CHOOSE = actions.CHOOSE

const TEST_POSSIBILITIES = 4;

const chooseRandomTest = (dictionary) => {
  var results = {testSubject: {}, randomFour: chooseRandomN(dictionary, TEST_POSSIBILITIES)};
  results['testSubject'] = results.randomFour[Math.floor((Math.random() * TEST_POSSIBILITIES) + 1) - 1];
  return results;
}

const chooseRandomN = (dictionary, n) => {
  var arrayOfN = []
  for(i = 0; i < n; i++) {
    let randIndex = Math.floor((Math.random() * dictionary.length) + 1) - 1;
    let result =  Object.assign({}, dictionary[randIndex], {index: randIndex});
    arrayOfN.push(result);
  }
  return arrayOfN;
}

function setState(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_DICTIONARY:
			state = Object.assign({}, {
				"dictionary": action.dictionary,
				"currentTestSeries": action.dictionary 
			});
      return Object.assign({}, state, chooseRandomTest(state["dictionary"]))
    case UPDATE_ENTRY:
      var state = Object.assign([], state)
      state[action.index] = action.newData;
      return state 
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
      if(action.index === state.testSubject.index) {
        correctNumber++; 
        correct = true;
      } else {
        incorrectNumber++; 
        correct = false;
      }
      return Object.assign({}, state, {
        correct: correct,
        correctNumber: correctNumber,
        incorrectNumber: incorrectNumber,
        correctIndex: state.testSubject.index 
      });
    default:
      return Object.assign({}, state, chooseRandomTest(state["dictionary"]))
  }
}
function mainReducer(state = INITIAL_STATE, action) {
  return setState(state, action)
}

export default mainReducer 
