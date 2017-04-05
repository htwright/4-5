//Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
//Loop over the object using for ... in
//Use console.log to show each property name and its associated value.
//
//


let obj = {
    foo:1,
    bar:2,
    quux:3,
    fum:4,
    spam:5
};

for (key in obj){
    console.log(key);
}