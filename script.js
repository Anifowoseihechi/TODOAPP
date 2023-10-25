// // let name = "anifowose";
// // let fullname ="ihechi"
// // const course ="javascript"
// // console.log(name);
// // let data= prompt("how old are you", 100)
// // console.log(`you are ${data} years old`);


// // const date = new Date().getFullYear();

// // const YOB = 2015;

// // const age = date-YOB
// // if (age >= 18){
// //     console.log("you are an adult.");
// // } else if( age < 18 && age > 12){
// //     console.log ("you are a teenager");}
// //  else{
// //     console.log("you are child");
// // }

// // console.log(
// //     age>=18
// //     ?"you are an adult"
// //     :age < 18 && age > 12
// //     ?"you are an teenager"
// //     :"you are an fool"
// // );

// // let studentMarks = 101;
// // let position;


// // if (studentMarks >= 80 && studentMarks <= 100) {
// //   position = "1st Position";
// // } else if (studentMarks >= 60 && studentMarks < 80) {
// //   position = "2nd Position";
// // } else if (studentMarks >= 40 && studentMarks < 60) {
// //   position = "3rd Position";
// // } else if ( studentMarks >100) { 
// //     position = "invalid"

// // }
// // console.log("The student is in " + position);

// // Number1

// // const num = 2;

// // console.log(
// //    num > 0 ? 'number is positive' : num < 0 ? 'number is negative' : 'zero'
// // );







// // number 1

// // const number = -3;
// // console.log(number)

// // if (number > 0) {
// //   console.log("positive number");
// // } else if (number < 0) {
// //   console.log(" negative number");} else if( number == 0){
// //     console.log( "zero")
// //   }

// // NUMBER 2
// //   const number = 3;
// //   console.log(number);

// //   if (number % 2 == 0) {
// //     console.log("even");
// //   } else if (number % 2 == 1) {
// //     console.log(" odd");
// //   } 

//   // number1 = 20;
//   //   number2 = 30;
//   //   number3 = 40;
//   // console.log(number);

//   // if (number1 >= 20 ) {
//   //   console.log("40");
//   // } else if (number2 >= 30) {
//   //   console.log("40");
//   // } else if ( number3 >=40){
//   //   console.log("40");
//   // } 


// // let number =6;
// // console.log(number);


// // if (number < 7){
// //   number = 7
    
// // } else if( number > 7){ number = 7
// //     }
// //     console.log("number");
 



// // function age (age){
// //   if ( age >= 18){
// //     console.log ("you are eligble");
// //   } else{
// //     console.log("you are not eligble");
// //   }
// // }
// // age(18);

// // const ages = (age)=> {
// //   console.log(age >= 18 ? "you are eligle" :"you are ot eligle");
// // };
// // ages( 18);

// let obj = {
//   name : "obi",
//   log() {
//     console.log(this.name)
//   },

//   num : [[1.1, 1.2, 1.3], [2.1, 2.2, 2.3]],
// res: function() {
//   return { name: "Ada", gender: "male"}
// }
// }

// // delete num at index 1
// delete obj.num[1];
// console.log(obj);

// // push [3.1, 3.2, 3.3] to num
// obj.num.push([3.2, 3.3, 3.4]);
// console.log(obj);

// let myArray = [20, 20, 4, 2, 3, 4, 6, 3];
// console.log(findDup(myArray));


// function findDup(arr) {
//   let dup = [];
//   let obj = {};
//   for (const item of arr) {
//     if(obj[item]) {
//       dup.push(item);
//     } else {
//       obj[item] = true;
//     }
//   }
//   return dup;
// }

function minMax(num) {
  num.sort((a, b) => a-b);
  let min = num[0];
  let max = num[num.length - 1];
  console.log("min", min, "max" ,max );
}

minMax([20, 10, 40, 50, 20,15,5,65]);

// destructuring assignment
// REST parameter
// SPREAD OPERATION