module.exports = function(arr) {
  return String(arr.reduce((acc, curr) => acc + curr, 0));
}