// inheritance 

function person (firstName, LastName) {
    this.firstName = firstName;
    this.LastName = LastName;
}

person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.LastName ;
}

function superHero(fName, lName){
    person.call(this, fName, lName);
    this.isSuperHero = true;
}

superHero.prototype.fightCrime = function () {
    console.log('Fighting crime');
}

superHero.prototype = Object.create(person.prototype)

const batman = new superHero('bruce', 'wayne');
superHero.prototype.constructor = superHero;

console.log(batman.getFullName());