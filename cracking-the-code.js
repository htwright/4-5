//Redo your Cracking the Code problem from String Drills but this time use an object to store the codes for each character. Instead of having the function accept a single word, have the function accept a string of words and then return the fully decoded message.

let testString = 'craft block argon meter bells brown croon droop';

function crackTheCode(str){
    let arr = str.split(' ');
    let string = '';
    arr.forEach(function(word){
        if (word[0] == 'a'){
            string = string + word[1];
        }else if (word[0] == 'b'){
            string = string + word[2];
        }else if (word[0] == 'c'){
            string = string + word[3];
        }else if (word[0] == 'd'){
            string = string + word[4];
        } else {string + ' ';
        }
            
    });return string;
}
let test = crackTheCode(testString);
console.log(test);