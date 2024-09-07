//implicit binding
const person = {
    name: 'john',
    sayMyName: function() {
        console.log(`My name is : ${this.name}`)
    }
}

person.sayMyName();

//explicit binding

const person1 = {
    name: 'john',
}

function sayMyName() {
    console.log(`My name is : ${this.name}`)
}

sayMyName.call(person1);

function person (name){
    this.name = name;
}

const a = new person("rishad");

console.log(a.name);