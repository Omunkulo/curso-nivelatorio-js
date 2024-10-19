// Desecstructuracion
const person = {
    firstName: "andres",
    lastName: "asd",
    age: 28,
};

const director = {
    ...person,
    isActive: true,
};

console.log(director);
const { age, ...others} = director;
console.log(age);
console.log(others);

//  POO

class Animal {
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a noise`);
    }
};

class Dog extends Animal {
    speak(){
        console.log(`${this.name} barks.`)
    }
};

// Example 2

class Person {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    greet (){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// herencia
// extends se utiliza para cear iuna subclase que hereda de una clase padre, permitiendo la reutilizacion y extension del comportamiento de la clase padre.

class Student extends Person {
    // La palabra clave super utiliza para llamar al constructor de la clase padre desde una clase hija
    constructor(name,age,grade){
        super(name, age);
        this.grade = grade;
    }
    
    study() {
        console.log(`${this.name} is stidying.`);
    }
}

const student = new Student('Alice', 20, 'A');
student.greet();
student.study();
student.name;
student.age;
