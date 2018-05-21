function formatIntGuess(str) {
  return str
    .split("")
    .map(char => {
      if (char === " ") {
        return " ";
      }
      return "?";
    })
    .join("");
}

export default formatIntGuess;
