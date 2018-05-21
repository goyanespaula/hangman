function getRandom(arr) {
  return arr[Math.round(Math.random() * arr.length)];
}

export default getRandom;
