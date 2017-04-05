//Expand on the previous example by adding a boss property to everyone except the owner of the company.
//Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.". For example: Junior Engineer Bob reports to Fred..
//What gets printed out for the owner?
//Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't report to anybody.


let obj1 = {
    name:"Rick",
    job_title:"Owner"
};
let obj2 = {
    name:"asdf",
    job_title:"Janitor",
    boss: 'wasd'
};
let obj3 = {
    name:"wasd",
    job_title:"Janitor",
    boss: 'wasd'
};
let obj4 = {
    name:"blue",
    job_title:"Janitor",
    boss: 'wasd'
};
let obj5 = {
    name:"red",
    job_title:"Janitor",
    boss: 'wasd'
};


let array = [obj1, obj2, obj3, obj4, obj5];

array.forEach(function(obj){
    if(obj.hasOwnProperty('boss')) {
      console.log(`${obj.job_title} ${obj.name} reports to ${obj.boss}.`);
    } else {
      console.log(`${obj.job_title} ${obj.name} doesn't report to anybody`)
    }
});

//console.log(...array);

