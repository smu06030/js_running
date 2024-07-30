function deepCopy(o) {
  var result = {};
  if (typeof o === "object" && o !== null)
    for (i in o) result[i] = deepCopy(o[i]);
  else result = o;
  return result;
}

var arr1 = [ { a : 1 }, { b : 2 } ]
var arr2 = deepCopy(arr1);

arr2[0].c = 3;

console.log(arr1)
console.log(arr2)