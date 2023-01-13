// //problem1
// function oddEven(num){
//     if (num % 2 == 0){
//         return num + " is even";
//     }else{
//         return  num + " is odd ";
//     }
// }

// console.log(oddEven(9));

// //problem2

// function userName() {
//     let name = prompt("What is your name? ");
//     return name;
// }
// console.log(userName());

// //problem3
// function evenOdd(){
//     let number = prompt("Put the number here");

//     if(number % 2 == 0){
//         return number + " is even";
//     }else{
//         return number + " is odd";
//     }
// }

// console.log(evenOdd());

// //problem4

// let fruit = prompt("What is your favorite fruit? ");

// switch(fruit){
//     case "apple":
//         console.log("An apple is a good choice");
//         break;
//     case "pear":
//         console.log("The Pear is better");
//         break;
//     case "grape":
//         console.log("Grape is the best");  
//         break;
//     case "watermellon":
//         console.log("Watermellon is only in summer ");   
//         break;
//     default:
//         console.log("Given value isn't in the list");    
//         break;    
// }

// //problem 5

// for(let i = 0 ; i<= 100; i ++){
//     if (i%2==0) {
//         console.log(i);
//     }
// }

//problem 6

// while (true) {
//     let numb = prompt ("please put the number");
//     if (numb < 0 ) {
//         break;
//     }
// }

//problem 7

// let numbers = [10,12,42,55,100,90,32,55];
// let result = [];

// for(let nums of numbers){
//     if (nums % 5==0) {
//         result.push(nums);
//     }
// }

// console.log(result);

//problem 8

// let names = ["Gio","Luka","Nika","Ani","Eka","Nini","Sopo"];

// for( let i = 0; i< names.length ; i++){
//     if(names[i]==="Nika"){
//         continue;
//     }
//     console.log(names[i]);
// }

//problem  9

// let user ={
//     name: "luka",
//     surname: "Khurtsidze",
//     sex: "male",
//     age: 17,
// };

// let user1 ={
//     name: "Giorgi",
//     surname: "Sologashvili",
//     sex: "male",
//     age: 17,
// };

// let user2 ={
//     name: "Dato",
//     surname: "Zakareishviili",
//     age: 16,
//     sex: "male",
// };

// let user3 ={
//     name: "Ucha",
//     surname: "Moniava",
//     age: 16,
//     sex: "male"
// };

// let user4 ={
//     name: "Irakli",
//     surname: "Diasamidze",
//     age: 15,
//     sex: "Male"
// };

// let userArr = [user, user1, user2, user3, user4];

// let length = userArr.length;

// function customer(people){
//     if (length< 5) {
//         console.log("There must be min 5 users in a given Array! ");
//     }else{
//         for(let i = 0 ; i<= length; i++){
//             let man = people[i];
//             return(man.name + " " + man.surname + " "  + man.age + " " + man.sex);
//         }
//     }
// };

// console.log(customer([user, user1, user2, user3, user4])); 

//problem 10

    // const user = {
    //    isAdmin: true,
    // };
    //  const user1 = {
    //    isAdmin: false,
    // };


    // function isadmin(user){
    //     if (user.isAdmin==true) {
    //         console.log("Yes");
    //     }else{
    //         console.log("No");
    //     }
    // }

    // isadmin(user1);

//problem11
// const numbers = [
//     1, 4, 2, 14, 90, 13, 2, 0, 78, 199, 12, 313, 315, 789, 31, 12, 1, 1, 3467, 90,
//     70, 34, 43, 189,
//   ];


// function max(number) {
//     let length = numbers.length;
//     let biggest = numbers[0];
  
//     for (let i = 0; i =< length; i++) {
//       if (biggest < numbers[i]) {
//         biggest = numbers[i];
//       }
//     }
//     console.log(biggest);
//     return biggest;
//   }
// max(numbers);


//problem 12
// const numbers = [
//      1, 4, 2, 14, 90, 13, 2, 0, 78, 199, 12, 313, 315, 789, 31, 12, 1, 1, 3467, 90,
//      70, 34, 43, 189,
//     ];

//     let length = numbers.length;

// function min(num){
//     let length = numbers.length;
//     let min = numbers[0];

//     for(let i = 0; i <= length; i++){
//          if(min> numbers[i]){
//             min = numbers[i];
//          }
//     }
//     console.log(min);
//     return min;
// }

// min(numbers);







  
  




