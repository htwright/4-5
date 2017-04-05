//Take up to 10 minutes to write a function called enrollInSummerSchool
//that takes a single argument, students.
//students is an array of objects, with each object representing a student — 
//for example, {name: 'Tim', status: 'Current student', course: 'Biology'}.
//
//enrollInSummerSchool should return an array of objects.
//For each object from the original array,
//it should return the original name and course,
//but should update the status to In Summer school. So, given this input:

var students = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  }
];

var results = [
  {
    name: 'Tim',
    status: 'In Summer school',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'In Summer school',
    course: 'Mathematics'
  },
];

var enrollInSummerSchool = function(students) {
    var results = [];
    
    for(var key in students) {
      students.status = 'In Summer school';
      results.push(students);
    }
    
    return results;
};

var results = enrollInSummerSchool(students);
console.log(results);






