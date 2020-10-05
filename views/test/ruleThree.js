function ruleThree(state, sum) {
    // Mantain the same state (LIFE)
    if (state === 1) {
       if ( sum === 2 || sum === 3) {
           return 1;
       }    
    }
}
  module.exports = ruleThree;