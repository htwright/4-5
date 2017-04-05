function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function (){
    	return `${this.firstName} ${this.lastName}`;
    }
  };
    return person;

}
  let test = personMaker()
  let test1 = test.fullName();
  console.log(test1);