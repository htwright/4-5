//Spend up to 15 minutes writing a function called findById. This function takes two arguments items and idNum. items is an array of objects. idNum is the id we're trying to find in items.
//
//Calling findById([{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}], 2) should return {id: 2, foo: 'bizz'}.

function findByID(items, idNum){
    let results = {};
    items.forEach(function (item){
        
        if (item.id == idNum) {
            results = item;
        }
    });
    
    return results;
}

var scratchData = [
  {id: 22, foo: 'bar'},
  {id: 28, foo: 'bizz'},
  {id: 19, foo: 'bazz'}
];

var test = findByID(scratchData, 22);
console.log(test);