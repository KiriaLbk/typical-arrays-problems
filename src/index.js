
exports.min = function min (array) {
  return (Array.isArray(array)==true && array.length!=0) ? array.sort(function(a, b) { return a - b; })[0] : 0;
}

exports.max = function max (array) {
  return (Array.isArray(array)==true && array.length!=0) ? array.sort(function(a, b) { return a - b; })[array.length-1] : 0;
}

exports.avg = function avg (array) {
  return (Array.isArray(array)==true && array.length!=0) ? array.reduce((sum, current) => sum + current)/array.length : 0;
}
