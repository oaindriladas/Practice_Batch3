// OOPS concepts
// encapsulation
// abstraction
// inheritance
// polymorphism

class Person{
    constructor(name, age, race){
        this.name = name; //reference error
        this.age= age;
        this.race= race;
    }
    increment(){ this.age+=5; }
    display(){
        document.write("Members of person "+this.name+" age : "+this.age);
    }
}
const grandfather= new Person("Jack", 89, "Asian");
grandfather.increment();
grandfather.display();

class child extends Person{
    constructor(name, age, race, country)
    {
        super(name, age, race);
        this.country= country;
    }
    display() // method overloading
    {
        super.display();
        document.write("<br>Country is: "+this.country);
    }
   /*  display(age)
    {
        console.log("age is"+age);
    }
    display(name, age, race)
    {
        console.log("members of child: "+name+"age: "+age+" race: "+race);
    } */  //method over riding
}
let boy = new child('Jaideep', 15, 'Asian', 'India');
boy.increment();
boy.display();
boy.display(89);
boy.display('Deep', 9, 'Asian');
console.log(boy.age);

let grandmother = {name: 'Lila', age: 89, race: 'Asian'};
console.log(grandmother.name);

//array

let arr = [1,2,3,4,5];
arr.forEach(element => {
    console.log(element);
});

const arr_new= arr.filter((element) => 
    element>2
)
console.log(arr_new);

const array_2= arr.map((element) =>  element**2 )
console.log(array_2);

//assignment : 1 implement in-built functions of an array



