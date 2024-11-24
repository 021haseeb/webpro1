// JS Objects,
// let person="HASEEB";

// Creating Objects,
// let person="HASEEB";

// Creating Properties,
// let person={
//     name:"HASEEB",
//     age:21
// }

// Accessing Properties,
// let person={
//     name:"HASEEB",
//     age:21
// }
// console.log(person.age);

// Change Values of Properties,
// let person={
//         name:"HASEEB",
//         age:21
//     }
//     person.age=22;
//     console.log(person.age);

// Adding New Properties, 
// let person={
//             name:"HASEEB",
//             age:21
//         }
//         person.occupation="SOFTWARE ENGINEER ";
//         console.log(person.occupation);

// Deleting Properties,
// let person={
//             name:"HASEEB",
//             age:21
//         }
//         delete person.age;
//         console.log(person);

// Nested Objects, 
// let person={
//             name:"HASEEB",
//             age:{
//                 newage:24,
//                 oldage:22
//             }
//         }
        
//         console.log(person.age.newage);

// Creating Object Methods,
// let person={
//             name:"HASEEB",
//             age:21,
//             occupation:function(){
//                 console.log("THIS IS A SOFTWARE ENGINEER JS ");

//             }
//         }
        


// Accessing Object Methods,
// let person={
//     name:"HASEEB",
//     age:21,
//     occupation:function(){
//         console.log("THIS IS A SOFTWARE ENGINEER JS ");

//     }
// }
// person.occupation();
// let person={
//     name:"HASEEB",
//     age:21,
//     occupation:function(){
//         console.log(`THIS IS A SOFTWARE ENGINEER ${this.name}`);

//     }
// }
// person.occupation();


// Adding Method to an Object,
// let person={
//     name:"HASEEB",
//     age:21,
    
// }
// person.occupation=function(){
//     console.log(`THIS IS A SOFTWARE ENGINEER ${this.name} `);

// }

// person.occupation();



// Loop Through Object Properties,

// let person={
//     name:"HASEEB",
//     age:21
    
// }

// for(const property in person){
//     console.log(`${property}:
//         ${person[property]}`
//     );
// }


// Object. values(),

// let person={
//         name:"HASEEB",
//         age:21
        
//     }
//     const values = Object.values(person);
//     console.log(values);

// Object.entries(),
// const person={
//             name:"HASEEB",
//             age:21
            
//         }
//         const entries = Object.entries(person);
//         console.log(entries);

// SON.stringify (),


// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// const jsonString = JSON.stringify(person);
// console.log(jsonString);

// Object Constructor,
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   const person = new Person("John", 30);
//   console.log(person);

// Property Default Values,

// Adding a property to a Constructor,

// Constructor Function Methods,

// Adding a Method to an Object,

// Adding a Method to a Constructor,

// JavaScript Events,

// HTML Events (onchange, onclick, onload),

// Template Strings,

// String Length,

// String charAt()

// ,String charCodeAt()

// , String at(),

// String slice(),

// String substring()

// ,String substr()

// ,String toUpperCase()
// let person="haseeb";
// console.log(person.toUpperCase());


// ,String toLowerCase()
// let person="haseeb";
// console.log(person.toLowerCase());
// ,String concat()
// let person="haseeb";
// let pers="Shakeel";
// const result=person.concat(pers);
// console.log(result);

// ,String trim()
// const str = "   Hello, World!   ";
// const trimmedStr = str.trim();
// console.log(trimmedStr);


// ,String trimStart()
// const str = "   Hello, World!";
// const trimmedStr = str.trimStart();
// console.log(trimmedStr);

// ,String trimEnd(),
// const str = "Hello, World!   ";
// const trimmedStr = str.trimEnd();
// console.log(trimmedStr);


// String indexOf()

// const str = "Hello, World! World!";
// const index = str.lastIndexOf("World");
// console.log(index); 

// , String lastIndexOf(),

// String search()
// const str = "Hello, World!";
// const index = str.search("World");
// console.log(index); 

// ,String match()

// const str = "Hello, World!";
// const match = str.match("World");
// console.log(match);

// ,String matchAll()

// ,String includes(),

// const str = "Hello, World!";
// const includes = str.includes("World");
// console.log(includes);

// String endWith(),

// const str = "Hello, World!";
// const endsWith = str.endsWith("World!");
// console.log(endsWith); 


document.addEventListener('DOMContentLoaded',()=>{
const btn=document.getElementById('See-more');
const moretxt=document.getElementById('more-text');

btn.addEventListener('click',()=>{
    if(moretxt.style.display==="none"){
        moretxt.style.display="inline";
        btn.textContent="See Less";
    }
    else{
        moretxt.style.display="none";
        btn.textContent="See More";
    }
})
})






