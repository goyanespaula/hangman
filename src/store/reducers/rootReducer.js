// libraries

// src
import phrases from "../../helpers/phrases";
import getRandom from "../../helpers/getRandom";
import formatIntGuess from "../../helpers/formatIntGuess";
import {
  INCREASE_ATTEMPTS,
  UPDATE_GUESS,
  UPDATE_WIN
} from "../../actions/actionTypes";

let phrase = getRandom(phrases);
const DEFAULT_STATE = {
  phrases: phrases,
  currPhrase: phrase,
  currGuess: formatIntGuess(phrase),
  attempts: 0,
  isPlaying: false,
  showWinScreen: false,
  showLoseScreen: false
};

export default function(state = DEFAULT_STATE, action) {
  console.log(action);
  switch (action.type) {
    case INCREASE_ATTEMPTS:
      let updatedAttempts = ++state.attempts;
      return { ...state, attempts: updatedAttempts };
    case UPDATE_GUESS:
      return { ...state, currGuess: action.updatedGuess };
    case UPDATE_WIN:
      return { ...state, showWinScreen: true, currGuess: action.updatedGuess };
    default:
      return state;
  }
}
