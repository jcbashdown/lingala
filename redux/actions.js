export const CHANGE_CURRENT_TEST_SERIES = 'CHANGE_CURRENT_TEST_SERIES'
export const CHANGE_CURRENT_TEST = 'CHANGE_CURRENT_TEST'
export const CHOOSE = 'CHOOSE'
export const SWITCH_DICTIONARY = 'SWITCH_DICTIONARY'

export function changeCurrentTestSeries() {
  return { type: CHANGE_CURRENT_TEST_SERIES }
}
export function changeCurrentTest() {
  return { type: CHANGE_CURRENT_TEST }
}
export function choose(index) {
  return { type: CHOOSE, index: index }
}
export function switchDictionary(newDictionary) {
  return { type: SWITCH_DICTIONARY, newDictionary: newDictionary }
}
