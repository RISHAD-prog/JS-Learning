class Person {
    constructor(fName, lName){
        this.firstName = fName;
        this.lastName = lName;
    }

    sayMyName(){
        return this.firstName + ' ' + this.lastName;
    }
}

const classPerson = new Person('Bruce', 'Wayne');
console.log(classPerson.sayMyName())

class superHero extends Person {
    constructor(fName, lName){
        super(fName, lName);
        this.superHero = true;
    }

    fightCrime(){
        console.log("true");
    }
}
const batman = new superHero('Bruce', 'Wayne2');
console.log(batman.sayMyName());