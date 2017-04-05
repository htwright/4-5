//Spend up to 20 minutes writing a function called makeToDos. This function should take two arguments: owner and toDos. owner is a string of the name of the owner of the to do list. toDos is an array of strings representing items to be done.
//
//makeToDos should return an object with owner and toDos properties that correspond to the values passed in as arguments.
//
//It should also have a method called .generateHtml. This method should return a string representing an unordered list. Each item from toDos should appear as an <li> in the list. For example, if makeToDos was called like this: makeToDos('Teddy', ['wake', 'eat', 'drink', 'work', 'sleep']), calling .generateHtml on the resulting object should generate a string like this: '
//<ul>
//    <li>wake</li>
//    <li>eat</li>
//    <li>drink</li>
//    <li>work</li>
//    <li>sleep</li>
//</ul>'.

function makeToDos(owner, toDos){
    let obj = {
        owner:owner,
        toDos:toDos,
        generateHtml:function(){
            let str = '<ul>';
            toDos.map(function (toDo){
                 str = `${str}<li>${toDo}</li>`;
              //  str = str + `<li>${toDo}</li>`;
                return str;
            }); return `${str}</ul>`;
            
            //`<ul><li>${toDos[0]}</li></ul>
            
        }
        
    }
    return obj;
}
var testList = ['get milk', 'walk dog', 'pay bills', 'eat dinner'];
var testOwner = 'Steve';
let test = makeToDos(testOwner, testList);
let test1 = test.generateHtml();

console.log(test1);
console.log(test);