//complete this code
class Person {
	constructor(name,age){
		this.__name=name;
		this.__age=age
	}
	get name(){
		return this.__name;
	}
	set age(newAge){
		this.__age=newAge;
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age)
	}
	study(){
		console.log(`${this.name} is studing`)
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age)
	}
	tech(){
		console.log(`${this.name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
