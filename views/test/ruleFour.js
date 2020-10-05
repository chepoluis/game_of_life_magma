function ruleFour(state, sum) {
    // LIFE: exactly 3 living neighbors
    if (state === 0 && sum === 3) {
        return 1;
    }
}
  module.exports = ruleFour;