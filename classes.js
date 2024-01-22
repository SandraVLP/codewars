
//"this" is a problem
JavaScript:
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return this.name = first + ' ' + last;
}

//Fun with ES6 Classes #1 - People, people, people
JavaScript:
class Person {
  constructor (firstName='John', lastName='Doe', age=0, gender='Male'){
    this.firstName=firstName;
		this.lastName=lastName;
		this.age=age;
		this.gender=gender;
		this.sayFullName = () => this.firstName + ' ' + this.lastName;
  }
	
	static greetExtraTerrestrials(raceName){
		return `Welcome to Planet Earth ${raceName}`
	}
}

//Fun with ES6 Classes #2 - Animals and Inheritance
JavaScript:
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, `shark`, status);
  }
}

class Cat extends Animal {
  constructor(name, age, status){
    super(name, age, 4, `cat`, status);
  }
  introduce(){
    return super.introduce() + "  Meow meow!"
  }
}

class Dog extends Animal {
  constructor(name, age, status, master){
    super(name, age, 4, `dog`, status);
    this.master=master;
  }
  greetMaster(){
    return `Hello ${this.master}`;
  }
}

//Classy Classes
JavaScript:
class Person {
  constructor(name, age) {
    this.name=name;
    this.age=age;  
  }
  get info(){return `${this.name}s age is ${this.age}`}
}

//Basic subclasses - Adam and Eve
JavaScript:

class God{
  static create(){
    return [new Man(`Adam`), new Woman(`Eva`)]
  }
}

class Human{
  constructor(name){
    this.name=name || `Anonymous`
  }
}
class Man extends Human{}
class Woman extends Human{}

//Simple Fun #102: Missed Classes
JavaScript:
function missedClasses(year, daysOfTheWeek, holidays) {
let count=0 
  let holiday,monthHoliday,dayHoliday,weekDay,date;
  
  for (holiday of holidays){
    [monthHoliday,dayHoliday]=holiday.split('-').map(Number);
    
		date = new Date(year + (monthHoliday<6), monthHoliday-1, dayHoliday)
		weekDay=date.getDay() || 7;
    
    count+=  +daysOfTheWeek.includes(weekDay);
  }
  
  return count;
  
  
}

//Fun with ES6 Classes #4 - Cubes and Setters
JavaScript:
// Go ahead and define your class :)
class Cube{
  constructor(length){
    this.length=length;
  }
  get volume(){
    return this.length**3;
  }
  get surfaceArea(){
    return this.length**2  * 6;
  }
  
  set volume(volume){
    this.length= volume**(1/3);
  }
  set surfaceArea(s){
    this.length = (s / 6) ** 0.5;
  }
}

//Make Class
JavaScript:
function makeClass( ...props ) { 
  return function ( ...args ) { 
  props.forEach( (prop, i) => this[prop] = args[i] ) 
  }; 
}