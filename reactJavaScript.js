function sayHello(){
    for (var i = 0; i < 5; i++){
        console.log(i);
    }
    
    console.log(i);
}

sayHello();


// var -> function
// let -> block
// const -> block (but constant)


// Objects
const person = {
    name: 'Max',
    walk (){},
    talk (){}
};

// function within object is called a 'method'

person.talk();
person.name = '';

const targetMember = 'name';
person[targetMember.value] = 'John';


// functions as objects
const person = {
    name: 'Max',
    walk (){
        console.log(this);
    }
};

person.walk();

const walk = person.walk.bind(person);
walk();

// Arrow Functions

// old way of writing 
const square = function(number){
    return number * number;
}

// new arrow functions
const square = (number) => {
    return number * number;
}     
 
// if one parameter parentheses not need eg:
const square = number => {
    return number * number;
}    

// even more compact
const square = number => number * number;


// Array Filter
const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false},
];

/* Less Clean
const activeJobs = jobs.filter(function(job) {return job.isActive;})
*/

const activeJobs = jobs.filter(job => job.isActive)

// If isActive = true, job will be returned from filter method


