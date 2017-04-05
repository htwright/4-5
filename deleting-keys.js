//Modify the keyDeleter function so that it deletes keys
//for foo and 
//bar for any 
//object passed in,
//and then returns the modified object.

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;    
}

var sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang'
};

var result = keyDeleter(sampleObj);
console.log(result);