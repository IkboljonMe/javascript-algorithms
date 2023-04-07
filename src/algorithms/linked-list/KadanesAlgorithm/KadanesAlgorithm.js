//LINK TO TUTORIAL:https://www.youtube.com/watch?v=YxuK6A3SvTs
function kadanesAlgorithm(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + arr[i], arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}
module.exports = kadanesAlgorithm;
