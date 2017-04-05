//Write a factory function called createCharacter (review in this assignment) that could appropriately build characters from LOTR that have the following attributes:
//===============================================================================================
//| Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
//-----------------------------------------------------------------------------------------------
//| Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        |
//-----------------------------------------------------------------------------------------------
//| Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        |
//-----------------------------------------------------------------------------------------------
//| Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2        |
//-----------------------------------------------------------------------------------------------
//| Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8        |
//-----------------------------------------------------------------------------------------------
//| Legolas                   | legolas     | Elf        | Woodland Realm | 8        | 5        |
//-----------------------------------------------------------------------------------------------
//Each character should have the method describe which takes no parameters and prints out the string: "{name} is a {race} from {origin}."
//
//Each character should also have a method called evaluateFight that takes in a character object and returns the following string: "Your opponent takes {x} damage and you receive {y} damage" where x and y are the differences between each characters attack and defense values. If defense exceeds attack, then take zero damage.
//
//Using array literal syntax, create an array characters that calls your factory function for each character in the table above with the relevant parameters. Your characters array should now have 5 objects in it.
//
//Add a new character to characters (make up any attributes not provided):
//
//Arwen Undomiel is a Half-Elf of Rivendell
//Using the .find() function, retrieve your character nicknamed aragorn from characters and then call his describe method.
//
//Using the .filter() function, create a new array from characters that ONLY contains characters of the race Hobbit.
//
//Using the .filter() function, create a new array from characters that ONLY contains characters with attack value above 5.
//
//What if you wanted to equip a weapon for each character and change how they are described? For example:
//
//Gandolf the White is a Wizard of the Middle Earth who uses a wizard staff
//Bilbo Baggings is a Hobbit of the Shire who uses the Ring
//Frodo ... String and Barrow Blade
//Aragon .... Anduril
//Legolas ... Bow and Arrow
//Arwen .... Hadhafang
//How would you change the factory function and other methods?
//    
//**factory function***
//function mammal(name, numEyes) {
//  return {
//    name: name,
//    isWarmblooded: true,
//    numEyes: numEyes,
//    evolve: function() {
//      console.log(
//        "I'm not mutating, I'm evolving.");
//      this.numEyes ++;
//    },
//    explainYourSelf: function() {
//      console.log(
//        "I'm just a " + this.name + " with " +
//        this.numEyes + " eye(s). Nothing to see here."
//      );
//    }
//  };
//}
//
//var tiger = mammal('tiger', 2);
//tiger.explainYourSelf();
//tiger.evolve();
//tiger.explainYourSelf();
//
//var oneEyedBadger = mammal('badger', 1);
//oneEyedBadger.explainYourSelf();
    
var createCharacter = function(name, nickName, race, origin, attack, defense) {
    return { 
        name: name,
        nickName: nickName,
        race: race,
        origin: origin,
        attack: attack,
        defense: defense,
        describe: function() {
          console.log(`${this.name} is a ${this.race} from ${this.origin}.`)
        },
        evaluateFight:function(character){
        let x = this.attack - character.defense;
        let y = character.attack - this.defense;
        if (x < 1){
            x = 0;
        }if (y < 1){
            y = 0;
        }return `Your opponent takes ${x} and you recieve ${y} damage`;

    }        
    }
};    

var characters = [createCharacter('Gandalf the White', 'gandalf', 'wizard', 'Middle Earth', 10, 6),
                  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
                  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
                  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 6, 8),
                  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
                  createCharacter('Arwen Undomiel', 'Arwen', 'Girl-Elf', 'Girl-Woodland Realm', 6, 8)
                 ];

var lookForAragorn = function(name) {
  if(name.nickName === 'aragorn') {
      return characters[2].describe();
  }
};

var found = characters.find(lookForAragorn);
console.log(found);




