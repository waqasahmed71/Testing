// function calculate(num1: number, num2: number, operator: string){
//     if (operator === "+"){
//         console.log(num1+num2)
//     }else if (operator === "-"){

// import inquirer from "inquirer";

//         console.log(num1-num2)
//     }else if (operator === "/")
//         console.log(num1/num2)
// }
// calculate(5, 3, "/");
    
// function makeFullName (firstName: string, LastName: string ){
//     console.log(firstName+ "LastName)

// }
// makeFullName("Waqas", "Ahmed")
// let teacher = {
//     name: "Zeeshan",
//     experience: "10"
// }
// console.log(teacher.name)
// console.log(teacher["name"]);
// interface Ball {
//     diameter : number
// }

// interface cricket_ball : Ball = {
//     diameter : number
// }
// type Author = {
//     firstName : string,
//     lastaname : string
// }

// type Book = {
//     author : Author,
//     publishedDate : string
// }

// let book : Book ={
//     author:{
//         firstName: "Wania",
//         lastaname: "Khan"
//     }
// let teacher = {
//     name : "Wania",
//     age : 30
// }
// console.log (teacher.age)
// Type Declaration
// let student : {
//     name: string,
//     age: number
// }

// student = {
//     name: "Hira",
//     age: 30
// }

// console.log(student["name"]);
// console.log(student.age);
// let student : {
//     name : string,
//     age : number
// }
// student = {
//     name : "Wania",
//     age : 45
// }
// console.log (student.name)
// console.log (student["name"])
// console.log (student.age)
// console.log (student["age"])
// let teacher : {
//     name : string,
//     age: number
//     experience: number
// }
// teacher = {
//     name : "Wania",
//     age : 25,
//     experience:5
// }
// console.log (teacher.experience)
// console.log (teacher["name"])
// console.log (teacher.age)

// type Author = {
//     firstName: string;
//     lastName: string;
// };

// type Book = {
//     author: Author;
//     name: string;
// };

// const myBook : Book = {
//     author: {
//         firstName: "Zia",
//         lastName: "Khan"
//     },
//     name: "My Best Book"
// }
// console.log(myBook.name)
// interface Student {
//     student_id: number;
//     name: string;
//   }
    
// interface Teacher {
//     teacher_Id: number;
//     teacher_name: string;
// }
    
// type intersected_type = Student & Teacher;
    
// let obj1: intersected_type = {
//     student_id: 3232,
//     name: "rita",
//     teacher_Id: 7873,
//     teacher_name: "seema",
// };
    
// console.log(obj1.teacher_Id);
// console.log(obj1.name);
// type Author = {
//     firstName: string;
//     lastName: string;
// };

// type Book = {
//     author: Author;
//     name: string;
// };

// const myBook : Book = {
//     author: {
//         firstName: "Zia",
//         lastName: "Khan"
//     },
//     name: "My Best Book"
// }
// console.log(myBook.author)
// type fullName = "Wania" | "Sheraz"
// let name: fullName = "Sheraz"
// interface Student {
//     student_id: number;
//     name: string;
//   }
    
// interface Teacher {
//     teacher_Id: number;
//     teacher_name: string;
// }
    
// type intersected_type = Student & Teacher;
    
// let obj1: intersected_type = {
//     student_id: 3232,
//     name: "rita",
//     teacher_Id: 7873,
//     teacher_name: "seema",
// };
    
// console.log(obj1.teacher_Id);
// console.log(obj1.name);
// function error (message: string): never{
//     throw new Error(message)
// }

// function checktype() never {


// }
// let myname: unknown = "Zia";
// console.log((myname as string).length);
// console.log((<string> myname).length)
// let myname: unknown;
// console.log(typeof myname)
// myname = "harry";
// console.log (typeof myname)
// let newname = myname as string
// // console.lgo (typeof newname)

//fresh object
// interface type {
//     id: number,
//     name: string
// }
// //case 1
// let myType = {id:22, name: "Wania"} //ok
// myType = {id:24, name: "Mazhar"}
// // case 2a
// myType = {id:23, name_person: "Wania"} // Error: Missing prorperty or rename

// // case 2b
// let x : {id: number, [a:string]:any}
// x = {id:2, name:"Wania"}
// x= {id:2, name_person: "Wania"} //ok
// //case 3
// myType = {id:2, name:"Wania", age:60} //Error, Excess property
// //myType = x

// //stale object cases:
// let myType2 : {id: number, name:string}
// myType2 ={id:33, name: "TS"}
// //case1
// myType = myType2 //ok

// //case2
// let x1 ={id:22, new_name:"Wania"}
// myType2 = x1 //Error: Missing or rename property

// //case 2b;
// let x2 : {id:number, [w:string]:any} 
// let y1 = {id:88, admin_name: "Wania"}
// x2 = y1 //ok
// //myType = y1

// //case 3
// let y2 ={id:44, admin_name: "Wania", age:60}
// y1 = y2
// import inquirer from "inquirer";

// interface Item {
//     [Key : string]: string | number;

// }
// let fruits : Item  [] =[
//     {id:1,item: "Apple", price:10},
//     {id:2,item: "Orange", price:20},
//     {id:3,item: "Peach", price:30},
// ];
// let Vegetables : Item  [] =[
//     {id:1,item: "Cucumber", price:10},
//     {id:2,item: "Potato", price:20},
//     {id:3,item: "Tomato", price:30},
// ];
// let getGrocery = async () => {
//     let item = await inquirer.prompt([
//         {
//         name: "Choice",
//         type: "list",
//         message: "What you would shop today \n",
//         choices: [fruits[0].item, fruits [1].item]
//     },
// ]);
// };
// getGrocery();
// Calculator project on Panaverse DAO
// Shopping project using inquirer and chalk
// let x: unknown = 'helloworld';

// console.log((x as string).length);
//Enum
let array1 : number[] = [5, 6, 7];//correct syntax
console.log(array1[1]);//correct syntax
let array2:Array<number> = [1, 2, 3];//alternative correct syntax
