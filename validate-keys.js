//Spend up to 20 minutes writing a function called validateKeys.
//This function takes two arguments, object and expectedKeys.
//object is (you guessed it!) an object that we want to valdiate keys for.
//expectedKeys is an array of keys that we expect to find on the object.
//
//validateKeys should return true if object has all of the keys from expectedKeys, and no additional keys.
//It should return false if one or more of the expectedKeys is missing from the object,
//or if the object contains extra keys not in expectedKeys.
var objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago'
};

var objectB = {
  id: 3,
  age: 33,
  city: 'Peoria'
};

var validateKeys = function(object, expectedKeys) {
    
    var objKeys = [];
    for(var key in object) {
        objKeys.push(key);
    }
    var actual = JSON.stringify(objKeys);
    var expected = JSON.stringify(expectedKeys);
    
    return actual === expected;
};

var expectedKeys = ['id', 'name', 'age', 'city'];

var logThis = validateKeys(objectB, expectedKeys);
console.log(logThis);






















// running the function with `objectA` and `expectedKeys`
// should return `false`


