// prototype

function person (firstName, LastName) {
    this.firstName = firstName;
    this.LastName = LastName;
}

let person1= new person("Ismail", "Hossain");
let person2= new person("John", "Doe");

person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.LastName ;
}

console.log(person1.getFullName());
console.log(person2.getFullName());