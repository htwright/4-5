//Create 3-5 objects, each with a name and a job_title. Use people you know, or characters from fiction, or your own inventions.
//Store these objects in an array.
//Iterate over the array and use console.log to show each person's job title and name.

let obj1 = {
    name:"Rick",
    job_title:"Janitor"
};
let obj2 = {
    name:"asdf",
    job_title:"Janitor"
};
let obj3 = {
    name:"wasd",
    job_title:"Janitor"
};
let obj4 = {
    name:"blue",
    job_title:"Janitor"
};
let obj5 = {
    name:"red",
    job_title:"Janitor"
};


let array = [obj1, obj2, obj3, obj4, obj5];

array.forEach(function(obj){
              console.log(obj.name, obj.job_title)
             })
console.log(...array);