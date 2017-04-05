// Take up to 10 minutes to write a function called makeStudentReport that takes a single argument, data.
//  data is an array of objects. Each object in the array represents a student and their letter grade for a course — for example,
//   {name: 'Johnny Robot', grade: 'C'}.

// makeStudentReport should return an array of strings. For each item in data, return a string that looks like this: '[name]: [grade]'.
//  The name and grade values on the student object should be substituted in.

var testData = [
    {name: 'Jane Doe', grade: 'A'},
    {name: 'John Dough', grade: 'B'},
    {name: 'Jill Do', grade: 'A'}
];
  var expectations = [
    'Jane Doe: A',
    'John Dough: B',
    'Jill Do: A'
  ];


function makeStudentReport(data){
  let stringArray = [];
  data.forEach(function(student) {
  	stringArray.push(`${student.name}: ${student.grade}`);
  })
  return stringArray;
}

let test = makeStudentReport(testData);
console.log(test);