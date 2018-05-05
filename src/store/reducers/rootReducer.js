// libraries
import uuidv1 from "uuid/v1";

// src
import phrases from "../../helpers/phrases";

const DEFAULT_STATE = {
  phrases: phrases,
  isPlaying: false
};

export default function(state = DEFAULT_STATE, action) {
  return state;
}
