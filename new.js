// class person {
//     constructor(firstname, lastname, salary) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.salary = salary;
//     }
// }

// const heroPerson = new person('Hero', 'Balam', 25000);

// console.log(heroPerson);

// const friendlyPerson = new person('Kalam', 'Ahmed', 30000);

// console.log(friendlyPerson);

class Person {
    constructor(firstname, lastname, salary) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Balam', 2000);
console.log(heroPerson);

const friendlyPerson = new Person('Hero', 'Kalam', 25000);
console.log(friendlyPerson);

function Person1(firstname, lastname, salary) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.salary = salary;
}

const oldPerson = new Person1('Grand', 'Papa', 1200);
console.log(oldPerson);