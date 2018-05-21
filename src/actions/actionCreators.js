// src
import { INCREASE_ATTEMPTS, UPDATE_GUESS, UPDATE_WIN } from "./actionTypes";

export const increaseAttempts = () => ({
  type: INCREASE_ATTEMPTS
});

export const updateGuess = updatedGuess => ({
  type: UPDATE_GUESS,
  updatedGuess
});

export const updateWinStatus = updatedGuess => ({
  type: UPDATE_WIN,
  updatedGuess
});

/*
Action for >10 attempts 
*/
