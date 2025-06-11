export class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    outputAgeAndName = () => console.log(`My name is ${this.name} and I am ${this.age} year old.`)
    outputAge = () => console.log(`I am ${this.age} year old.`)
    outputName = () => console.log(`My name is ${this.name}.`)

}

let student1 = new Student("Shoon Shoon", 16)
student1.outputAge()
student1.outputName()
student1.outputAgeAndName()
